
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string,
    ){}
}

class Hero extends PersonaNormal{
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super(nombreReal, 'New York, USA');
    }
}

const ironMan =  new Hero ( 'IronMan' , 45 , 'Tony' );

console.log(ironMan);   