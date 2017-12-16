import { StyleSheet, Dimensions } from 'react-native';

import sizes from '../../constants/sizes';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        height: height - sizes.BOTTOM_BAR_HEIGHT - sizes.HEADER_HEIGHT,
        backgroundColor: 'green'
    }
});
