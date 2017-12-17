import * as React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react';
import PhotoView from 'react-native-photo-view';

import { PHOTOS_STORE } from '../../constants/stores';
import { IPhotosStore } from '../../stores/photos';

import styles from './styles';

export interface Props {
    PHOTOS_STORE?: IPhotosStore;
}

export interface State {}

@inject(PHOTOS_STORE)
@observer
export default class ImageViewer extends React.Component<Props, State> {
    handleClose = () => {
        this.props.PHOTOS_STORE!.toggleOpenPhoto();
    }

    render(): JSX.Element | null {
        const { fullPicture } = this.props.PHOTOS_STORE!;

        return (
            <Modal visible={!!fullPicture} animationType="fade">
                <View style={styles.container}>
                    <PhotoView
                        source           = {{ uri: fullPicture }}
                        style            = {styles.image}
                        minimumZoomScale = {1}
                        maximumZoomScale = {3}
                    />
                    <TouchableHighlight onPress={this.handleClose} style={styles.closeButton}>
                        <View>
                            <Text style={styles.closeText}>Close</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </Modal>
        );
    }
}
