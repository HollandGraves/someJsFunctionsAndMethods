// //first is the sort() method, which sorts arrays alphabetically and, when coupled with a function, sorts numbers numerically in ascending order
// var wordArray = ['bob', 'betty', 'zeta', 'wilburt', 'gil', 'nicol bolas'];
// var numArray = [45, 457, 459, 9867, 1, 0, 3457777];

// console.log(wordArray.sort());

// //you will notice when the numArray tries to sort() it wont be exactly in numerical form, as far as human understanding goes
// console.log(numArray.sort());

// //to remedy this we must pass a function to sort(). Here are two ways to do so:
// console.log(
//     numArray.sort(
//         function sortNumbers(a, b) {
//             return a - b; //this will return the numbers of the array in ASCENDING order
//         }
//     )
// );

// //here is another way, with shorter notation, to do this exact function
// console.log(
//     numArray.sort(
//         (a, b) => a - b
//     ) //this will also return the numbers of the array in ASCENDING order
// ); //or, you could also write it out as: console.log(numArray.sort((a, b) => a - b));

// //this is the shorthand, non-'indented  hadouken' code for the DESCENDING order
// console.log(numArray.sort((a,b) => b - a)); 

//This is how you would sort an array of objects both by a property of numbers and a property of strings
var hotels = [
    {
        name:'Quay',
        rooms: 225,
        booked: 170,
        price: 350,
        rating: 4.3
    },
    {
        name: 'Seaside',
        rooms: 155,
        booked: 135,
        price: 270,
        rating: 3.7
    },
    {
        name: 'Ranch',
        rooms: 100,
        booked: 60,
        price: 400,
        rating: 4.9
    },
    {
        name: 'Gardens',
        rooms: 200,
        booked: 190,
        price: 250,
        rating: 3.9
    },
    {
        name: 'Valley',
        rooms: 125,
        booked: 70,
        price: 220,
        rating: 4.7
    }
]

// save a reference to the hotel list so we can write our results to the html
const hotelListDiv = document.getElementById('hotel-list');

// save a reference to the form designed for sorting
const form = document.getElementById('sort');

// whenever the form is submitted, call this function below:
form.addEventListener('submit', e => {
    e.preventDefault(); // stop the form from actually refreshing the page

    let sortedHotels = sortBy(hotels, form.hotels.value); // run our sorting function and get the results back

    // clear the previous list so they don't just keep stacking up on each other
    hotelListDiv.innerHTML = '';

    // now that we have hotels sorted in the proper order, loop through each hotel and write it to the page.
    sortedHotels.forEach(hotel => {
        let div = document.createElement('div');

        let name = document.createElement('div');
        name.innerHTML = hotel.name;

        let rooms = document.createElement('div');
        rooms.innerHTML = hotel.rooms;

        div.appendChild(name);
        div.appendChild(rooms);
        hotelListDiv.appendChild(div);
    });

});

// sortBy will take the list of hotels as the first argument and the sort type as the second. it will sort the hotels
// based on the sort type and return a new array of properly sorted items.
function sortBy(data, type) {

    // make sure we are trying to sort on something that we can actually sort on (make sure it says 'name' and not something dumb like 'mary poppins')
    if (type !== 'name' && type !== 'rooms' && type !== 'booked' && type !== 'price' && type !== 'rating') return false;
 
    let newList = Object.assign([], data); // this copies the hotel list to a new array so that we don't mess up the original hotel list.
    newList.sort((a, b) => {
        if (a[type] > b[type]) return 1; // using the brackets, we are able to pass in the type as a variable instead of a string
        if (a[type] < b[type]) return -1;
        return 0;
    });

    return newList; // return back our new and properly sorted array
}

// //This function will sort out a property of numbers (it is a slight modification of the above shorthand function for arrays of numbers)
// hotels.sort((a,b) => a.rooms - b.rooms);
// console.log(hotels);

// //This function will sort out a property of strings (you will notice it is slightly different from the functions above used for sorting)
// hotels.sort(function(a,b) {
//                 if(a.name > b.name) {
//                     return 1;
//                 } else {
//                     return -1;
//                 }
// });
// console.log(hotels);



//     var copyHotels = copiedArray(hotels);
//     var radioType = hotelDataType();
//     var radioChoice = hotelValue();

//     copiedArray(hotels);
//     hotelDataType();
//     hotelValue();
//     sortHotels(copyHotels, radioType, radioChoice);

//     //This function will copy the array so as to not corrupt the original data with the sort() method
//     function copiedArray(ranArray) {
//         var copyOfArray = [];
//         for(i = 0; i < ranArray.length; i++) {
//             copyOfArray.push(ranArray[i]);
//         }
//         //returns blankArray filled with copy of array passed as argument
//         return copyOfArray;
//     };

//     //this function will search through all the options to find the checked option to sort the array of hotel objects by
//     //this function is meant to tack on as a method to the return values for the sort function e.g. a.hotelQuery() - b.hotelQuery()
//     function hotelValue() {
//         var hotelSearchOptions = document.getElementsByTagName('input');
//         var value;
//         for (var i = 0; i < hotelSearchOptions.length; i++) {
//             if (hotelSearchOptions[i].type === 'radio' && hotelSearchOptions[i].checked) {
//                 value = hotelSearchOptions[i].value;       
//             }
//         }
//         //returns value of checked radio dial that will pass as an argument to sortHotels
//         //, so sortHotels will know whether to sort alphabetically or numericall
//         return value;
//     };
//     function hotelDataType() {
//         var hotelSearchOptions = document.getElementsByTagName('input');
//         var radioDataType;
//         for (var i = 0; i < hotelSearchOptions.length; i++) {
//             if (hotelSearchOptions[i].type === 'radio' && hotelSearchOptions[i].checked == true) {
//                 radioDataType = hotelSearchOptions[i].id;       
//             }
//         }
//         //returns value of checked radio dial that will pass as an argument to sortHotels
//         //, so sortHotels will know whether to sort alphabetically or numericall
//         return radioDataType;
//     };
//     //this function will create a copy of an array, search the radio dial form to see which 
//     //preference for displaying the hotel data, and will sort() the data based upon the response
//     function sortHotels(copyOfThatArray, thatHotelDataType, thatHotelProperty) {
//         //this will decide whether to run an alphabetical sort, or a numerical sort
//         if(typeof(thatHotelDataType) === typeof(1)) {
//             //these next two functions will allow the user to sort the array
//             //this function will sort the array for number data types
//             copyOfThatArray.sort((a,b) => a.thatHotelProperty - b.thatHotelProperty);
//         } else if(typeof(thatHotelDataType) === typeof("name")) {
//             //this function will sort the array for string data types
//             copyOfThatArray.sort(function(a,b) {
//                 if (a.thatHotelProperty === b.thatHotelProperty) return 0;
//                 if(a.thatHotelProperty > b.thatHotelProperty) {
//                     return 1;
//                 } else {
//                     return -1;
//                 }
//             });
//         };
//     };





// //this next section covers the reverse() and push() methods
// //The challenge with the reverse() method is that it permenatly mutates the array in question, 
// //until called again on that same array. The solution to maintaining data integrity is to use 
// //a function to create a whole new array, and the push() method to push all the items from the
// //function in question to a new function, then reverse that function
// //e.g.
// function createArray(someArray) {
//     var newArray = []; //create new array
//     for(i = 0; i < someArray.length; i++) { 
//         newArray.push(someArray[i]); //loop through all the items in the argument array passed, and push them all to the new array
//     }
//     return newArray; //return new array
// };
// var reverseNumArray = createArray(numArray).reverse();

// //check with console.log
// console.log(reverseNumArray);
// console.log(numArray);








//This next section will go over the process of creating a login and register user form
var users = [
        {
            username: 'Dustin',
            password: 'pw1'
        },
        {
            username: 'Matt',
            password: 'pw2'
        },
        {
            username: 'Kat',
            password: 'pw3'
        }
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < users.length; i++) {
        if(users[i].username == username && users[i].password == password) {
            console.log(users[i].username + " is logged in!");
            return
        }
    }
    console.log("password or username is incorrect");
};