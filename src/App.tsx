import * as React from 'react';

import Main from './screens/Main';

import StoreProvider from './StoreProvider';

export default class App extends React.Component<object, object> {
    render(): JSX.Element {
        return (
            <StoreProvider>
                <Main />
            </StoreProvider>
        );
    }
}
