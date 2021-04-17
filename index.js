let userName = `User Name Test`
let userEmail = `useremailtest@xyz.com`
const body = document.querySelector(`body`)

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
        const p = document.createElement(`p`)
        p.innerHTML = object.id;
        body.appendChild(p)
        p.style.fontSize = `100px`
        p.style.margin = `0`
    })
    .catch((error) => {
        console.log(error.message)
        p.textContent = error.message
        body.appendChild(p)
    })
}

submitData()