import { StyleSheet } from 'react-native';

import sizes from '../../constants/sizes';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: sizes.BOTTOM_BAR_HEIGHT,
        backgroundColor: 'white',
        bottom: 0,
        position: 'absolute',
        flexDirection: 'column'
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 40,
        fontWeight: '100',
        backgroundColor: 'transparent'
    },
    separator: {
        backgroundColor: colors.LIGHT_GREY,
        height: 1,
        width: '100%'
    }
});
