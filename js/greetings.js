const loginInput = document.querySelector('#login-form input');
const loginFrom = document.querySelector('#login-form');
const greeting = document.querySelector('h1');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(e){
    e.preventDefault();
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;  
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername === null){
    loginFrom.classList.remove(HIDDEN_CLASSNAME);
    loginFrom.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(saveUsername);
    loginFrom.classList.add(HIDDEN_CLASSNAME);
}

