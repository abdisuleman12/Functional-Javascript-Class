Exercise 1
const clue = {};
clue.weapons = ['candlestick', 'pipe', 'wrench']
clue.rooms = ['kitchen', 'study', 'parlor']
clue.people = ['mrs. white', 'ms. scarlet', 'mr. green']
clue.suspects = [
  {
    name: "rusty",
    color: "orange"
  },
  {
    name: "Miss Scarlet",
    color: 'red'
  }
]

var game = {};
game.murderer = "?"
game['weapons'] = [
  {type: 'lasers', location: 'lab'},
  {type: 'the game' ...},
   {... 'angry cats'...},
   {... 'angry birds' ...}
 ];

 game.name = [];
 game.name[0] = 'Miss Scarlet';
// game.name.push('Mr. Green')

 Exercise 2
 //{"name": "Rusty", "room":"kitchen", "weapon": "candlestick"}
//{name: "Rusty", room: "kitchen", weapon: "candlestick"}
const {name, weapon, room} = {"name": "Rusty", "room":"kitchen", "weapon": "candlestick"}
undefined
name
"Rusty"
room
"kitchen"
weapon
"candlestick"

Exercise 3
let leng = clue.suspects.length
for (i=0; i < leng; i++) {
    console.log(clue.suspects[i])
  }

Exercise 4
//for loop for objects specifically
let key in object
//is equivalent to (let i=0; i<arr.length; i++)
//for arrays

clue.suspects.forEach(item => console.log(item.name))

var gameLoop = function(game) {
  for (let i = 0; i <clue.suspects.length; i++) {
    console.log("outer loop")
      for (let key in clue.suspects[i]) {
        console.log("inner loop")
        if (clue.suspects[i][key] === "Miss Scarlet") {
          console.log('Found \'em')
          } else {
            console.log('Next time!')
          }
      }
    }
}

Exercise 5

extract the color keys only to
//without destructuring
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

//with destructuring method
var [{color: firstColor}, {color:secondColor}] = clue.suspects

//function work between 5 and 6
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[2],
        speak() {
            console.log("My name is ", name);
        }
    };
};

Exercise 6

_.each = function(list, callback) {
  //identify array
    if (Array.isArray(list)) {
      //loop through array
        for (var i = 0; i < list.length; i++) {
          //callback with each list item
          callback(list[i], i, list);
        }
    } else {
      //loop through object
      for (let key in list) {
        //callback with each object key:value pair
        callback(list[key], key, list)
      }
    }
  }

Exercise 7
//using map
  const weapons = ['candlestick', 'lead pipe', 'revolver'];

  const makeBroken = function(item) {
    return `broken ${item}`
  }
  const brokenWeapons = _.map(weapons, makeBroken)

brokenWeapons //returns
["broken candlestick", "broken lead pipe", "broken revolver"]

Exercise 8

_.map = function(list, callback) {
  let arr = []
  //identify array
    if (Array.isArray(list)) {
      let len = list.length
      //loop through array
        for (var i = 0; i < len; i++) {
          //callback with each list item and push to new array
          arr.push(callback(list[i], i, list))
        }
    } else {
      //loop through object
      for (let key in list) {
        //callback with each object key:value pair
         arr.push(callback(list[key], key, list))
      }
    }
    return newList
  }

Exercise 9

const _ = {}
//implement filter function (using each or not)
_.filter(arr, callback) {
  //declare temp array
  let trueArr = []
  //loop through each element of JSON data
  _.each(item, i, arr) {
    //run callback on each element
    //if true, push element to temp array
    if (callback(item, i, arr) === true) { trueArr.push(arr[i]) }
  }
  return trueArr
}
//using .each instead of .map here because .map will return an array of the same length, with 'true' passes returning the item and 'false' values returning undefined

Exercuse 10

//filter the json data for who was present the night of murderer
const videoData = [
   {
       name: 'Miss Scarlet',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Mrs. White',
       present: false,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Reverend Green',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Rusty',
       present: false,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Colonel Mustard',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Professor Plum',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   }
];
_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});

Exercise 10

Definitions (function(){})
Fn Names (named or callbacks)
Invocations ()
Arguments (actual value; defined)
Parameters (variable; passed)
Fn Bodies ()
Return Values ()
Side Effects ()

var nameImprover = function (name, adj) {
  return 'Col ' + name + ' Mc' + adj + ' pants';
};

$('body').hide();

myArr.forEach(function(val){ console.log(val);});

$('button').on('click', function(){
  console.log('Don\'t press my buttons!');
});

Exercise 11

//suspectArr = [] populated with objects from Exercise 10
_.map(suspectArr, function(suspectObject) {
  //suspectObject is arbitrary; binds each 'i' to be accessible
  return suspectObject.name
});

Exercise 12

const add = function(a , b) {
   console.log(arguments); //logs [3]
   b = b || 2
/* if (typeof b === 'number') {
   return a + b;
 } else {
   return a + 2;
 }
}; */
add(3); //5??

Exercise 13

//implement _.from
const from = arr => {
  return Array.prototype.slice.call(arr)
}
