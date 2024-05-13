function login(){   
    var request = new XMLHttpRequest();
    //username= sessionStorage.getItem("username");

    let email = document.getElementById("email");
    let password  = document.getElementById("password");  
    let payload = {
        "email" : email.value,
        "password" : password.value
    }
    console.log(email.value);
    console.log(password.value );
    console.log(payload);
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    //Conexion request tipo como la de googlemaps 
    request.open('POST', "http://localhost:8090/kuspit/users/log",true);
    request.setRequestHeader("accept", "application/json");
    //cambiar// request.setRequestHeader("Authorization", "Basic " + btoa(prompt('Username:') + ":" + prompt('Password:')))
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
        try {
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log(json.userId);           
            sessionStorage.setItem("userId", json.userId);
            window.location.replace("/home.html");
        
        } catch (error) {
            console.log(error);
            alert("Usuario no encontrado");
                  }
        // Almacena la respuesta en una variable, si es 202 es que se obtuvo correctamente
        
    };
    request.send(JSON.stringify(payload));
}