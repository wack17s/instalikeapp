import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        minWidth: width,
        height
    },
    closeButton: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent',
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    closeText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 26,
        fontWeight: '100'
    }
});
