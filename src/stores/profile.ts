import { types } from 'mobx-state-tree';

export type IProfileStore = {
    name: string | undefined,
    picture: string | undefined,
    isOpen: boolean,
    setName: (name: string) => void,
    setPicture: (picture: string) => void,
    toggleOpen: () => void
};

const Profile = types.model({
    name: types.optional(types.string, ''),
    picture: types.optional(types.string, ''),
    isOpen: types.optional(types.boolean, false)
}).actions(self => {
    function setName(newName: string) {
        self.name = newName;
    }

    function setPicture(newPicture: string) {
        self.picture = newPicture;
    }

    function toggleOpen() {
        self.isOpen = !self.isOpen;
    }

    return { setName, setPicture, toggleOpen };
});

export default Profile.create({});
