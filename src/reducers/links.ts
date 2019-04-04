import incstr from 'incstr';
import {LinksTypes} from '../actions/types/links';
import {Action} from '../types/redux';


export type Link = {
    link: string,
    shortLinkId: string,
    viewCount: number
};

type LinksState = {
    nextLink: string,
    newLinkValue: string,
    links: Link[]
};

const initialState: LinksState = {
    nextLink: '1',
    links: [],
    newLinkValue: ''
};

export function links(state: LinksState = initialState, action: Action): LinksState {
    switch (action.type) {
        case LinksTypes.LINK_CHANGE_NEW:
            return {
                ...state,
                newLinkValue: action.value
            };
        case LinksTypes.LINK_REMOVE:
            return {
                ...state,
                links: state.links.filter(({shortLinkId}) => shortLinkId !== action.shortLinkId)
            };
        case LinksTypes.LINK_CREATE_NEW:
            const newLink: Link = {
                link: state.newLinkValue,
                shortLinkId: state.nextLink,
                viewCount: 0
            };

            return {
                ...state,
                links: [
                    ...state.links,
                    newLink
                ],
                newLinkValue: '',
                nextLink: incstr(state.nextLink)
            };
        case LinksTypes.LINK_INCREMENT_VIEW_COUNT:
            const links = state.links.map((link) => {
                if (link.shortLinkId === action.shortLinkId) {
                    return {
                        ...link,
                        viewCount: link.viewCount + 1
                    };
                }

                return link;
            });

            return {
                ...state,
                links
            };
    }

    return state;
}
