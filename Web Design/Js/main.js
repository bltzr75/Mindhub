var array = [3,6,67,6,23,11,23,100,17,8,93,0,17,24,7,1,33,45,28,12,33,23,12,99,100]; 


mirror = (ar1)=>{

//takes array1 and creats a second
var result=[];
for (let i = 0; i < ar1.length; i++) {
    let op1= ar1[i];
    for (let j = 0; j < ar1.length; j++) {
        if(op1=== ar1[j] &&  (i != j)){
            result.push(ar1[j]);
            }        
    }
  }
  console.log('result 6--->',result)
}

mirror(array);
 

 /* Exercise 7 */

 myColor = ["Red", "Green", "White", "Black"];

 console.log(clean(myColor));
    
 function clean(array){
    let result="";
    for (let i = 0; i < array.length; i++) {
        result+="\"" +array[i]+"\""+" ";
        }
       console.log('exercise 7---->', result) 
}


/* Js String Functions */

 /* Exercise 1 */

n=123456;

let reverseIt=(n)=>{
    let result= "";
    let str=n.toString();
    for (let i = str.length ; i > 0; i--) {
        result+= str[i-1];
    
    }
    console.log('exercise 1---->',result)
}
reverseIt(n);

 /* Exercise 2 */

let str="For example right?, this is just an example... JUST IT!"

let orderIt=(n)=>{
/*     console.log('exercise 2---->', n)
    n=n.replace(/[^A-Za-z]/g, "")
    console.log('exercise 2---->', n)
    n= n.toLowerCase()
    console.log('exercise 2---->', n)
    n= n.split("");
    console.log('exercise 2---->', n)
    n= n.sort() */
    n= n.replace(/[^A-Za-z]/g, "").toLowerCase().split("").sort();
    console.log('exercise 2---->', n);
}
    orderIt(str);

    /* Exercise 3 */

    example=[54,23,43,234,23,234234,5464564,345]

 let maxVal=(array)=>{

    let result= 0

    for (let i = 0; i < array.length; i++) {
         if (result < array[i])
         {result=array[i] };
       }

    console.log('exercise 3---->', result);

 }

 maxVal(example);

 /* Exercise 4 */

let sentence=`Question: you know any longest word rather than 'anticonstitucionalmente' 
              in the spanish language? 
              Answer: Nooooooooooooooooooooooo`;

let maxWord=(arr)=>{
   let words= arr.split(" ");
   let longest= "0";

   for (let i = 0; i < words.length; i++) {
        if (longest.length < words[i].length)
        { longest=words[i] };
      }

   console.log('exercise 4---->', longest);

}

maxWord(sentence);