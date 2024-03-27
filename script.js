const circle={
    radius:5,
    location: {x:30, y:40},
    draw : function(){
        console.log("Drawing a Circle with radius "+this.radius);
    }
}

circle.draw(); // Drawing a Circle with radius 
circle.location;
circle.radius;

// this is factory faction , that is use for construct a object . 

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        greet: function() {
            return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + '.';
        }
    };
}
// Usage:
const person1 = createPerson('John', 'Doe', 30);
console.log(person1.greet()); 


let z= 10;
console.log(typeof(z));

//===============================================
  //              Question
//================================================

function circle(redius){
    this.readius=redius;
    this.drew= function(){
        console.log('drew');
    }
}
const circle= new circle(10);

for(let key in circle){
    if(typeof circle[key]!=="function")
    console.log(key, circle[key])
}

const keys = object.keys(circle);
console.log(keys);
//==================================================
//                   Question 
//==================================================


function circle(readius){
    this.radius= this.radius
    this.defaultLocation={x: 0, y:0};
    this.computeOptimumLocation();

}
this.drew=function(){
    this.computeOptimumLocation();
    console.log('drew');
}
const circle= new circle(10);

//====================================================
//                          Question
//=====================================================

function stopwatch(){
    let startTime, endTime ,running, duration=0;
    this.start= function(){

    };
    this.stop= function(){
        
    };
    this.reset= function(){
};

Object.defineProperties(this, 'duration',{
get:function(){return duration},
});
}

