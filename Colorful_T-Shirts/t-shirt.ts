/* Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object 
should have two properties: 
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function 
accepts a new color string as an argument. When called, it should: 
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g., 
increase by 10% for red, decrease by 5% for blue)*/

type Product = {
    name:string,
    price:number,
    color:string,
    inventory:{
        stock:number,
        colorOptions?:string[],
        changeColor:(newColor:string)=>void
    }
}
const product:Product={
    name:"Adidas",
    price:5000,
    color:"white",
    inventory:{
        stock:24,
        colorOptions:["red","green","yellow","black"],
        changeColor:(newColor)=>{
        
            product.color = newColor
            // Adjust the price based on the new color
            if (newColor == 'red') {
                // increase price 10% if red is selected
                product.price +=  product.price * 0.1
            }
            else if (newColor == 'black') {
                // increases price 15% if black is selected
                product.price +=  product.price * 0.15
            }
            else if (newColor == 'green') {
                // decreases price 4% if green is selected
                product.price -=  product.price * 0.04
            }
            else if (newColor == 'yellow') {
                // decreases price 20% if yellow is selected
                product.price -=  product.price * 0.2
            }
            else{
                // if color is not in the list
                console.log(`${newColor} color is not available`);
            }
            console.log(`Your Product Price is Changed To ${product.price}`);
        }
    }
}
console.log(product.inventory.colorOptions);
// changing color to red
product.inventory.changeColor('red');



