// // Logging output & Console
// alert('Hello World'); // Do not use for debugging. Stops the script!
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');
// console.log(prompt('age'));

// // Data Types
// var a = 'abc';
// console.log(typeof a); // ==> string
// var b = 521.25;
// console.log(typeof b); // ==> number
// var c = undefined;
// console.log(typeof c); // ==> undefined
// var d = null;
// console.log(typeof null); // ==> object
// var e = true;
// console.log(typeof e); // ==> boolean
// var obj = { name: 'ali', age: 25 };
// console.log(typeof obj); // ==> object
// var arr = [2, 5, 'ali'];
// console.log(typeof arr); // ==> object
// var f = function fen() {};
// console.log(typeof f); // ==> function

////Booleans: Truthy & Falsy
// var a=0
// console.log(Boolean(a)) //false
// var b=false
// console.log(Boolean(b)) //false
// var c=true
// console.log(Boolean(c)) //false
// var empty=""
// console.log(Boolean(empty)) //false
// var space=" "
// console.log(Boolean(space)) //true
// var n=null
// console.log(Boolean(n)) //false
// var d
// console.log(Boolean(d)) //false
// var op='abc'/3
// console.log(Boolean(op)) //false

// //Mathematic Operators
// var a=5
// var b=2
// console.log(a+b) // ==> 7
// console.log(a-b) // ==> 3
// console.log(a*b) // ==> 10
// console.log(a**2) // ==> 25
// console.log(a/b) // ==> 2.5
// console.log(a%b) // ==> 1
// console.log(a++) // ==> 5
// console.log(a) // ==> 6
// console.log(a--) // ==> 6
// console.log(a) // ==> 5
// console.log(++a) // ==> 6
// console.log(a) // ==> 6
// console.log(--a) // ==> 5
// console.log(a) // ==> 5

// //Equality operators
// var a=5
// var b=4
// console.log(a>b)
// console.log(a>=b)
// console.log(a<b)
// console.log(a<=2)
// console.log(a==b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a!==b)

// //Logical operators
// var a=5
// var b=4
// var c=2
// console.log(a>b && b>c)
// console.log(a>b && b<c)
// console.log(a>b || b<c)
// console.log(a<b || b<c)

// var a=5
// var b=0
// var c=null
// var d=-1
// console.log(a && b)
// console.log(a && d)
// console.log(c || b)
// console.log(a || c)

// //Conditionals
// ****** if ******
// var a=0
// if (a%2===0){
//   console.log('pair')
// }
// else console.log('impair')
//
// if (a%2){
//   console.log('impair')
// }
// else console.log('pair')
//
// if (a>0){
//   console.log('positif')
// }
// else if(a===0){
//   console.log('zero')
// }
// else console.log('impair')

// ****** switch ******
// var a =1
//
// switch(a){
//   case 1: console.log('Lundi') ; break
//   case 2: console.log('Mardi') ; break
//   case 3: console.log('Mercredi') ; break
//   case 4: console.log('Jeudi') ; break
//   case 5: console.log('Vendredi') ; break
//   case 6: console.log('Samedi'); break
//   case 7: console.log('Dimanche'); break
//   default: console.log('Not a day')
//}

// switch(a){
//   case 0: console.log('zero')
//   break
//   case 1: console.log('un')
//   break
//   case 2: console.log('deux')
//   break
//   default: console.log('Not a Number')
// }

// // for Loop
// var T=[1,5,9]
// var sum=0
// for (var i=0;i<T.length;i++){
//   // sum=sum+T[i]
//   sum+=i
// }
// console.log(sum)
//
// for(var el of T){
//   console.log(el)
// }
//
// for(var key in T){
//   console.log(key)
// }
//
// var obj={name:'ali',age:25}
// for(i in obj){
//   console.log(i)
// }
//
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// // 1st checkpoint problem

// function minMax(arr) {
// 	var min=arr[0]
//   var max=arr[0]
//   var res=[]
//
//   for (var i=0 ; i<arr.length; i++){
//     if(min>arr[i]){
//       min =arr[i]
//     }
//     if (max<arr[i]){
//       max=arr[i]
//     }
//   }
//   res.push(min)
//   res.push(max)
//   return res
// }
// console.log(minMax([5,2,7,4]))

// function minMax(arr) {
// 	// var min=Math.min(...arr)
//   // var max=Math.max(...arr)
//   // return [min,max]
//
//   return [Math.min(...arr),Math.max(...arr)]
// }
// console.log(minMax([5,2,7,4]))

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([2, 5, 20, 10]));
