import { get } from '../get'

export function getArticleData() {
    const result = get('/api/article')
    return result
}

export function getSaleData() {
    const result = get('/api/homesale')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}
