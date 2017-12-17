import * as React from 'react';
import { View, FlatList, Image, AppState, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';

import { PROFILE_STORE, PHOTOS_STORE } from '../../constants/stores';
import { IProfileStore } from '../../stores/profile';
import { IPhotosStore } from '../../stores/photos';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import Toast from '../../components/Toast';

import Profile from '../Profile';
import ImageViewer from '../ImageViewer';

import pickImage, { Result } from '../../libs/imagePicker';

import styles from './styles';

export interface Props {
    PROFILE_STORE: IProfileStore;
    PHOTOS_STORE: IPhotosStore;
}
export interface State {}

@inject(PROFILE_STORE, PHOTOS_STORE)
@observer
export default class Main extends React.Component<Props, State> {
    toast: Toast | null;

    state = {
        appState: 'active'
    };

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }
    
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange = (nextAppState: string) => {
        if (nextAppState.match(/inactive|background/) && this.state.appState === 'active') {
            this.props.PHOTOS_STORE!.savePhotos();
        }

        this.setState({appState: nextAppState});
    }

    handleAdd = () => {
        if (this.toast) this.toast.handleStart();

        pickImage(this.handleImagePick);
    }

    handleImagePick = ({ status, uri }: Result) => {
        if (this.toast) this.toast.handleEnd(status);

        if (uri) this.props.PHOTOS_STORE!.addPhoto(uri);
    }

    handleToggleProfile = () => {
        this.props.PROFILE_STORE!.toggleOpen();
    }

    handleOpenPhoto = (url: string) => {
        this.props.PHOTOS_STORE!.toggleOpenPhoto(url);
    }

    keyExtractor = (item: { id: string }) => item.id;

    renderImage = ({ item }: {item: { url: string }}) => {
        return (
            <TouchableOpacity onPress={this.handleOpenPhoto.bind(null, item.url)}>
                <View>
                    <Image source={{ uri: item.url}} style={styles.image} />
                </View>
            </TouchableOpacity>
        );
    }

    render(): JSX.Element {
        const data = this.props.PHOTOS_STORE!.photos.map(item => item);

        return (
            <View style={styles.container}>
                <Header onToggleProfile={this.handleToggleProfile} profileOpen={this.props.PROFILE_STORE!.isOpen} />
                <View style={styles.listContainer}>
                    <FlatList
                        data         = {data}
                        keyExtractor = {this.keyExtractor}
                        renderItem   = {this.renderImage}
                        numColumns   = {2}
                    />
                </View>
                <BottomBar onPress={this.handleAdd} />
                <ImageViewer />
                <Profile />
                <Toast ref={item => this.toast = item} />
            </View>
        );
    }
}
