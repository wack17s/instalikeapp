import { types, flow } from 'mobx-state-tree';

import { getFromAsyncStorage, saveToAsyncStorage } from '../libs/asyncStorage';

export type IProfileStore = {
    name: string | undefined,
    picture: string | undefined,
    isOpen: boolean,
    setName: (name: string) => void,
    setPicture: (picture: string) => void,
    saveProfile: () => void,
    toggleOpen: () => void
};

const Profile = types.model({
    name: types.optional(types.string, ''),
    picture: types.optional(types.string, ''),
    isOpen: types.optional(types.boolean, false)
}).actions(self => ({
    afterCreate: flow(function* getProfile() {
        try {
            const profile = yield getFromAsyncStorage('user');

            if (profile) {
                self.name = profile.name;
                self.picture = profile.picture;
            }
        } catch (error) {
            return;
        }
    }),

    setName: function(newName: string) {
        self.name = newName;
    },

    setPicture: function (newPicture: string) {
        self.picture = newPicture;
    },

    saveProfile: flow(function* save() {
        const { name, picture } = self;

        try {
            yield saveToAsyncStorage('user', { name, picture });
        } catch (error) {
            return;
        }
    }),

    toggleOpen: function () {
        self.isOpen = !self.isOpen;
    }
}));

export default Profile.create({});
