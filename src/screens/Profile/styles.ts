import { StyleSheet, Dimensions } from 'react-native';

import sizes from '../../constants/sizes';
import colors from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        margin: 0,
        marginTop: sizes.HEADER_HEIGHT,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: 'white',
        width,
        height: height - sizes.HEADER_HEIGHT,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 40,
        overflow: 'hidden'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    changePhotoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden'
    },
    innerChangePhotoContainer: {
        backgroundColor: colors.LIGHT_GREY,
        height: 54,
        alignItems: 'center'
    },
    changePhotoText: {
        color: colors.GREY,
        fontSize: 12,
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    nameContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    nameText: {
        color: 'black',
        fontSize: 16
    },
    editName: {
        minWidth: 200,
        backgroundColor: colors.LIGHT_GREY,
        height: 30,
        borderRadius: 4,
        paddingLeft: 12
    },
    editButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.LIGHT_GREY
    },
    editText: {
        color: colors.GREY,
        fontSize: 20
    },
    closeButton: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60
    },
    closeText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '100'
    }
});
