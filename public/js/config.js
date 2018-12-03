var urlBlock = "https://cdb50d84.ngrok.io/";
var resourceVuelo = "resource:org.blockteam.vuelos.cto";

function enviarLista(url, callback) {
    $.ajax({
        url: urlBlock + url,
        type: "GET",
        success: function(x) {
            return callback(x);
        }
    })
}

function guardarDataBlockchain(url, data, callback) {
    $.ajax({
        url: urlBlock + url,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: data,
        success: function(x) {
            return callback(x);
        }
    })
}

function llenarTabla(column,x) {
    let html = ``;
    for (let i = 0;  x.length>i; i++) {
        html += `<tr><td>${i+1}</td>`;
        for (let c = 0;  column.length>c; c++) {
            html += `<td>${x[i][column[c]]}</td>`;
        }
        html += `</tr>`;
    }

    return html;
}

function llenarCombo(c,x,id,nombre) {
    let html = ``;
    for (let i = 0;  x.length>i; i++) {
        html += `<option value="${c+x[i][id]}">${x[i][nombre]}</option>`;
      
        
    }

    return html;
}
