import React from 'react';
import {createCn} from 'bem-react-classname';
import {getShortUrl} from '../../../../utils/getShortUrl';
import {Link as LinkType} from '../../../../reducers/links';
import autobind from 'autobind-decorator';
import {connect} from 'react-redux';
import {removeLink} from '../../../../actions/links';
import {bindActionCreators, Dispatch} from 'redux';

import './index.scss';

export function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        removeLink
    }, dispatch);
}

export type ActionProps = ReturnType<typeof mapDispatchToProps>;
type Props = LinkType & ActionProps;

class Link extends React.Component<Props> {
    cn = createCn('link');

    @autobind
    handleRemoveLink() {
        const {removeLink, shortLinkId} = this.props;
        removeLink(shortLinkId);
    }

    render() {
        const {viewCount, link, shortLinkId} = this.props;

        const shortUrl = getShortUrl(shortLinkId);

        return (
            <div className={this.cn()} key={shortLinkId}>
                <div className={this.cn('urls')}>
                    <a
                        className={this.cn('url', {full: true})}
                        href={link}
                        target='_blank'
                    >{link}</a>
                    <a
                        className={this.cn('url', {short: true})}
                        href={shortUrl}
                        target='_blank'
                    >{shortUrl}</a>
                </div>
                <div className={this.cn('actions')}>
                    <div className={this.cn('view-count')}>Viewed: {viewCount}</div>
                    <button
                        className={this.cn('remove')}
                        onClick={this.handleRemoveLink}
                    >Remove</button>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Link)

