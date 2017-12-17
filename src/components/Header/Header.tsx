import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import profileIcon from './profileIcon.png';

import styles from './styles';

export interface Props {
    onOpenProfile: () => void;
}

export default class Main extends React.Component<Props, object> {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.button} />
                    <Text style={styles.text}>Instagram Like App</Text>
                    <TouchableOpacity onPress={this.props.onOpenProfile}>
                        <View style={styles.button}>
                            <Image source={profileIcon} style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
            </View>
        );
    }
}
