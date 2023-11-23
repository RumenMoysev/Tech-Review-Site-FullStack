const baseUrl = 'http://localhost:3030'

export default function internalFetch(method, url, auth, data) {
    let settings = {
        method: method,
    }

    if(method === "GET" || method === "DELETE") {
        if(auth) {
            settings.headers = { "X-Authorization": auth }
        }
        
        return fetch(`${baseUrl}/${url}`, settings)
    };


    settings.headers = {
        "Content-type": "application/json",
        "X-Authorization": auth
    }
    settings.body = JSON.stringify(data)

    return fetch(`${baseUrl}/${url}`, settings)
    return settings
}