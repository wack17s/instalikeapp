import { StyleSheet, Dimensions } from 'react-native';

import sizes from '../../constants/sizes';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        height: height - sizes.BOTTOM_BAR_HEIGHT - sizes.HEADER_HEIGHT,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20,
        height: width / 2 - 20,
        margin: 10
    }
});
