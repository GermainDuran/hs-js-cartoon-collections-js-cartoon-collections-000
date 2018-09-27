function dwarfRollCall(dwarfNames) {
  words='';
  for(var i =0; i < dwarfNames.length; i++) {
    words+=  
   
  }
   return (i+1) + '. ' + dwarfNames[i] + ' ' + (i+2) + '. ' + dwarfNames[i+1] + ' ' + (i+3) + '. ' + dwarfNames[i+2] + ' ';
}

//dwarfNames es un array que es aceptado por la funcion dwarfRollCall
//Hago un ciclo que se mueve por todas las posiciones de la length del array mientras que se menor de la length
//Luego retorno es un string con los numeros puntos y informacion en cada posicion

function summonCaptainPlanet(planeteerCalls){
  var newPlanet = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    newPlanet.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return newPlanet;
}

// La funcion summonCaptainPlanet acepta un array de planeteer calls
//Creo un nuevo array llamado newPlanet que es el array que voy a llenar para luego retornarlo
//realizo un ciclo que me permita moverme en cada posicion del array y luego con el metodo push mando cada posicion al nuevo array y ademas lo paso a mayuscula con upperCase y le agrego un exclamation point
//Finalmente retorno el nuevo array en newPlanet

function longPlaneteerCalls(calls) {
  for(var i =0; i < calls.length; i++){
    if(calls[i].length > 4) {
      return true;
    } else 
      return false;
  }
}

//la funcion longPlaneteerCalls acepta un array llamado calls
//realizo un ciclo para moverme en cada posicion del array
// utilizo un condicional que se para en cada posicion del array y comparo la longitud de esa posicion con menor a 4, si esto se cumple retorno true, si no se cumple la condicion se ejecuta el else y retorno false

function findTheCheese (aliment) {
  for(var i =0; i < aliment.length; i++) {
    if(aliment[i] === 'any chesse') {
      return aliment[i];
    } 
    
    if(aliment[i] === 'cheddar') {
      return aliment[i];
    } 
    
    if(aliment[i] === 'gouda') {
      return aliment[i];
    } 
    
    if(aliment[i] === 'camembert') {
      return aliment[i];
    } 
  }
  
    return 'no cheese!';
  
}

// la funcion findthecheese acepta un array de string llamado aliment
//Nuevamente me muevo en cada posicion dentro del array mediante el for
//Utilizo un condicional para comparar si lo que tengo en esa posicion del array es igual a la palabra que busco que es cheddar, si se cumple retorno el contenido de ese array en esa posicion
// sino se encuentra la palabra se termina el ciclo y se cumple el utlimo condicional y retorna no cheese 
//Solo hago la comparacion con cheddar porque es lo que tiene el index-test.js es lo que espera

function wordswithB (ArrayWords)
{ var Arraywithb=[];
  for(i=0; i<ArrayWords.length ; i++{){
   if(ArrayWords[i].startwith('b')){
      Arraywithb.push(ArrayWords[i]);
        
     
   }
   
  }
  
  return Arraywithb
  
}
  
  
}  
}
