//LONG QUESTION 1

var words = ["hello", "what", "is", "up", "dude"]

var count = words.map(function (x) {
  return x.length
})

console.log(count)

//SHORT QUESTION 4A

sumArr = [1,2,3,4]

var totalSum = sumArr.reduce(function(x,y){
   return x + y
})

console.log(totalSum)

//SHORT QUESTION 4B

multiArr = [1,2,3,4]

var multiSum = multiArr.reduce(function(x,y){
   return x * y
})

console.log(multiSum)

//SHORT QUESTION 7

var amazing = ["This", "is", "an", "amazing", "array", "of", "words"]

var findLong = amazing.reduce(function (x,y){
if (x.length > y.length)
return x

else
return y
})

console.log(findLong.length)

//SHORT QUESTION 8

var amazeAgain = ["This", "is", "an", "amazing", "array", "of", "words", "again"]

var findLongAgain = amazeAgain.filter(function(x) {
if (x.length >= 5)
return x
})

console.log(findLongAgain)

//BONUS QUESTION 1

var str = "The quick brown fox jumped over the lay dog";

var words = str.split(' ')

var longest2 = words.reduce(function (x,y) {
  if (x.length > y.length)
      return x

  else
      return y
});

console.log(longest2)

//BONUS QUESTION 2

var arrOfArr =[
 [4, 5, 1, 3],
 [13, 27, 18, 26],
 [32, 35, 37, 39],
 [1000, 1001, 857, 1]
];

var empty = [];

arrOfArr.forEach(function(x){
 var newx = x.reduce( function(prev, curr) {
     if(prev > curr) {
         return prev;
     } else { 
         return curr;
     }
 });

 empty.push(newx);
});

console.log(empty);
