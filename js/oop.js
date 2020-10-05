function Car(make, model, year, engine) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.running = false;
  this.speed = 0;
  this.engine = engine;
  this.start = function (key) {
    if (key.code == 'kmxetunsslpwerwttqxs') {
      this.running = true;
      this.engine.running = true;
    }
  };
  this.go = function (speed) {
    if (this.running) {
      this.speed = speed;
    }
  };
}

function Engine(cylinderCount, horsePower, transmissionType) {
  this.cylinderCount = cylinderCount;
  this.horsePower = horsePower;
  this.transmissionType = transmissionType;
  this.running = false;
}

let key = {
  code: 'kmxetunsslpwerwttqxs',
};

let myEngine = new Engine(6, '256', 'Automatic');

let myCar = new Car('toyota', 'tacoma', 2008, myEngine);
// let myOtherCar = new Car('nissan', 'GT-R', 2015);

function Person(name) {
  this.name = name;
  this.canTalk = true;
  this.greet = () => {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name);
    }
  };
}

function Employee(name, title) {
  Person.call(this, name);
  this.title = title;
  this.badgeId = '200012';
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let mtechEmployee = new Employee('Jason', 'Program Coordinator');



// todo app

//TodoList
// name
// todos
// addTodo(todo)
// removeTodo(todoId)
// editTodo(todoId)
// clearAllCompleted()

//Todo
// text
// completed



