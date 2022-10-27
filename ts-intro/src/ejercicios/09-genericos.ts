
function queTipoSoy <T> (argumento: T){
    return argumento;
}

let soyString =  queTipoSoy( 'Hola Mundo' );
let soyNumero =  queTipoSoy( 100 );
let soyArreglo =  queTipoSoy( [ 1 , 5 , 6] );

let soyExplicito = queTipoSoy<number>( 100 );

