import { StyleSheet } from 'react-native';

import sizes from '../../constants/sizes';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: sizes.BOTTOM_BAR_HEIGHT,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute'
    },
    text: {
        color: 'white',
        fontSize: 28,
        fontWeight: '600'
    }
});
