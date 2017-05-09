//Se dan dos arreglos, debes recorrer ambas, y retornar
//solo los elementos que existan en ambas
//ej l1=[1,2,3],l2=[2,3,4]
//out: [2,3]

//IMplementacion de la forma imperativa

function intersection(l1,l2){
    var l3=[];
    for(var i= 0; i<l1.length; i++){
        for(var j= 0; j<l2.length; j++){
            if(l1[i]==l2[j]){
                l3.push(l1[i]);
            }
        }
        return l3;
    }
}

//Forma declarativa con filter que crea un nuevo array con todos los elementos que cumplan la
//condicion implementada por la función dada y  es exactamente lo que estamos buscando

function intersectionSet2(l1,l2){
    return l1.filter(function(n){
        return l2.indexOf(n)!== -1
    });
};
console.log(intersectionSet2(1,2))

//crear un arreglo de objetos sobre productos:
var productos=[{
    nombre: 'pijama',
    tipo: 'ropa'
},
{
    nombre:'nevera',
    tipo:'electrodómestico'
},
{
    nombre:'asus',
    tipo: 'computador'
},
{
    nombre: 'macbook',
    tipo: 'computador'
},
{
    nombre: 'pijama',
    tipo: 'ropa'
},
{
    nombre:'toshiba',
    tipo: 'computador'
}];

//Obtener la lista de arreglo los que cumplen
//con la caracteristica de computadores, de forma 
//imperativa:

var computadores=[];//arreglo vacio donde alojar los computadores
for(var i=0; i<productos.length; i++){ //iterar sobre los productos
    if(productos[i].tipo ==='computador'){//consultar la propiedad tipo de cada producto
        computadores.push(productos[i]);//si se cumple se pone ese producto en el arreglo computadores
    }
}

//lo mismo pero con el metodo filter

var computadores=productos.filter(function(producto){
    return producto.tipo==='computador';
});
//filter va a iterar sobre cada elemento del arreglo y por cada
//elemento lo va a pasar como parametro a la funcion callback
//y cuando lo hace, filter espera que la funcion
//callback retorne falso o verdadero para saber cuando
//o no el elemento va en el nuevo arreglo.
console.log(computadores);