// kinds of variable
var laptopColor = 'Black';
var laptopPrice = 40000;
var isNew = true;

// Array 
var usableThings = ['laptop', 'keyboard', 'mouse', 'medicine', 'Book', 'Box', 'Table'];
// Table er position dekhabe.
usableThings.indexOf('Table');  

// 4 number position e ke ache take dekhabeA
usableThings[3];

// New array add korte chaile 
usableThings.push('new array');

// Remove from array 
usableThings.pop();

// To add array at first 
usableThings.shift('Perfume');

// To remove array at first 
usableThings.unshift();
 
// conditionals
if(usableThings.length >= 90){
    console.log('I have many things in my living room & its so furnished.')
}
else if(usableThings.length == 6){
    console.log('I have four Things in this room')
}

else{
    console.log('Very few things in my living room.')
}
