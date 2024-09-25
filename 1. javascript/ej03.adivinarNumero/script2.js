const secreto = Math.floor(Math.random()*100 +1 );
console.log(secreto);

salidaTA = document.getElementById("salidaTA");
salidaTA.value = "";

const adivinaNumeroBTN = document.getElementById("adivinaNumeroBTN");
var n_intentos = 6;


adivinaNumeroBTN.addEventListener("keydown",function(e)
{
    if (e.key == "Enter")
     intentos(Math.floor(adivinaNumeroBTN.value),--n_intentos);
})


function intentos(intento,n_intentos)
{

    console.log(n_intentos);


    if (intento >=1 && intento <=100)
    {
        if (intento > secreto)
            {
                salidaTA.value += "\n El número es más pequeño, te quedan " 
                + n_intentos + " intentos "; 
        
                adivinaNumeroBTN.value = "";
            }
            else 
                if (intento < secreto)
                {
                    salidaTA.value+="\n El número es más grande, te quedan " 
                    + n_intentos + " intentos ";
                    adivinaNumeroBTN.value = "";
                }
                    
                else
                {
                    alert("Correcto, el número era " + secreto)
                    location.reload();
                }
                    
            if(n_intentos ==0)
            {
                alert("El numero era " + secreto)
                location.reload();
            }
    }
    else 
        location.reload();
    
}