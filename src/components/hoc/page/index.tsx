import React, {ComponentType} from 'react';
import { createCn } from 'bem-react-classname';

import './index.scss';

const cn = createCn('page');

export const page = () => (Component: ComponentType) => {
    return function (props: object) {
        return (
            <div className={cn()}>
                <div className={cn('content')}>
                    <Component {...props}/>
                </div>
            </div>
        );
    }
};
