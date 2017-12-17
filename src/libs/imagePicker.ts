import ImagePicker from 'react-native-image-picker';

export interface Result {
    status: string;
    uri: string;
}

export default function (callback: (result: Result) => void, title?: string) {
    const options = {
        title: title || 'Select Photo',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    return ImagePicker.showImagePicker(options, response => {
        const result = {
            status: '',
            uri: ''
        };
    
        if (response.error) {
            result.status = 'Failed';
        } else if (response.uri) {
            result.status = 'Done';
            result.uri = response.uri;
        }

        callback(result);
    });
}
