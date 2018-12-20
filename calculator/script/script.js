$(".btn").click(function(event) {
 var thingClicked = this.innerHTML
 console.log("you clicked: ", thingClicked)
  $(".item-header").html(thingClicked)
})


var inputs = [""];
var operator1 = ["+","-","/","*"];
var operator2 = ["."];
var nums = [0,1,2,3,4,5,6,7,8,9];


function() checkValue{
	if (inputs) {}
}


// function getCurrentValue() {
//  var currentValue = document.getElementById("currentValue").innerHTML
//   //console.log('0. typeof currentValue is: ', typeof currentValue)
//   currentValue = parseInt(currentValue, 10) //remove leading 0, make number
//   //console.log('0. typeof currentValue is now: ', typeof currentValue)
//   //console.log('0. currentValue is: ', currentValue)
//   return currentValue //returning currentValue will be a number
// }
// //getCurrentValue()
// function clearCurrentValue(event) {
//   $("#clear").click(function(event) {
//     console.log('calling clearCurrentValue... currentValue === 0')
//     $("#currentValue").html(0)
//     getCurrentValue()
//   })
// }
// clearCurrentValue(event)
// function clickButton(event) {
//   $(".btn").click(function(event) {
//     var thingClicked = this.innerHTML
//     console.log("1. you clicked: ", thingClicked)
//     console.log('1. typeof thingClicked is: ', typeof thingClicked)
// if ($(this).hasClass("num")) {
//       console.log(`2. ${thingClicked} is a num class!`)
//       var currentValue = getCurrentValue()
//       //console.log('2. typeof currentValue is: ', typeof currentValue)
//       currentValue = currentValue.toString() //make number a string
//       var newString = currentValue + thingClicked //add into newString
//       var newNumber = parseInt(newString, 10) //remove leading 0, make number
//       console.log('2. replace currentValue with newNumber: ', newNumber)
//       //console.log('2. typeOf newNumber is: ', typeof newNumber)
//       $("#currentValue").html(newNumber)
//     }
//   })
//   return thingClicked
// }
// clickButton(event)