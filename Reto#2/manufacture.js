const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  const materiales = materials.split("");
  const newArr = [];

  for (let x of gifts) {
    const juguete = x.split("");
    if (juguete.every((e) => materiales.includes(e))) {
      newArr.push(x);
    }
  }

  return newArr;
}


console.log(manufacture(gifts, materials));