var fname = "badger";
//window.fname = "tiger-two";
Person.prototype.fname = "tiger";
// function statement, which is also an object
// if this function statement is used as a function constructor the 'this' keyword for this function 
// points to the newly created empty object when the 'new' keyword is used.
// Therefore if we use 'this' within the function constructor, we can assign variables to that newly created empty
// object by using the 'this' keyword.
function Person(x,y){
    this.fname = x;
    this.sname = y;
    // as per normal 'this' points to the global object
    // however when the Person function is used as a constructor the 'new' keyword creates
    // a new empty object Constructed vis-a-vi the Person function constructor (so it is a 'Person' Object when viewed in the console), and the 'this'
    // keyword of the function constructor is referencing pointing to that newly created object. 
    // So we can set that new objects variables by using the 'this' keyword in the function constructor
    console.log(this);
}
Person.prototype.getName = function(){
    // fname points to the global object
    console.log(fname);
    // 'this' points to the empty object created by the function constructor, all properties of .prototype, are available to all objects created
    // by the objects returned using the new Keyword 
    // 'this' points to its parent objects properties if it is the 'new' keyword and function constructor are not used.
    console.log(this.fname);
    
};
// When the 'Person' function statement object above is used as a function constructor, then this 'prototype' property
// with all its properties is accessible to every object create via the new keyword using the Person function statement
// as a constructor.


var Mark = new Person('Mark', 'Cosgrave');

Mark.getName();

//
Person.prototype.getName();

//When the Person function constructor is simply called as a function, the 'this' keyword points to the global object as mentioned abve.
Person();
//console.log(Mark);
//console.log(Mark);


// var object1 = {
//     fname : 'mark',
//     sname : 'cosgrave',
//     printName : function(){
//         var innerFunction = function(){
//             console.log(fname);
//         }
//     //     //arrow functions retain 'this' keyword pointing to its parent object
//     //     let innerFunction = () =>  {
//     //     this.fname = 'John';
//     //     }
        
//          innerFunction();
//          //console.log(this.fname + this.sname);
//    }
// };

//object1.printName();

let function1 = function(name,callback){
    //console.log(name);
    name = "John";
    console.log(name);

    callback(name);
};

// when you pass in a function on the fly, it's 'this' keyword points to the global object.
// Remember it's HOW the function is called, which defines WHERE the this keyword points to.
// As a method, as a pure function, as function constructor, or call, apply, bind
// In essence when you are talking about running abstracted code like jQuery, the 'this' could be referencing anything
// So you just need to learn in each instance, what 'this' is pointing to, or take a look in the code.
function1('mark', function(x){
    console.log(this);
});

//function1();
