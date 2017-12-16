import * as React from 'react';
import { Provider } from 'mobx-react';

import stores from './stores';

import { TODO_STORE, BOXES_STORE } from './constants/stores';

export interface Props {
    children: JSX.Element;
}

const {
    todo,
    boxes
} = stores;

const rootStores = {
    [TODO_STORE]: todo,
    [BOXES_STORE]: boxes
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
