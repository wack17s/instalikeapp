import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export interface Props {}

export default class Main extends React.Component<Props, object> {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>+</Text>
            </View>
        );
    }
}
