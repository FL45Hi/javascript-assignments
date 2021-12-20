//  Create login page. Accept username & password.
//  Compare username & password at server side. And check user has logged as admin or not.
//  If user has logged in as admin, display alert => 'You are logged in as Admin'.
//  If not then, display alert => 'You are not logged in as Admin. You don't have rights to change settings'
//  Ajax POST request 


let fetchbtn=document.getElementById("btn1")
fetchbtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){
    let url="http://127.0.0.1:5500/loginAjax.html"
    
}