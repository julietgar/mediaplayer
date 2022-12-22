// boolean
let muted: boolean = true;
muted = false;

// arrays
let nombres: string[] = [];
nombres = ['aa', 'bb', 'cc'];

let detodo: Array <string | number> = [];
detodo = ['aa', 123, 'bb', 321];
detodo.push('cc');
detodo.push(456);

// Enums
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFav: Color = Color.Azul;

console.log(`Mi color favorito es: ${colorFav}`);

// Any

let varios: any = "hola";
varios = {test: "test"};

// object
let anhyObject: object = {test: "test"};

// funciones

function add(a: number, b: number): number {
    return a + b;
}
const sum = add(1, 2);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return a + b;
    }
}

let sumA = createAdder(2)(3);
console.log(`suma de funciones directa es: ${sumA}`);

let sumB = createAdder(6);
let sumC = sumB(3);
console.log(`suma de funciones por separado es: ${sumC}`);

// interface

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    alto: 23,
    ancho: 10,
    color: Color.Verde
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

let areaRect = area(rect);
console.log(`Area de un rectangulo es: ${areaRect}`);

rect.toString = function() {
    return `Un rectangulo ${this.color}`;
}
console.log(rect.toString());
