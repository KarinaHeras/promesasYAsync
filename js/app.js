// practicando promesas sin arrow function

function getUsers(url){
    const users = fetch(url).then(function(response){
        response.json()
    })
    return users    
}

// practicando async/await con arrow function

async function showResults(url, whereToPaint){
    const users = await getUsers(url);
    users.forEach(user => {
        whereToPaint.innerHTML += `<li><b>${user.name}</b> can be contacted in the email: <b>${user.email}</b> </li>`    
    });
}

const endpoint = 'https://jsonplaceholder.typicode.com/users'

const paintLocation = document.querySelector('#users')

showResults(endpoint, paintLocation)