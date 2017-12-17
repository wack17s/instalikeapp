import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import profileIcon from './profileIcon.png';

import styles from './styles';

export interface Props {
    profileOpen: boolean;
    onToggleProfile: () => void;
}

export default class Main extends React.Component<Props, object> {
    handleProfile = () => {
        this.props.onToggleProfile();
    }

    renderButton = (condition: boolean) => {
        return condition
            ? (
                <TouchableOpacity onPress={this.handleProfile}>
                    <View style={styles.button}>
                        <Image source={profileIcon} style={styles.profileIcon} />
                    </View>
                </TouchableOpacity>
            )
            : <View style={styles.button} />;
    }

    render(): JSX.Element {
        const { profileOpen } = this.props;
        const title = profileOpen ? 'Profile' : 'Instagram Like App';

        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.button} />

                    <Text style={styles.text}>{title}</Text>

                    {this.renderButton(!profileOpen)}
                </View>
                <View style={styles.separator} />
            </View>
        );
    }
}
