import React from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from './configureStore';
import { Provider } from 'react-redux';
import {AppState} from '../../types/redux';
import ShortLink from '../ShortLink/ShortLink';

const state: AppState = JSON.parse(localStorage.getItem('state') || '{}');
const configureStoreLocal = configureStore();
const store = configureStoreLocal(state);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact={true}
                            path="/"
                            component={MainPage}
                        />
                        <Route
                            path="/:shortLinkId"
                            component={({match}: RouteComponentProps<{shortLinkId: string}>) => {
                                return <ShortLink shortLinkId={match.params.shortLinkId}/>;
                            }}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
