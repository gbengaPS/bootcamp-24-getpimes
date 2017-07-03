function getPrimes(n)
{
  let primes = [];
  
  if(typeof n !='number')
  {
    return null;
  }
  else if(n<=0)
  {
    return [];  
  }
  else if(n <2 ){
    return []
  }
  else{
  for(let counter =2;counter<=n;counter++){
   
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
module.exports = getPrimes