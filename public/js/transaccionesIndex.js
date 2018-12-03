
function validar(){
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  console.log(usuario,password);
    $.ajax({
        url:urlBlock+"api/Empleados",
        type:"GET",
        success:function(x){
            let y=true;

            if(Array.isArray(x)){
                
               debugger;
               for(let i = 0 ; x.length>i;i++){
                  if(x[i].user==usuario && x[i].psw ==password){
                     y=false;
                        alert("Bienvenido " + x[i].nombre)
                          window.location="/panel";
                    }
                if(x.length-1==i && y ==true){
                    alert("Usuario no logueado")

                }
               }
             
               
            }
            else {
                alert("Ocurrio un error en la red Blockchain");
            }
            console.log(x);

        }


    })

    return;
       

     }
