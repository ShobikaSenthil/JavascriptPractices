function abc(nameOfPerson,age)
{
    this.nameOfPerson = nameOfPerson;
    this.age = age;
    //const age=age;   => error
    this.print=function (){
        console.log("Age is "+age);
    }
}

var x = new abc("Shobi",21);
var y=new abc("Rakshi",19);

// console.log(x);
// console.log(y);
x.print();
y.print();
x.nameOfPerson="Shobika";
console.log(x);
x.age=30;
console.log(x);
