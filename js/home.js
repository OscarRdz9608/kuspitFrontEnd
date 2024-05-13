function getClient(){
    let userId=sessionStorage.getItem("userId");  
    console.log("id cliente: "+userId);
    
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8090/kuspit/users/111",true);   
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onload=()=>{
    const response = request.responseText;
    const json = JSON.parse(response);
    const statuss = request.status;
    
    console.log("Response: "+ response);
    console.log("JSON: "+ json);
    console.log("Status: "+ statuss);
    
    
    if (statuss==200){
        
        document.getElementById("name").value = json.name;
        document.getElementById("email").value = json.email;
        document.getElementById("userId").value = json.userId;
        document.getElementById("phone").value = json.phone;
        document.getElementById("balance").value = json.balance;
        
    }
    }
    request.send();

    };