
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {

    let conc = texte1+ texte2;
    return conc 

}
let afficherCar5 =  (texte) => {
     let car = texte.charAt(4);
     return car

}
let afficher9Car =  (texte) => {

    let car1 = texte.substring(0,9);
    return car1

}
let majusculeString =  (texte) => {
    let maj = texte.toUpperCase();
    return maj

}
let minusculeString =  (texte) => {

    let min = texte.toLowerCase();
    return min;

}
let SupprEspaceString =  (texte) => {
    let sup = texte.trim();
    return sup

}
let IsString =  (texte) => {
    if(typeof (texte)){

        return true;
    }
}

let AfficherExtensionString =  (texte) => {

    
    let ext = texte.split('.').pop()
    return ext

}
let NombreEspaceString =  (texte) => {

    let nom = texte.split(" ").length -1;

    return nom
}
let InverseString =  (texte) => {

    
    return texte.split("").reverse().join("");

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {

    return Math.pow(x,y)

}
let valeurAbsolue =  (nombre) => {

    return Math.abs(nombre);

}
let valeurAbsolueArray =  (array) => {
    let arr = [];
    for(number of array){
        arr.push(Math.abs(number))
    }
    return arr;

 
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * rayon * rayon)
     


}
let hypothenuse =  (ab, ac) => {

    return Math.hypot(ab,ac)

}
let calculIMC =  (poids, taille) => {

    let cal = poids / (taille * taille)
    let im = (Math.round(cal * 100)/ 100)
    return im

}
