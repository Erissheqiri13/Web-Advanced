function showmessage(){
    alert("This message is inside the function")
}

showmessage();

function sum(num1,num2){
    return num1+num2
}

console.log(sum(30,74))

var arrowFunction = () => alert("hello")

arrowFunction()

var arrowFunction = name => alert('hello ${name}')

arrowFunction("enes")

function dsFunction(){
    var localVar = "Digital School"
    alert(localVar)
}

dsFunction()

alert(local)

var car = {
    name: "Mercedes",
    color: "Red",
    year: 2027,
    kilometers:2.5,

    startEngine : function(){
        alert("vroom")
    }
}

car.startEngine()

var computer = new Object();

computer.name = "Lenovo"
computer.CPU = "intel core i7"
computer.RAM = "16gb"
computer.GPU = "geforce"
computer.type = function(){
    return this.name+','+this.CPU+','+this.RAM+','+this.GPU
}

alert(computer.GPU)

function Computer(name,CPU,RAM,GPU){
    this.name = name
    this.RAM = RAM
    this.GPU = GPU
}

var computer1 = new Computer("macbook","m1","8gb","5090")
var computer2 = new Computer("acer","intel","4gb","integrated")