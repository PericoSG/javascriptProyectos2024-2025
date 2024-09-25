
const secreto = Math.floor(Math.random()*100 +1);
console.log(secreto);
let intento = parseInt(prompt("Escribe un nº entero entre 1 y 100"));

salidaTA = document.getElementById("salidaTA");
salidaTA.value = "";


// Realizar inversion, primero condicion, si cumple hacer 

var lo_adivino = false;

for(let i = 1 ; i<=6; i++)
{
    if (intento >=1 && intento <=100)
        {
            // comprobar el numero a adivinar 
        
            if (intento > secreto)
            {
                salidaTA.value += "\n Te has pasado";
                intento = parseInt(prompt("Escribe un nº entero entre 1 y 100"));
                
            }
            else if (intento < secreto )
            {
                salidaTA.value += "\n Te has quedado corto";
                intento = parseInt(prompt("Escribe un nº entero entre 1 y 100"));
            }
            else 
            {
                salidaTA.value+= "Conseguido";
                lo_adivino = true;
                break;
            }
        }
}

if (lo_adivino ==false)
{
    salidaTA.value += "Se te han acabado los intentos, el número secreto era " . secreto;
}
