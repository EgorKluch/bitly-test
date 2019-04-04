import React from 'react';
import CreateUrl from './CreateUrl';
import Links from './Links';
import {page} from '../../hoc/page';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <CreateUrl/>
                <Links/>
            </div>
        );
    }
}

export default page()(MainPage);
