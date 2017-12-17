import * as React from 'react';
import { Provider } from 'mobx-react';

import stores from './stores';

import { PHOTOS_STORE, PROFILE_STORE } from './constants/stores';

export interface Props {
    children: JSX.Element;
}

const {
    photos,
    profile
} = stores;

const rootStores = {
    [PHOTOS_STORE]: photos,
    [PROFILE_STORE]: profile
} as { [key: string]: object };

export default class StoreProvider extends React.Component<Props, object> {
    render() {
        return (
            <Provider {...rootStores}>
                {this.props.children}
            </Provider>
        );
    }
}
