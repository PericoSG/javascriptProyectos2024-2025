//1. Localizar el boton de analizar y ponerlo a la escucha

const numberInput = document.getElementById("numberInput")
const analyzeBtn = document.getElementById("analyzeBtn")
const outputTa = document.getElementById("outputTa")



analyzeBtn.addEventListener("click",function()
    {
        
        identificar_tipo(numberInput.value)
    })
numberInput.addEventListener("keyup",function(e)
    {
        if (e.key == "Enter")
        {
            identificar_tipo(numberInput.value)
        }
        
    })

function identificar_tipo(numero) 
{
    // comprobar si el usuario ha usado "," en vez de "."
    numero = numero.replace("," , ".")


    if (isNaN(numero))
    {   
        outputTa.value = " No has escrito un número válido"
    }
    else 
    {

        // NOTA: Usamos la concatenación para que no machaque todo lo anterior
        //decir si es par o impar
        
        if (Math.floor(numero) % 2 == 0)
        
            outputTa.value += " El número es par\n" // -> Usamos \n para dar un salto de línea 
        
        else 
            outputTa.value += " El número es impar\n"


            // Forma más efectuva (no hace falta poner el ==0, te devuelve impar )
            // if (Math.floor(numero) % 2)
        
            //     outputTa.value += "El número es impar\n" // -> Usamos \n para dar un salto de línea 
            
            // else 
            //     outputTa.value += "El número es par\n"
        
        // decir si es entero o flotante 

        if (Math.floor(numero) == numero)
        
            outputTa.value += "El número es un entero\n"
        
        else 
            outputTa.value += "El número es un flotante\n"

        // mostrar su tabla de multiplicar (tabla defectuosa, no hace caso)

        for (let i = 0; i <= 10; i++) 
        {
            outputTa.value +="\n" + numero + " x " + i + " = " + (numero*i).toFixed(2);
            //outputTa.value += + '\n${numero}x${i} = {numero*i}'; // -> Arreglar esta función
        }

        
    }
}