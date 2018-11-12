/* Se que esta no es la mejor manera de resolver este problema que me habéis planteado. 
Aún así no lo quería dejar en blanco y al menos quería resolverlo de una forma aunque no fuese la más óptima */

class Product {
    constructor(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
} 

let cerveza = new Product('CA1','Cerveza Artesana', 5.00);

let nocilla = new Product('NO1','Nocilla', 2.15);

let cafe = new Product('CF1','Cafe',7.65);

let pricingRules = (cart) => {
    let discount = 0;
    let beerCount = 0;
    let nocillaCount = 0;
    for (i = 0; i < cart.length; i++) {
      if (cart[i] === 'NO1') {
        nocillaCount++;
        }        
    }        
    if (nocillaCount > 1) {
        discount -= nocilla.price;     
    }
    for (i = 0; i < cart.length; i++) {
        if (cart[i] === 'CA1') {
            beerCount++;
        }        
    }    
    if (beerCount >= 3) {
      discount -= (1*beerCount);
    }
    return discount;
}

let total = (carroCompra) => {
  precio = 0;
  discount = pricingRules(carroCompra);
  for (i = 0; i < carroCompra.length; i++) {
    if (carroCompra[i] === 'NO1'){
      precio += 2.15;
    } else if (carroCompra[i] === 'CA1'){
      precio += 5;
    } else if (carroCompra[i] === 'CF1'){
        precio += 7.65;       
    }     
  }
  return (precio + discount).toFixed(2);
}

var carroCompra = ['NO1', 'CA1', 'NO1', 'NO1', 'CF1'];
console.log(total(carroCompra));
var carroCompra = ['NO1', 'NO1'];
console.log(total(carroCompra));
var carroCompra = ['CA1', 'CA1', 'NO1', 'CA1'];
console.log(total(carroCompra));
