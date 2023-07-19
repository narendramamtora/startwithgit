
console.log('person1:shows ticket'); 
console.log('person2:shows ticket');

const preMovie=async()=>{
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('ticket')
  },3000)
});
const getPopcorn=new Promise((resolve,reject)=>resolve('Popcorn'))
const addbutter=new Promise((resolve,reject)=>resolve('butter'))
const getColdDrinks=new Promise((resolve,reject)=>resolve('colddrink'))
 let ticket= await promiseWifeBringingTicks; 
      console.log(`wife:i have the ${ticket}`);
    console.log('husband :we should go in');
    console.log('wife:no i am hungry')
  
  let Popcorn= await getPopcorn;
    console.log(`husband :i got some ${Popcorn}`);
  console.log('husband :we should go in');
  console.log('wife:i need butter on my popc orn')
 
 let butter =await addbutter;
   console.log(`husband :i got some ${butter}`);
  console.log('husband :we should go in');
  console.log('wife:i need butter on my popc orn')

let colddrink =await addbutter;
    console.log(`husband :i got some ${colddrink}`);
  console.log('husband :here it is ');
  console.log('wife:thanks for getColdDrinks')

  
  return ticket
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));


console.log('person4:shows ticket'); 
console.log('person5:shows ticket'); 