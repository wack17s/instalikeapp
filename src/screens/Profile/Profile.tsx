import * as React from 'react';
import { View, TouchableOpacity, Image, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { inject, observer } from 'mobx-react';

import { PROFILE_STORE } from '../../constants/stores';
import { IProfileStore } from '../../stores/profile';

import pickImage, { Result } from '../../libs/imagePicker';

import defaultPicture from './defaultPicture.png';

import styles from './styles';

export interface Props {
    PROFILE_STORE?: IProfileStore;
}

export interface State {
    editMode: boolean;
}

const DEFAULT_NAME = '%username%';

@inject(PROFILE_STORE)
@observer
export default class Profile extends React.Component<Props, State> {
    state = {
        editMode: false
    };

    handleClose = () => {
        this.props.PROFILE_STORE!.toggleOpen();
    }

    handleToggleEdit = () => {
        if (this.state.editMode) this.props.PROFILE_STORE!.saveProfile();

        this.setState(({ editMode }) => ({ editMode: !editMode }));
    }

    handleChangePicture = () => {
        pickImage(this.handleImagePick);
    }

    handleImagePick = ({ uri }: Result) => {
        if (uri) this.props.PROFILE_STORE!.setPicture(uri);
    }

    handleChangeName = (nameEdit: string) => {
        this.props.PROFILE_STORE!.setName(nameEdit);
    }

    render(): JSX.Element | null {
        const { isOpen, picture, name } = this.props.PROFILE_STORE!;
        const { editMode } = this.state;
        const imageSource = picture ? { uri: picture } : defaultPicture;

        return (
            <Modal
                style        = {styles.modal}
                isVisible    = {isOpen}
                animationIn  = "slideInRight"
                animationOut = "slideOutRight"
                backdropOpacity = {0}
            >
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={imageSource} style={styles.image} />
                        {editMode && Platform.OS === 'ios' && (
                            <TouchableOpacity onPressOut={this.handleChangePicture} activeOpacity={0.9}>
                                <View style={styles.changePhotoContainer}>
                                    <View style={styles.innerChangePhotoContainer}>
                                        <Text style={styles.changePhotoText}>Change Photo</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>

                    {editMode && Platform.OS === 'android' && (
                        <TouchableOpacity onPressOut={this.handleChangePicture} activeOpacity={0.9}>
                            <View style={styles.innerChangePhotoContainerAndroid}>
                                <Text style={styles.changePhotoText}>Change Photo</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    <View style={styles.nameContainer}>
                        {!editMode
                            ? <Text style={styles.nameText}>{name || DEFAULT_NAME}</Text>
                            : <TextInput
                                autoFocus    = {true}
                                placeholder  = {name || DEFAULT_NAME}
                                value        = {name}
                                onChangeText = {this.handleChangeName}
                                style        = {styles.editName}
                            />}
                    </View>

                    <TouchableOpacity onPress={this.handleToggleEdit}>
                        <View style={styles.editButton}>
                            <Text style={styles.editText}>{editMode ? 'Save' : 'Edit'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleClose}>
                        <View style={styles.closeButton}>
                            <Text style={styles.closeText}>Go Back</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Modal>
        );
    }
}
