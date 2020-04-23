class Libro {
    constructor (titulo, autor, year){
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
    }
    getResume() {
        return `hola ${this.titulo}`;
    }

    static EjemploStatic(){
        return `Prueba static`
    }
}

class revista extends Libro {
    constructor(titulo, autor, year, mes){
        super(titulo, autor, year);
        this.mes = mes;
    }
}

// instancia de la clase libro

const libro1 = new Libro('toyota', 'diego', 2020);
console.log(libro1);
console.log(libro1.getResume());
console.log(Libro.EjemploStatic());

// instancia de la clase libro

const revista1 = new revista('lean', 'papa', 2010, 'enero');
console.log(revista1);