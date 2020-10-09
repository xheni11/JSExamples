function person(name,surname,age,average){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.average=average;
    this.getName=function (){
        return this.name;
    }
    this.getSurname=function (){
        return this.surname;
    }
    this.getAge=function (){
        return this.age;
    }
    this.getAverage=function (){
        return this.average;
    }

}
person.prototype.getInfo=function (){
    return this.getName+this.getSurname+this.getAge;
}
person.prototype.personAverage=function(){
    return "Average of "+this.getName()+" is "+this.getAverage();
}
function student(name,surname,age){
    person.call(this,name,surname,age);

}
student.prototype=Object.create(person.prototype);
student.prototype.run=function(){
    console.log("Sublcass "+ this.getInfo());
}

var student1=new student("Ann","Smith",20);
var person1=new person ("Jane","Dakot",23);

student1.run();
