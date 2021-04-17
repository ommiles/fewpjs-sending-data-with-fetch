let userName = `User Name Test`
let userEmail = `useremailtest@xyz.com`

submitData = (userName, userEmail) => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch("http://localhost:3000/users/", configObj)
    .then(resp => resp.json())
    .then((object) => { 
        const body = document.querySelector('body');
        body.innerHTML = object.id;
        body.style.fontSize = `100px`
    })
    .catch((error) => {
        console.log(error.message)
        p.textContent = error.message
        body.appendChild(p)
    })
}

submitData()