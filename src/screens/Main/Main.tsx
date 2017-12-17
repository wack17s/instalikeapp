import * as React from 'react';
import { View, FlatList, Image } from 'react-native';
import { inject, observer } from 'mobx-react';

import { PROFILE_STORE } from '../../constants/stores';
import { IProfileStore } from '../../stores/profile';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import Toast from '../../components/Toast';
import Profile from '../Profile';

import pickImage, { Result } from '../../libs/imagePicker';

import styles from './styles';

export interface Props {
    PROFILE_STORE?: IProfileStore;
}
export interface State {}

const defaultSources = [
    'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_1280.jpg'
] as [string];

@inject(PROFILE_STORE)
@observer
export default class Main extends React.Component<Props, State> {
    toast: Toast | null;

    state = {
        sources: []
    };

    handleAdd = () => {
        if (this.toast) this.toast.handleStart();

        pickImage(this.handleImagePick);
    }

    handleImagePick = ({ status, uri }: Result) => {
        if (this.toast) this.toast.handleEnd(status);

        if (uri) this.setState({ sources: [ ...this.state.sources, uri ] });
    }

    handleOpenProfile = () => {
        this.props.PROFILE_STORE!.toggleOpen();
    }

    keyExtractor = (item: string) => item;

    renderImage = ({ item }: {item: string}) => {
        return (
            <Image source={{ uri: item}} style={styles.image} />
        );
    }

    render(): JSX.Element {
        const { sources } = this.state;

        return (
            <View style={styles.container}>
                <Header onOpenProfile={this.handleOpenProfile} />
                <View style={styles.listContainer}>
                    <FlatList
                        data         = {[ ...defaultSources, ...sources ]}
                        keyExtractor = {this.keyExtractor}
                        renderItem   = {this.renderImage}
                        numColumns   = {2}
                    />
                </View>
                <BottomBar onPress={this.handleAdd} />
                <Profile />
                <Toast ref={item => this.toast = item} />
            </View>
        );
    }
}
