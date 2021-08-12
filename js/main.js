let eleccion = prompt("¿Qué poción quieres preparar? 1. Amortentia | 2. Pocion de la memoria");
let cabellos; 
let dientes;
let tiempo;

function validar(a, b){
    return a + b;
}

function preguntarTiempo(){
    tiempo = parseInt(prompt("¿Cuántos minutos puedes dedicarle a la poción? ( 10 | 5 | 8 | 0 )"));
}

let resultado2;
let resultado1;


if ((eleccion.toLowerCase() == "amortentia") || (eleccion == "1")){ 
    
    cabellos = parseInt(prompt("¿Cuántos cabellos de la persona que te gusta tienes? ( 3 | 0 | 2 )"));
    preguntarTiempo();
    resultado1 = validar(cabellos, tiempo);
    switch(resultado1){
        case 11:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/aperfect.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡Felicidades!</h5>
              <p class="card-text">Tu poción de Amortentia será peligrosamente efectiva. Úsala con sabiduría y recuerda que el amor verdadero es una magia más poderosa.</p>
            </div>
        </div>`);
            break;
        case 13:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/adanger.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡Uy, casi lo logras!</h5>
              <p class="card-text">La poción se pasará un poco y sus resultados serán impredecibles. Te recomendamos ajustar el tiempo de preparación o la cantidad de materiales para evitar accidentes.</p>
        </div>`);
            break;
        default:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/afalla.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡No, no, te toca recursar pociones!</h5>
              <p class="card-text">El pronóstico de tu poción es que será ineficiente. Revisa tu combinación de materiales y tiempo. Recuerda que siempre puedes acudir a la tienda de pociones más cercana.</p>
        </div>`);
            break;
    }
} 
else if ((eleccion.toLowerCase() == "pocion de la memoria") || (eleccion == "2")){ 
    
    dientes = parseInt(prompt("¿Cuántos dientes de leche tienes a mano? ( 2 | 0 | 3 )"));
    preguntarTiempo();
    resultado2 = validar(dientes, tiempo);
    switch(resultado2){
        case 12:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/mperfect.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡Felicidades!</h5>
              <p class="card-text">Tu poción de la memoria será peligrosamente efectiva. Úsala con sabiduría y recuerda que... ¡Ya olvidé lo que iba a decirte!</p>
        </div>`);
            break;
        case 13:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/mdanger.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡Uy, casi lo logras!</h5>
              <p class="card-text">La poción se pasará un poco y sus resultados serán impredecibles. Te recomendamos ajustar el tiempo de preparación o la cantidad de materiales para evitar accidentes.</p>
        </div>`);
            break;
        default:
            document.write(`<div class="card text-center" style="width: 18rem;">
            <img src="media/mfalla.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">¡No, no, te toca recursar pociones!</h5>
              <p class="card-text">El pronóstico de tu poción es que será ineficiente. Revisa tu combinación de materiales y tiempo. Recuerda que siempre puedes acudir a la tienda de pociones más cercana.</p>
        </div>`);
            break;
    }
}else {
    document.write(`No te hagas de rogar, elige una poción.`)
}

/*-La combinación perfecta para la poción de Amortentia consiste en 3 cabellos de la persona que te gusta
y 8 minutos de ardua preparación. 
-La combinación perfecta para la poción de la memoria consiste en 2 dientes de leche y 10 minutos de ardua preparación.

Si este balance no se logra, pueden suceder cosas impredecibles o simplemente
las pociones no funcionarían.*/ 