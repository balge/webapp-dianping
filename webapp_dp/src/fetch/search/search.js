import { get } from '../get'

export function getSearchKeyList(city) {
    const result = get('/api/searchkeylist/' + encodeURIComponent(city))
    return result
}

export function getSuggestList(keyword) {
	const result = get('/api/searchsuggestlist/' + encodeURIComponent(keyword))
	return result
}

export function getResultList(city, keyword, page) {
	const result = get('/api/searchresultlist/' + encodeURIComponent(city) + '/' + encodeURIComponent(keyword) + '/' + page)
	return result
}