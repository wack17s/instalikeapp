import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export interface Props {
    onPress: () => void;
}

export default class Main extends React.Component<Props, object> {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.separator} />
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
