const idInput = document.querySelector('#userID')
const nameInput = document.querySelector('#userName')
const roleInput = document.querySelector('#userRole')
const salaryInput = document.querySelector('#userSalary')
const output = document.querySelector('#output')
const button = document.querySelector('#getValues')
const mutableInputs = document.querySelectorAll('.jsInput')

const apiTemplatesSet1 = [
    '/api/items/%id%/%name%',
    '/api/items/%id%/%role%',
    '/api/items/%id%/%salary%',
]
button.onclick = function (e) {
    e.preventDefault()
    let user = {}
    user.id = +idInput.value
    user.name = nameInput.value
    user.role = roleInput.value
    user.salary = +salaryInput.value
    console.log(user)
    const apiPathes = apiTemplatesSet1.map((apiPathTemplate) => {
        return getApiPath(user, apiPathTemplate)
    })

    function getApiPath(obj, template) {
        let value = template
            .replace('/api/items/%id%/', '')
            .replace(/%/g, '')
        let result = `/api/items/${obj.id}/${obj[value]}`
        return result.replace(/\s/g, '%')
    }
    let result = apiPathes
    output.value = JSON.stringify(result)
}
