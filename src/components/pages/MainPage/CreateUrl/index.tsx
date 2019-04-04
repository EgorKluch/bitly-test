import React from 'react';
import {createCn} from 'bem-react-classname';
import {Input} from '../../../common/Input/Input';
import {AppState} from '../../../../types/redux';
import {bindActionCreators, Dispatch} from 'redux';
import {changeNewLink, createNewLink} from '../../../../actions/links';
import {connect} from 'react-redux';
import {isUri} from 'valid-url';

import './index.scss';

function mapStateToProps({links}: AppState) {
    return {
        value: links.newLinkValue
    };
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        changeNewLink,
        createNewLink
    }, dispatch);
}

export type StateProps = ReturnType<typeof mapStateToProps>;
export type ActionProps = ReturnType<typeof mapDispatchToProps>;

class CreateUrl extends React.Component<StateProps & ActionProps> {
    cn = createCn('create-url');

    render() {
        const {
            changeNewLink,
            createNewLink,
            value
        } = this.props;

        const isValidUrl = isUri(value);

        return (
            <div className={this.cn()}>
                <Input
                    placeholder='Paste a link to shorten it'
                    className={this.cn('change')}
                    value={value}
                    onChange={changeNewLink}
                />
                <button
                    className={this.cn('create')}
                    disabled={!isValidUrl}
                    onClick={createNewLink}
                    title={'test'}
                >Shorten</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUrl);
