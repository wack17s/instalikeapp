import { StyleSheet } from 'react-native';

import sizes from '../../constants/sizes';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: sizes.HEADER_HEIGHT,
        backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 16
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }
});
