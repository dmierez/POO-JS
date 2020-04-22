// const s ="hola";
// console.log(typeof(s));

// const s2 = new String("hola");
// console.log(typeof(s2));

// console.log(window)





//-------------------------
// Obetos literales 


// const libro = {
//     titulo: 'libro uno',
//     autor: 'diego mierez',
//     año: '2012',
//     getResumen: function() {
//         return `${this.titulo} fue escrito por ${this.autor}
//         en el año ${this.año}`
//     }
// };

// const libro1 = {
//     titulo: 'libro 2',
//     autor: 'papa mierez',
//     año: '2013'
// };

// console.log (libro);
// console.log (libro1);
// console.log(Object.values(libro1)); // convertir un objeto a array
// console.log(Object.keys(libro1));

// console.log(libro.getResumen())




//---------------------------------------
// puedo crear objetos a través de funciones
// y me sirve para quiero inicializar un objeto
// por medio de constructores


// function libro() {
//     this.titulo = 'libro1',
//     this.autor = 'diego mierez',
//     this.año = 2019,
//     console.log('creando el objeto');
// };

// const libro1 = new libro();
// console.log(libro1)



function libro(titulo, autor, año) {
    this.titulo = titulo,
    this.autor = autor,
    this.año = año
};

function Revista (titulo, autor, año, mes) {
    libro.call(this, titulo, autor, año);
    this.mes = mes;
}

libro.prototype.getResumen = function () {
    return libro
}

libro.prototype.getpito = function (){
    const año = new Date().getFullYear() - this.año;
    return año;
}

libro.prototype.revisado = function (newAño) {
    this.año = newAño;
    this.revised = true;
}

const book = 'toyota';
const name = 'diego';
const year = 2010;

const libro1 = new libro(book, name, year);
console.log(libro1.getpito());


console.log(libro1);
libro1.revisado(2012);
console.log(libro1)



const revista1 = new Revista ('revista1', 'papa', 2018, 'septiembre');
console.log(revista1);
