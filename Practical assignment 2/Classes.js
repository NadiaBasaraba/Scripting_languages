


class Book {
    constructor(name, author) {
      this.name = name;
      this.author = author;      // this указывает на новый создаваемый объект 
    }
  
    writtenBy() {
        return ("This book is written by " + this.author);
    }

    getName () {
       return ("Its name is " + this.name)}
  }


class Book2 extends Book {
    constructor(name, author, genre, year) {
        super(name, author);          // вызывает конструктор базового класса
        this.genre = genre;
        this.year = year;
    }

    retell() {
        return ("It is a " + this.genre);
    }

    getName () {
       return ("It is called " + this.name)   //переопределение метода
   }
}
  

let AnnaKarenina = new Book2 ('Anna Karenina', 'Leo Tolstoy', 'novel', '1878',);

console.log(AnnaKarenina)
console.log(AnnaKarenina.writtenBy())
console.log(AnnaKarenina.retell())
console.log(AnnaKarenina.getName())

 

