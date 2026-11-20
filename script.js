let button = document.querySelector('button');
let input = document.querySelector('input');
let errorDiv = document.querySelector('#err');
let successDiv = document.querySelector('#success-state');
let main = document.querySelector('main');
let disBtn=document.querySelector('.dismissBtn');

button.addEventListener('click', () => {
    let value = input.value.trim();

    if (input.checkValidity() && value !== "") {
        successDiv.style.display = "block";
        main.style.display = "none";
    } else {
        errorDiv.innerHTML = "Invalid email";
        errorDiv.style.color = "red";
    }
    input.value="";
});
disBtn.addEventListener('click',()=>{
     successDiv.style.display = "none";
        main.style.display = "flex";
})