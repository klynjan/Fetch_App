const root = document.querySelector("#root")
const GetName = document.querySelector("#get-user");
const idNumber = document.querySelector("#id-number");

GetName.addEventListener("click", () => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let output = '';
         data.filter( name => {
            output += `<li>${name.login}</li>`
        })

        root.innerHTML = output;
    })
})

idNumber.addEventListener("click", () => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        let output = '';
         data.filter( user => {
            output += `<li><strong>login:</strong> ${user.login.toUpperCase()}<strong> id:</strong>${user.id}</li>`
        })

        root.innerHTML = output;
    })
})

