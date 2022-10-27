console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/

const nombre2 = 'Strider' // Las constantes no indican tipo debido que no cambian

let nombre: String = 'Strider';
let hp: number | String = 95;
let estaVivo: boolean = true;

hp = 'FULL'

//nombre = 123 // El tipado estricto bota error


console.log(nombre, hp);