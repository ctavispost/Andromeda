$(document).ready(function () { 
    $('.modal').modal(); 
}) 

document.querySelector('#form').addEventListener('submit', (event) => {
    // stop the form from submitting and reloading the page
    event.preventDefault();
    // organize the data from the form to submit it as a single object
    let formData = {
        email: document.querySelector('#email').value,
        name: document.querySelector('#name').value
        // any other data you need can be added here in the same way...
    }
    // send a fetch request to the backend
    console.log(formData)
    fetch('/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

    }).then(successResponse => {
        // trigger the modal here
        console.log("this is getting here")
        document.getElementById('modal2').classList.add('open')
        document.getElementById('modal2').style = "z-index: 1005; display: block;opacity: 1;top: 10%;transform: scaleX(1) scaleY(1);"
        
    }).catch(err => console.log("this shit isn't working right"))
})