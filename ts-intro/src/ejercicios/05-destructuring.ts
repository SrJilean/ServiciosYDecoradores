
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// const autor = 'Macaco';
// const { volumen , segundo , cancion , detalles:{autor: autorDetalle}} = reproductor; // Mala practica para TypeScript
const { volumen , segundo , cancion , detalles} = reproductor;
const {autor} = detalles;

// console.log('El volumen actual es:', volumen )
// console.log('El segundo actual es:', segundo )
// console.log('La cancion actual es:', cancion )
// console.log('El autor es:', autor )

const dbz: string[] = [ 'Goku', 'Vegeta' , 'Trunks' ];
const [gocu , , p3] = dbz;

console.log('Personaje 0:', gocu);
console.log('Personaje 1:', dbz[1]);
console.log('Personaje 2:', p3);