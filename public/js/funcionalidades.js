function listarAvion() {
    enviarLista("api/Avion", function(data) {
        let h = llenarTabla(["idAvion", "modelo", "asientos", "marca", "fabricacion", "estado"], data);
   
        $("#listAvion").html(h);
    })

}


function listarEmpleados() {
    enviarLista("api/Empleados", function(data) {
        let h = llenarTabla(["idEmpleado","nombre","apellido","user","psw","cargo","estado","acceso"], data);
   
        $("#listEmpleado").html(h);
    })
}
function listarVentasTotal() {
    enviarLista("api/Venta", function(data) {
     
   
        $("#ventasTotal").text(data.length);
    })
}
function listarPasajerosTotal() {
    enviarLista("api/Venta", function(data) {
     
   
        $("#cantPas").text(data.length);
    })
}
function listarVuelosTotal() {
    enviarLista("api/Vuelos", function(data) {
     
   
        $("#vuelosAct").text(data.length);
    })
}

function listarVentas() {
    enviarLista("api/Venta", function(data) {
      console.log(data);
      let arr= ["idVenta","tiempo","nombre","cantidadAsiento","idVuelos","estado",]
        let h = llenarTabla(arr, data);
   
        $("#listVenta").html(h);
    })
}

function listarVuelos() {
    enviarLista("api/Vuelos", function(data) {
      console.log(data);
      let arr= [ "idVuelos","origen","destino",
      "cantidadPasajes","precio","aeropuertosalida","aeropuertollegada",
      "tiemposalida","tiempollegada","estado"]
        let h = llenarTabla(arr, data);
   
        $("#listVuelos").html(h);
    })
}

function listarVuelosHoy() {
    enviarLista("api/Vuelos", function(data) {
      console.log(data);

      data =data.filter(function(x,v){
         let s=x.tiemposalida.split("/");
         var d = new Date();
         if(d.getDate()==s[0]){
            return true;
         }
     console.log(x,v);
      })
      let arr= [ "origen","destino",
      "aeropuertosalida","aeropuertollegada",
      "tiemposalida","tiempollegada","estado"]
        let h = llenarTabla(arr, data);
   
        $("#listVueloHoy").html(h);
    })
}
function listarVuelosAntes() {
    enviarLista("api/Vuelos", function(data) {
      console.log(data);

      data =data.filter(function(x,v){
         let s=x.tiemposalida.split("/");
         var d = new Date();
         if(parseInt(d.getDate())>s[0]){
            return true;
         }
     console.log(x,v);
      })
      let arr= [ "origen","destino",
      "aeropuertosalida","aeropuertollegada",
      "tiemposalida","tiempollegada","estado"]
        let h = llenarTabla(arr, data);
   
        $("#listVuelosAntes").html(h);
    })
}
function listarComboAvion(){
       enviarLista("api/Avion", function(data) {
        let h = llenarCombo("resource:org.blockteam.avion.cto.Avion#",data,"idAvion","modelo");
       
        $("#avion").html(h);
    })
}
function listarComboVuelos(){
       enviarLista("api/Vuelos", function(data) {
        let h = llenarCombo("resource:org.blockteam.avion.cto.Vuelos#",data,"idVuelos","idVuelos");
       
        $("#avion").html(h);
    })
}

function ingresarAvion() {
    var idAvion = document.getElementById("idAvion").value;
    var modelo = document.getElementById("modelo").value;
    var asientos = document.getElementById("asientos").value;
    var marca = document.getElementById("marca").value;
    var fabricacion = document.getElementById("fabricacion").value;
    var estado = document.getElementById("estado").value;
    var d = {
        "$class": "org.blockteam.avion.cto.Avion",
        "idAvion": idAvion,
        "modelo": modelo,
        "asientos": parseInt(asientos),
        "marca": marca,
        "fabricacion": fabricacion,
        "estado": estado
    }
    guardarDataBlockchain("api/Avion", JSON.stringify(d), function(data) {
        console.log("llegoi", data);
        listarAvion();
    })
}

function ingresarVuelo() {
    var idVuelo = document.getElementById("idVuelos").value;
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var cantidadPasajes = document.getElementById("cantidadPasajes").value;
    var precio = document.getElementById("precio").value;
    var aeropuertosalida = document.getElementById("aeropuertosalida").value;
    var aeropuertollegada = document.getElementById("aeropuertollegada").value;
    var tiemposalida = document.getElementById("tiemposalida").value;
    var tiempollegada = document.getElementById("tiempollegada").value;
    var avion = document.getElementById("avion").value;

    var estado = document.getElementById("estado").value;
    var lol = {
        "$class": "org.blockteam.vuelos.cto.Vuelos",
        "idVuelos": idVuelo,
        "origen": origen,
        "destino": destino,
        "precio": precio,
        "cantidadPasajes": cantidadPasajes,
        "estado": estado,
        "aeropuertosalida": aeropuertosalida,
        "aeropuertollegada": aeropuertollegada,
        "tiemposalida":tiemposalida,
        "tiempollegada": tiempollegada,
        "idavion": avion
    }
      guardarDataBlockchain("api/Vuelos", JSON.stringify(lol), function(data) {
        console.log("llegoi", data);
        listarAvion();
    })

}

function ingresarEmpleado() {
    var idEmpleado = document.getElementById("idEmpleado").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var user = document.getElementById("user").value;
    var psw = document.getElementById("psw").value;
    var cargo = document.getElementById("cargo").value;
    var estado = document.getElementById("estado").value;
    var acceso = document.getElementById("acceso").value;

   var lol= {
  "$class": "org.blockteam.empleados.cto.Empleados",
  "idEmpleado": idEmpleado,
  "nombre": nombre,
  "apellido": apellido,
  "user": user,
  "psw": psw,
  "cargo": cargo,
  "estado": estado,
  "acceso": acceso
}

 guardarDataBlockchain("api/Empleados", JSON.stringify(lol), function(data) {
        console.log("llegoi", data);
        listarEmpleados();
    })
}