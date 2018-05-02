
export function update(data) {
    return {
        type: "STORE_UPDATE",
        data
    }
}

export function add(item) {
    return {
        type: "STORE_ADD",
        data: item
    }
}


export function rm(item) {
    return {
        type: "STORE_REMOVE",
        data: item
    }
}