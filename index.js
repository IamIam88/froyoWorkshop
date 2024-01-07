//create a prompt that requests an order from the customer coma seperated
const froyoOrder = prompt("Please enter your froyo order. Seperate each order with a comma!")
//this will create a variable with their order
const froyoArray = froyoOrder.split(",")

//loop over the array of flavors
//create an empty object


const froyoFunction = ()=>{

  const froyoObject = {}

  for(let i=0; i<froyoArray.length;i++){
    
    if(froyoObject[froyoArray[i]]){
        
      froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]]+1
       
    }else{
       
      froyoObject[froyoArray[i]] = 1
     
    }
  
  }
  return froyoObject
  
}

console.table(froyoFunction())