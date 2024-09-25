//alert ("Primera función javascript")


// funcionalidad del botón 

const registrerBtn = document.getElementById("registerBtn")
registrerBtn.addEventListener("click",registrar)

// Funcionalidad del botón disponibilidad
// 1. Localizar el botón
const disponibilidad = document.getElementById("disponibilidad")

// 2. Añadir un evento
disponibilidad.addEventListener("click",comprobar_disponibilidad)



const array_nombres = [ "Miguel", "Luisa", "Jose", "Nuria","Pedro"]

function registrar()
{
    // Mostrar error en consola ->  console.log("Botón funciona")
    // Mostrar error en el <label> para info usuario 

    //const userMessagesLbl = document.getElementById("userMessagesLbl")



    
}

function comprobar_disponibilidad()
{
    //1. Recuperar el input 

    const nombre = document.getElementById("nombre")

    // 2. Recuperar el valor que hay dentro del input

    const nombre_pa_probar = nombre.value

    alert (nombre_pa_probar)

    //3. Comprobar si ese nombre esta en la BD (en este caso un array)
    
    // console.log("ANTES DE FOR")

    // let yaExiste = false

    // for( let i = 0; i < array_nombres.lenght;i++)
    // {
    //     console.log("ENTRO AL FOR")
    //     if (nombre_pa_probar == array_nombres[i])
        
    //         yaExiste = true;
    
    // }

    // console.log(yaExiste)

    // // 4. Mostrar el mensaje que corresponda según "yaExiste"

    // const mensaje_disponibilidad = document.getElementById("mensaje_disponibilidad")

    // if (yaExiste)
    // {
    //     mensaje_disponibilidad.textContent = "usuario ya reservado"
    // }
    // else 
    //     mensaje_disponibilidad.textContent = "Usuario disponible"



    //3. Comprobar nombre de forma rápida 

    if (array_nombres.includes(nombre_pa_probar))
    {
        mensaje_disponibilidad.textContent = "usuario ya reservado"
    }
    else 
    {
        mensaje_disponibilidad.textContent = "usuario disponible"
    }
}



