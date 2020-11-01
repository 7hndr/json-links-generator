let user = {
    id: 20,
    name: 'John Doe',
    role: 'QA',
    salary: 100,
}

const apiTemplatesSet1 = [
    '/api/items/%id%/%name%',
    '/api/items/%id%/%role%',
    '/api/items/%id%/%salary%',
]

const apiPathes = apiTemplatesSet1.map((apiPathTemplate) => {
    return getApiPath(user, apiPathTemplate)
})

function getApiPath(obj, template) {
    let value = template.replace('/api/items/%id%/', '').replace(/%/g, '')
    let result = `/api/items/${obj.id}/${obj[value]}`
    return result.replace(/\s/g, '%')
}

console.log(JSON.stringify(apiPathes))
