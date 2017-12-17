import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { inject, observer } from 'mobx-react';

import { PROFILE_STORE } from '../../constants/stores';
import { IProfileStore } from '../../stores/profile';

import styles from './styles';

export interface Props {
    PROFILE_STORE?: IProfileStore;
}

export interface State {
    name: string;
    editMode: boolean;
}

@inject(PROFILE_STORE)
@observer
export default class Profile extends React.Component<Props, State> {
    state = {
        name: '',
        editMode: false
    };

    handleClose = () => {
        this.props.PROFILE_STORE!.toggleOpen();
    }

    render(): JSX.Element | null {
        return (
            <Modal
                isVisible    = {this.props.PROFILE_STORE!.isOpen}
                animationIn  = "slideInRight"
                animationOut = "slideOutRight"
                style        = {styles.modal}
                backdropOpacity = {0}
            >
                <TouchableWithoutFeedback onPress={this.handleClose}>
                    <View style={styles.container}>
                        <View />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}
