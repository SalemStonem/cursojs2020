// var pesoLuis, alturaLuis, pesoCarlos, alturaCarlos;
//
// pesoLuis = 72;
// alturaLuis = 1.72;
// pesoCarlos = 89;
// alturaCarlos = 1.75;
//
// var imcLuis = (pesoLuis / alturaLuis) * 2;
// var imcCarlos = (pesoCarlos / alturaCarlos) * 2;
//
// var comparacion = imcCarlos < imcLuis;
//
// console.log(imcLuis);
// console.log(imcCarlos);
// console.log(comparacion);


// const imc = (peso, altura) => {
//   let resultado = (peso / altura) * 2;
//
//   return resultado;
// }
//
// console.log(imc(75, 1.80));


/*=============================================>>>>>
= Segundo Ejercicio =
===============================================>>>>>*/


// let pablo = (14 + 8 + 16) / 3
// let maria = (12 + 18 + 10) / 3

// console.log(pablo);
// console.log(maria);


// if (pablo > maria) {
//   console.log('Pomedio de pablo es superior');
// } else if (maria > pablo) {
//   console.log('Pomedio de Maria es superior');
// } else {
//   console.log('son iguales');
// }
//
// for (var i = 1; i <= 2; i++) {
//   if (i === 1) {
//     if (pablo > 13) {
//       console.log('Pablo paso');
//     } else {
//       console.log('Pablo no paso');
//     }
//   }else {
//     if (maria > 13) {
//       console.log('Maria paso');
//     } else {
//       console.log('Maria no paso');
//     }
//   }
// }


/*=============================================>>>>>
= Anagrama =
===============================================>>>>>*/

/*function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  console.log(lookup);

  for (var i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram('rome', 'amor') */


/*=============================================>>>>>
= Ejercicio 3 =
===============================================>>>>>*/

// function jubilacion(edad, nombre) {
//   let jub = 65
//   let resultado = jub - edad
//   return nombre + ' se jubila en ' + resultado + ' años'
// }
//
// console.log(jubilacion(20, 'Ricardo'));



/*=============================================>>>>>
= Ejercicio 4 =
===============================================>>>>>*/

function score(nombre, positivas, negativas) {
  let resultado = positivas * negativas / 100;
  return resultado


}

console.log(score('Raul', 45, 55));
