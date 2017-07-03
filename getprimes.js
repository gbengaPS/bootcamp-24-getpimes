function getPrimes(number)
{
  let primes = [];
  
  if(typeof number !='number')
  {;
    return null;
  }
  else if(number<=0)
  {;
    return [];  
  }
  else if(number <2 ){
    return [];
  }
  else{
  for(let counter =2;counter<=number;counter++){
   ;
    if(counter%2 !==0 || counter % 3 !==0 || counter % 7 !=0)
    {
      let divisionCount=0;
      for(let counter2=2;counter2<=counter;counter2++)
      {
        
        if(counter%counter2==0)
        {
          divisionCount +=1; 
        }
      }
      if(divisionCount==1)
      {
        primes.push(counter);
      }
    }
    
  }
  return primes;
  }
}
console.log(getPrimes(0))
module.exports = getPrimes;