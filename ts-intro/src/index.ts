
(function(){
    //------------------------------------------------------------------------------

    // ------------------ Decorador de Clase ---------------------------------------

    console.log('--------------------- Decorador de Clase --------------------\n\n\n')

    function decoradorClase(nuevoNombre: string) {
        return function <T extends { new(...args: any[]): {} }>(constructor: T) { 

            return class extends constructor { // Modificacion del constructor
                nombre = nuevoNombre;
            }

        }

    }


    @decoradorClase('Daniel')
    class Persona {
        // nombre: string;
        // telefono: number;

        constructor(
            private nombre: string,
            private telefono: number)
            {
            this.nombre = nombre;
            this.telefono = this.telefono
        }
    
        saluda() {
            console.log(`${this.nombre} dice hola!!, y su numero es ${this.telefono}`)
        }
    }
    
    new Persona('John',3102222222).saluda(); // Bob says hi!

    console.log('\n\n\n')

    // ---------------- Decorador de Metodos ---------------------------------------

    console.log('--------------------- Decorador de Metodos --------------------\n\n\n')

    function log(target: Object, propertyKey: string, descriptor: any) {
        console.log('Clase: ', target.constructor.prototype);
        console.log('Método: ', propertyKey);
        console.log('Property Descriptor: ', descriptor);
    
        descriptor.value = function (...args: any[]) {
            console.log('Argumentos de la funcion', args);
        }
        return descriptor;
    }
    
    class ClaseEjemplo {
        @log
        escribeAlgo(algo: string) {
            console.log(algo);
        }
    }
    
    new ClaseEjemplo().escribeAlgo('Parametro de prueba');

    console.log('\n\n\n')

    // ------------- Decorador de Propiedades y Parametros -------------------------

    console.log('------- Decorador de Propiedades y Parametros -------- \n\n\n')

    function decoradorDePropiedad(target: Object, propertyKey: string) {
        console.log('Clase', target);
        console.log('Nombre de la propiedad', propertyKey);
    }
    
    function decoradorDeParametro(target: Object, propertyKey: string, parameterIndex: number) {
        console.log('Nombre del metodo', propertyKey);
        console.log('Clase', target);
        console.log('Posicion del parámetro', parameterIndex);
    }
    
    class ClaseEjemplo2 {
         
        @decoradorDePropiedad propiedadDeEjemplo: string = 'Hola Mundo';
    
        sum(a: number, @decoradorDeParametro b:number): number {
            return a+b
        }
    }  

    console.log('\n\n\n')

    //------------------------------------------------------------------------------------
})()