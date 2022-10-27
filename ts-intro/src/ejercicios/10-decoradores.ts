
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  }

@classDecorator
class miSuperClase {
    public miPropiedad: string='ABDC';

    imprimir(){
        console.log('Hola Mundo')
    }
}


console.log(miSuperClase);

const miClase = new miSuperClase();

console.log(miClase.miPropiedad);