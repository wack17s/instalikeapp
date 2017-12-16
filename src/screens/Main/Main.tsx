import * as React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';

import styles from './styles';

export interface Props {}

export default class Main extends React.Component<Props, object> {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.listContainer} />
                <BottomBar />
            </View>
        );
    }
}
