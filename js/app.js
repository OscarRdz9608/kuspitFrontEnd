function registro(){
    
    
    var request = new XMLHttpRequest();
    //username= sessionStorage.getItem("username");

    let userid = document.getElementById("userId");
    let name  = document.getElementById("name");  
    let email = document.getElementById("email");
    let phone  = document.getElementById("name");  
    let password  = document.getElementById("password");  
    let repassword  = document.getElementById("repassword");  
    console.log(userid.value);

    let saldo=10000.0
    console.log(saldo);
    if (password.value !== repassword.value) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return;
    }

    let payload = {
        "userId" : userid.value,
        "name" : name.value,
        "email" : email.value,
        "phone" : phone.value,
        "password" : password.value,
        "balance": saldo
    } 
    console.log(payload);


    request.open('POST', "http://localhost:8090/kuspit/users/save",true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
        try {
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log(json);           
            //sessionStorage.setItem("token", json.token);
            alert("Usuario Registrado Correctamente");
            window.location.replace("/login.html");
            } catch (error) {
            console.log(error);
            alert(error);
                  }
        // Almacena la respuesta en una variable, si es 202 es que se obtuvo correctamente
        
    };
    request.send(JSON.stringify(payload));
    
}


function validar(){
    var todo_correcto = true;
        
    if(document.getElementById('email').value.length < 1 || /^\s+$/.test(document.getElementById('email').value) ){
        todo_correcto = false;
    
    }
    if(document.getElementById('password').value.length < 1 || /^\s+$/.test(document.getElementById('password').value) ){
        todo_correcto = false;
        
    }
    if(todo_correcto){
        login();
    }else{
        alert("Debe de ingresar una contraseña y/o un email correcto");
    } 
}