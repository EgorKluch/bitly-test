import {connect} from 'react-redux';
import {AppState} from '../../types/redux';
import {bindActionCreators, Dispatch} from 'redux';
import {incrementViewCount} from '../../actions/links';

type OwnProps = {
    shortLinkId: string
};

function mapStateToProps({links}: AppState, props: OwnProps) {
    const {shortLinkId} = props;
    const link = links.links.find((link) => link.shortLinkId === shortLinkId);

    let url: string | null;
    if (!link) {
        // @TODO: Handle error!
        console.error('Link not found!');
        url = null;
    } else {
        url = link.link;
    }

    return {url};
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({
        incrementViewCount
    }, dispatch);
}

type StateProps = ReturnType<typeof mapStateToProps>;
export type ActionProps = ReturnType<typeof mapDispatchToProps>;

function ShortLink(props: StateProps & OwnProps & ActionProps) {
    const {
        incrementViewCount,
        shortLinkId,
        url
    } = props;

    incrementViewCount(shortLinkId);

    if (url) {
        window.location.href = url;
    }

    return null;
}


export default connect(mapStateToProps, mapDispatchToProps)(ShortLink);
