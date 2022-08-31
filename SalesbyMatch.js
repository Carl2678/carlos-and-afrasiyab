let tempArry = ar.sort((a,b)=>a-b)
 let k = 0;
 let count = 0;
 for ( let i=0; i<=ar.length-1; i = i+k) {
       if(ar[i] == ar[i+1]){
           k=2;
           count++;
       }else{
           k=1;
       }
       }
       return count;
 }
