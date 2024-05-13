function getActions() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8090/kuspit/actions/all", true);   
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onload = () => {
        const response = request.responseText;
        const acciones = JSON.parse(response);
        const statuss = request.status;
        
        console.log("Response: " + response);
        console.log("Acciones: ", acciones);
        console.log("Status: " + statuss);
        
        if (statuss == 200) {
            displayActions(acciones);
        }
    }
    
    request.send();
}

function displayActions(acciones) {
    var accionesTableBody = document.getElementById("accionesTableBody");
    accionesTableBody.innerHTML = ""; // Limpiar los datos existentes en la tabla
    
    acciones.forEach(accion => {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${accion.symbol}</td>
            <td>${accion.companyName}</td>
            <td>${accion.lastPrice}</td>
            <td>${accion.volume}</td>
            <td><button class="btn btn-primary" onclick="comprar('${accion.symbol}')">Comprar</button></td>
        `;
        accionesTableBody.appendChild(row);
    });
}

function comprar(symbol) {
   

    
    console.log("Comprar acción con símbolo: " + symbol);
}

document.addEventListener("DOMContentLoaded", function() {
    getActions();
});
