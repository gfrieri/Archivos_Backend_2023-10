function fizzbuzz(n){
    const N = [];
    for (let i = 0; i<n; i++){
        if((i+1)%3==0 && (i+1)%5==0){
            N[i] = "FizzBuzz";
        }else if ((i+1)%3==0){
            N[i] = "Fizz";
        }else if ((i+1)%5==0){
            N[i] = "Buzz";
        }else{
            N[i] = i+1;
        }
    }        
    return N
}

console.log(fizzbuzz(15));