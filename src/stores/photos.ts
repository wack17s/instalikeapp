import { types, flow } from 'mobx-state-tree';
import uuid from 'uuid/v4';

import { getFromAsyncStorage, saveToAsyncStorage } from '../libs/asyncStorage';

export type IPhotosStore = {
    photos: [IPhotoModel],
    fullPicture?: string,
    addPhoto: (url: string) => void,
    toggleOpenPhoto: (url?: string) => void,
    savePhotos: () => void
};

export type IPhotoModel = {
    url: string,
    id: string
};

const Photo = types.model({
    url: types.string,
    id: types.string
});

const Photos = types.model('PhotosStore', {
    photos: types.optional(types.array(Photo), []),
    fullPicture: types.optional(types.string, '')
}).actions(self => ({
    afterCreate: flow(function* getPhotos() {
        try {
            const photos = yield getFromAsyncStorage('photos');

            if (photos) {
                self.photos = photos;
            }
        } catch (error) {
            return;
        }
    }),

    toggleOpenPhoto: (photoUrl: string = '') => {
        self.fullPicture = photoUrl;
    },

    savePhotos: flow(function* save() {
        try {
            yield saveToAsyncStorage('photos', self.photos);
        } catch (error) {
            return;
        }
    }),

    addPhoto: function (url: string) {
        self.photos.push({
            id: uuid(),
            url
        });
    }
}));

export default Photos.create({});
