/*
  Once you complete a problem,
  refresh ./constructors.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create a constructor function called CarFactory that will build car objects with make and model properties.
  The values for the make and model will come from two parameters, make and model (in that order).
*/

function CarFactory(make, model){
  this.make = make;
  this.model = model;
}

////////// PROBLEM 2 //////////

// Do not edit the code below.

function Employee(name, email, hireDate) {
    this.name = name;
    this.email = email;
    this.hireDate = hireDate;
  }
  
  // Do not edit the code above.
  
  /*
    Invoke the constructor function above and pass in 'Bob', 'bob@gmail.com', and '01-02-98' as arguments.
    Assign the result of the invocation to a variable called bob.
  */
  
  const bob = new Employee("Bob", "bob@gmail.com", "01-02-98")
  
  ////////// PROBLEM 3 //////////
  
  // Do not edit the code below.
  
  var prius = new Car('Toyota', 'Prius', 2011);
  var mustang = new Car('Ford', 'Mustang', 2013);
  prius.moveCar(); // Increments prius' move property by 10. Returns the new move property.
  mustang.moveCar(); // Increments mustang' move property by 10. Returns the new move property.
  
  // Do not edit the code above.
  
  /*
    Write a constructor function, including method definitions, which will make the above function invocations function properly.
  
    Hint: you'll need to add a move property,
      with a starting value of zero, and write a moveCar function which will increment the move property by 10.
    The move property will be added to every object that is being returned from the Car function.
    You'll also need to use the 'this' keyword properly in order to make sure you're
      invoking moveCar on the right object (prius vs mustang).
  */
  
  function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function() {
      return this.move += 10
    };
  }

  /* this problem is using hoisting in order to handle the variables being used up above before they are defined down below. the constructor
  function Car is taking in three parameters: make, model and year. we're making an object though with the key value pairs of make, model, year, move and moveCar.
  the values of make model and year will be passed in as arguments of the function. but move and moveCar are going to interact with each other in order to 
  increment by 10. so moveCar is a function that returns the value of move + 10. 
  
  ////////// PROBLEM 4 //////////
  
  /*
    Here we have a constructor function named Movie that takes in 3 parameters:
      name (a string), genre (a string), and rating (a number withing 1-100 that has been averaged out from previous given ratings).
    Write a prototype method for the Movie constructor function called changeRating.
    This method should take in a number as a parameter that will be a new rating.
    Find the average between the old rating and the new rating.
    Change the rating property to become this new number and return the updated rating.
  */
  
  function Movie(name, genre, rating) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
  }
  
  Movie.prototype.changeRating= function(num){
    this.rating = (this.rating + num) / 2;
    return this.rating;
  }
  
  ////////// PROBLEM 5 //////////
  
  // Write a constructor function called User. This function should take in 4 parameters called name, age, email, and savedPosts in that order. Name and email will be strings, age will be a number and savedPosts will be an array of objects. These objects will each have 3 properties: id (a number), title (a string), and rating (a number between 1 and 5). These objects are the posts that the user will have saved to their account.
  
  // Once the User constructor function is created, write a prototype method for the User function. Name this method addSavedPost. It should take in three parameters: id (a number), title (a string) and rating (a number). Use these parameters to create a new object and add it to the savedPosts array. Make sure to name the properties the same as described previously (id, title, rating).
  
  function User (name, age, email, savedPosts){
    this.name = name;
    this.age = age;
    this.email = email;
    this.savedPosts = savedPosts;
  }

  User.prototype.addSavedPost = function(id, title, rating){
    
    this.savedPosts.push({id, title, rating})
  }

  
  /* so this one is going to take the User constructor function and create more objects every time we go through the prototype addSavePost which is a function
  that does the great trick of adding (pushing) it's parameters to the savedPosts array on the User object. fancy */
  // the new User object then will look something like this:
  // {
  //   name: "something",
  //   age: some number,
  //   email: "something@something",
  //   savedPosts: [{id, title, rating},{id, title, rating},{id, title, rating},]
  // }
  
  ////////// PROBLEM 6 //////////
  
  // You will be using the constructor function you just created in problem 5.
  // Write a prototype method for the User constructor function named removeSavedPost that will take in one number parameter representing the post id. Use this id to find and remove the matching object in the savedPosts array.
  
  

  User.prototype.removeSavedPost = function(id){
      let index = this.savedPosts.indexOf(id)
      this.savedPosts.splice(index, 1)
      
     }
  
  
  
/* in this one, we're trying to take an id and see if it matches the id that is stored on the object that is inside of the array called savedPosts. what we do is make the prototype constructor function called removeSavedPosts which equals a function with one parameter: id. in this function we are then going to find the index of the object that has the same id as the one we're passing in. we'll make that index value a variable called index so that we can use it to remove the object at the index that has the matching id. we use splice and tell it which index and to remove just one item */

  ////////// PROBLEM 7 //////////
  
  // You will continue to use the constructor function you created in problem 5.
  // Write a prototype method for the User constructor function named changePostRating that will take in two number parameters. The first will be an id (a number) and the second will be the new rating (a number). Use the id to find the matching object in the savedPosts array. Once you find the matching object, update it's rating score with the new rating parameter.
  

  User.prototype.changePostRating = function(id, newRating){
   this.savedPosts.forEach(function(element){
     if(element.id === id){
       element.rating = newRating
     }
   })
 }
  