import { StyleSheet } from 'react-native';

import sizes from '../../constants/sizes';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        height: sizes.HEADER_HEIGHT,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    innerContainer: {
        width: '100%',
        height: sizes.HEADER_HEIGHT - 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16
    },
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileIcon: {
        width: 28,
        height: 28,
        tintColor: 'black'
    },
    separator: {
        backgroundColor: colors.LIGHT_GREY,
        height: 1,
        width: '100%'
    }
});
