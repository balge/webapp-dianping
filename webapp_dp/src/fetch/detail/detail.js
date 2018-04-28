import { get } from '../get'

export function getDetailData(id) {
    const result = get('/api/detaildata/' + id)
    return result
}

export function getCommentData(id) {
    const result = get('/api/comment/' + id)
    return result
}

