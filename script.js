document.addEventListener("DOMContentLoaded", () =>{
    
    const boton = document.getElementById("boton");
    const div = document.getElementById("lista"); 
    const panel = document.getElementById("mostrarColor");

    boton.addEventListener("click", ()=>{
    var color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    let info = HexaARgb(color)
    let data = color.toUpperCase()

    panel.innerHTML = `
    <p>Hexadecimal: ${data}</p>
    <p>RGB: (${info})</p>`
    
      
    document.getElementById("mostrarColor").style.backgroundColor = color;
    
    div.innerHTML += `<p style="background-color: ${color}">${data}</p>`

    //CONVERSOR

    const input1 = document.getElementById("input-1");
    const input2 = document.getElementById("input-2");
    const calcular = document.getElementById("conversar");

    calcular.addEventListener("click", () =>{
        let dato = HexaARgb(input1.value)
        input2.value = dato
    })



    


    })
})


//FUNCIONES

function HexaARgb(color){
    let parte1 = color.substring(1,3);
    let parte2 = color.substring(3,5);
    let parte3 = color.substring(5);

    let r = calculo(parte1)
    let g = calculo(parte2)
    let b = calculo(parte3)
    let rgb = r + "," + g + "," + b ;
    return rgb
    
}

function calculo(substring) {
    const letras = "abcdef";

    if (substring.length !== 2) {
        console.error("La cadena de entrada debe tener longitud 2");
        return null; 
    }

    const lowerCaseSubstring = substring.toLowerCase();

    if (!letras.includes(lowerCaseSubstring)) {
        const subletra1 = parseInt(lowerCaseSubstring.charAt(0), 16);
        const subletra2 = parseInt(lowerCaseSubstring.charAt(1), 16);
        const resultado = (subletra1 * 16) + subletra2;
        return resultado;
    } else {
        const letra1 = Valorletra(lowerCaseSubstring.charAt(0));
        const letra2 = Valorletra(lowerCaseSubstring.charAt(1));
        const resultado = (letra1 * 16) + letra2;
        return resultado;
    }
}

function Valorletra(letra) {
    let valor;
    switch (letra) {
        case "a":
            valor = 10;
            break;
        case "b":
            valor = 11;
            break;
        case "c":
            valor = 12;
            break;
        case "d":
            valor = 13;
            break;
        case "e":
            valor = 14;
            break;
        case "f":
            valor = 15;
            break;
        default:
            console.error("Letra no válida");
            return null; 
    }
    return valor;
}