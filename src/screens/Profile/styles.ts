import { StyleSheet, Dimensions } from 'react-native';

import sizes from '../../constants/sizes';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        margin: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: 'white',
        width,
        height: height - sizes.HEADER_HEIGHT
    }
});
