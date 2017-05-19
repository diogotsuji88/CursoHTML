// var childrenList = [
//     1.3,
//     1,
//     1.2,
//     1.6,
//     1.7,
//     1.8
// ]

// var looper = 1.4;
// var rodaGigante = 1.2;
// var barcoViking = 1.5;
// console.group("For");
// validaAlturaFor(looper, childrenList);
// validaAlturaFor(rodaGigante, childrenList);
// validaAlturaFor(barcoViking, childrenList);
// console.groupEnd();
// console.group("ForIn");
// validaAlturaForIn(looper, childrenList);
// validaAlturaForIn(rodaGigante, childrenList);
// validaAlturaForIn(barcoViking, childrenList);
// console.groupEnd();
// console.group("While");
// validaAlturaWhile(looper, childrenList);
// validaAlturaWhile(rodaGigante, childrenList);
// validaAlturaWhile(barcoViking, childrenList);
// console.groupEnd();
/// Acesso liberado : VA


/// Acesso negado : VA


// function validaAlturaFor(alturaValida, varArray){
//    for (iloop=0;iloop < varArray.length; iloop++){
       
//        console.log((alturaValida > varArray[iloop]) ? 'Acesso negado: '+varArray[iloop] : 'Acesso permitido: '+varArray[iloop]);
//        // if(alturaValida > varArray[iloop]) {
//        //     console.log('Acesso negado: '+varArray[iloop])
//        // } else {
//        //     console.log('Acesso permitido: '+varArray[iloop])
//        // }
//    }

// }

// function validaAlturaForIn(alturaValida, varArray){
//    for (varItem in varArray){
//       console.log((alturaValida > varArray[iloop]) ? 'Acesso negado: '+varArray[iloop] : 'Acesso permitido: '+varArray[iloop]);
//        // if(alturaValida > varArray[varItem]) {
//        //     console.log('Acesso negado: '+varArray[varItem])
//        // } else {
//        //     console.log('Acesso permitido: '+varArray[varItem])
//        // }
//    }

// }

// function validaAlturaWhile(alturaValida, varArray){
//    var iloop = 0;
//    while (iloop<varArray.length){
//        console.log((alturaValida > varArray[iloop]) ? 'Acesso negado: '+varArray[iloop] : 'Acesso permitido: '+varArray[iloop]);
//        // if(alturaValida > varArray[iloop]) {
//        //     console.log('Acesso negado: '+varArray[iloop])
//        // } else {
//        //     console.log('Acesso permitido: '+varArray[iloop])
//        // }
//        iloop++;
//    }
// }

function Child(name, height){
   this.name = name
   this.height = height;

   this.check = function(limitador){
      //comparar a minha altura com o limitador e retorne se posso entrar true se nao false
      return this.height >= limitador;
   }
}

var looper = 1.4;
var childrenList = [
   new Child("João", 1.2),
   new Child("Maria", 1.5),
   new Child("Pedro", 1.9)
]

function validaAlturaFor(alturaValida, varArray){
   for (iloop=0;iloop < varArray.length; iloop++){
       var a = varArray[iloop];
       console.log(a.check(alturaValida) ? 'Acesso negado: '+varArray[iloop].name : 'Acesso permitido: '+varArray[iloop].name);

   }

}

validaAlturaFor(looper,childrenList);