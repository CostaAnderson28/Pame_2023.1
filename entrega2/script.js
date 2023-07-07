var form = document.getElementById('formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var user = document.getElementById("user").value;
    var senha = document.getElementById("inptsenha").value;
    var chek = document.getElementById("checkbox").checked;
    
    var login  = "Login: " + user + "\nSenha: " + senha + "\nLembrar de mim: " + ((!chek) ? "sim" : "Não"); 
    alert(login);
    
})



const key = document.getElementById("inptsenha");
const icon = document.getElementById('eye');

function turn(){
    let typekey = key.type == "inptsenha"

    if(typekey){
        key.setAttribute("type","text")
    }
    else{
        key.setAttribute("type","password")
    }
}