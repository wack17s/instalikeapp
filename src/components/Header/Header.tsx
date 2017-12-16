import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export interface Props {}

export default class Main extends React.Component<Props, object> {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.button} />
                <Text style={styles.text}>Instagram like app</Text>
                <View style={styles.button} />
            </View>
        );
    }
}
