/*
    ===== Código de TypeScript =====
*/

function sumar (a: number,b: number): number{
    return a + b;
}

const sumarFlecha = ( a: number , b: number ): number => a + b;

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: () => void; 
}

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
     nombre: 'Strider',
     pv: 50,
     mostrarHP(){
        console.log('Puntos de Vida:',this.pv);
     }
}

curar(nuevoPersonaje, 49);
