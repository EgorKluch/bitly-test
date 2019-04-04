import {LinksTypes} from './types/links';

export type LinksAction = {
    type: LinksTypes.LINK_CHANGE_NEW,
    value: string
} | {
    type: LinksTypes.LINK_CREATE_NEW
} | {
    type: LinksTypes.LINK_INCREMENT_VIEW_COUNT,
    shortLinkId: string
} | {
    type: LinksTypes.LINK_REMOVE,
    shortLinkId: string
}

export function changeNewLink(value: string) {
    return {
        type: LinksTypes.LINK_CHANGE_NEW,
        value
    };
}

export function createNewLink() {
    return {type: LinksTypes.LINK_CREATE_NEW};
}

export function incrementViewCount(shortLinkId: string) {
    return {
        type: LinksTypes.LINK_INCREMENT_VIEW_COUNT,
        shortLinkId
    }
}

export function removeLink(shortLinkId: string) {
    return {
        type: LinksTypes.LINK_REMOVE,
        shortLinkId
    }
}
