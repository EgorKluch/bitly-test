import React from 'react';
import {createCn} from 'bem-react-classname';
import {AppState} from '../../../../types/redux';
import {connect} from 'react-redux';

import './index.scss';
import Link from '../Link';

function mapStateToProps({links}: AppState) {
    return {
        links: [...links.links].reverse()
    };
}

export type StateProps = ReturnType<typeof mapStateToProps>;

class Links extends React.PureComponent<StateProps> {
    cn = createCn('links');

    render() {
        const {links} = this.props;

        return (
            <div className={this.cn()}>
                {links.map((link) => <Link {...link}/>)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Links);
