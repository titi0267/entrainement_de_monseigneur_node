/*let A = 13;
if (A >= 18){
    console.log("Majeur");
}
else if(A <=17){
    console.log("Mineur")
}

let color = "bizzare";
if(color === "blue"){
    console.log("La couleur est bleue")
}
else if(color === "rouge"){
    console.log("La couleur est rouge")
}
else if(color === "vert"){
    console.log("La couleur est vert")
}
else if(color === "jaune"){
    console.log("La couleur est jaune")
}
else{
    console.log(`La couleur était : ${color}`)
}
/*let A = 20;
for (let B = 0; B < A; B++){
    console.log(B);
}
let color = ['bleu', 'jaune', 'vert', 'rouge'];
for(let index = 0; index <= 3; index++){
    console.log(`La couleur est : ${color}`)}
switch (color){
    case 0 :
        console.log(`La couleur affiché a l'index : ${index} est`);
        break;
    case 1 :
        console.log(`La couleur affiché a l'index : ${index} est`);
        break;
    case 2 :
        console.log(`La couleur affiché a l'index : ${index} est`);
        break;
    case 3 :
        console.log(`La couleur affiché a l'index : ${index} est`);
        break;
     default:
        console.log("raté");
}


function add1(val1, val2){
    return(val1 + val2);
}
function add2(val1, val2){
    let res =val1 + val2;
    return(res);
}
console.log(add1(3, 1));

console.log(add2(1, 1));
const maVariable = function(param1, param2) {
    return (param1 + param2);
}
console.log(maVariable(1, 1)); console.log(maVariable(2, 2));
*/
const Player = {
    prenom: "Jean",
    nom: "point",
    sexe: "Homme",
    tenue: "Costar",
    sac_a_dos: ["une brosse", "de l'eau", "et des chips"],


    descritption(){
      let str = "";
      this.sac_a_dos.forEach( element => {
        str += element + '\n'
      });

        return(`Je m'appel ${this.prenom} ${this.nom}. Je suis en ${this.tenue} ! Dans mon sac je possède : \n${str} `)
    }
};
console.log(Player.descritption());
