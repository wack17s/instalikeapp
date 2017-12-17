import * as React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import colors from '../../constants/colors';

import styles from './styles';

export interface Props {
    closeTimeout?: number;
}

export interface State {
    status: string;
    visible: boolean;
}

const CLOSE_TIMEOUT = 600;

export default class Toast extends React.Component<Props, State> {
    state = {
        status: '',
        visible: false
    };

    handleStart = (status: string = 'loading') => {
        this.setState({ visible: true, status });
    }

    handleEnd = (status: string = 'loading') => {
        if (!status) {
            this.setState({ visible: false });

            return;
        }

        this.setState({ status });

        setTimeout(() => this.setState({ visible: false }), this.props.closeTimeout || CLOSE_TIMEOUT);
    }

    render(): JSX.Element | null {
        const { visible, status = '' } = this.state;

        return visible && status
            ? (
                <View style={styles.container}>
                    <View style={styles.toast}>
                        {status === 'loading'
                            ? <ActivityIndicator size="large" color={colors.GREY} />
                            : <Text style={styles.text}>{status}</Text>}
                    </View>
                </View>
            )
            : null;
    }
}
