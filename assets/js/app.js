


function kripto() {
    // Code me to return true or false

   // number=number.toString(10).split('').map(int => parseInt(int, 10));
   let str=secretText.value.toLowerCase().split('');
   console.log(str);
   let newAbetka=[];
   let abetka='абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('')/*.join(',').split(',')*/;
   console.log(abetka);
    let shifr=secretNumber.value*1;

    //let newAbetka=abetka.map(a,i,arr => a=arr[i+shifr]);
    for(let i =0; i<str.length; i++){
       let Index=abetka.indexOf(str[i]);
        
            if( Index !== -1 ){

                if ( Index+shifr<33 ){


                    newAbetka.push(abetka[ Index+shifr ]);
                } else if(shifr>=33 && (shifr%abetka.length+Index)<33  ) {
                    //let temp = abetka.slice(i);
                    //[shifr%abetka.length+Index]
                    //let temp=[...abetka.slice( Index+1 ),...abetka.slice( 0, ( Index+shifr-(33-Index) ) )];
                   // let temp=[...abetka.slice( 0, ( Index+shifr-(33-Index) ) )];
                    
                    //console.log(temp[33-Index-1+Index+shifr-(33-Index)-1]);
                    //newAbetka.push(temp[-1+shifr+Index-1]);
                    newAbetka.push(abetka[shifr%abetka.length+Index]);
                    console.log(newAbetka);
                }else if (shifr>=33 && (shifr%abetka.length+Index)>=33) {

                    console.log( Index- (abetka.length-shifr%abetka.length) );
                    newAbetka.push( abetka[Index- (abetka.length-shifr%abetka.length)] );
                }else if ((shifr%abetka.length+Index)<33){
                    newAbetka.push(abetka[ Index+shifr%abetka.length ]);
                    console.log(abetka[ Index+shifr%abetka.length ]);
                }
                else {
                    
                    
                    //let temp=[...abetka.slice( Index+1 ),...abetka.slice( 0, ( Index+shifr-(33-Index) ) )];
                   //let temp=[...abetka.slice( 0, ( Index+shifr-(33-Index) ) )];
                    
                    console.log( abetka[Index-(abetka.length-shifr)] );
                    newAbetka.push(abetka[Index-(abetka.length-shifr)]);
                }

            }
                //console.log(abetka);
                //console.log(newAbetka);Index
    }        
    console.log(newAbetka);
    
    Result2.innerHTML=`${newAbetka.join('')}`;
    
}



/*
упрощение от Сережи.
    for(let i =0; i<str.length; i++){
        let Index = abetka.indexOf(str[i]);
        if( Index !== -1 ) {
            newAbetka.push( abetka[ ( Index + shifr ) % abetka.length ] );
        }
    }        

*/

function dekripto() {
    // Code me to return true or false

   
   let str=secretText2.value.toLowerCase().split('');
   console.log(str);
   let newAbetka=[];
   let abetka='абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
   console.log(abetka);
    let shifr=secretNumber2.value*1;

    
    for(let i =0; i<str.length; i++){
       let Index=abetka.indexOf(str[i]);
        
            if( Index !== -1 ){

                if ( (Index - shifr  % abetka.length)<0 ){
                    newAbetka.push(abetka[ abetka.length+( Index - shifr  % abetka.length) ] );
                }else{
                    newAbetka.push(abetka[  Index - shifr  % abetka.length ] );
                }


                
                 
                

            }
                //console.log(abetka);
                //console.log(newAbetka);Index
    }        
    console.log(newAbetka);
    
    Result.innerHTML=`${newAbetka.join('')}`;
    
}






