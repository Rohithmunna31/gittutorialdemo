var item = document.getElementbyClassName('list-group-name');
item[2].style.backgroundColor = 'green';
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight = 'bold';
}        

var li = document.getElementByTagName('li');
li[2].style.backgroundColor = 'black';

li[4].style.fontcolor = 'red';
// if we get it by tag name even if we dont have class name we can edit it 
// using tag name 



// now changing using query selector
var quer = document.querySelector('.list-group-item');

quer.style.backgroundColor = 'green';

var secondchild = document.querySelector('.list-group-item:nth-child(2)');

secondchild.style.backgroundColor = 'green';

var thirdchild = document.querySelector('.list.group.item:nth-child(3)');

thirdchild.style.display = 'none';

var allitem = document.querySelectorAll('.list-group-item');

allitem[1].style.color = 'green';

var odditems = document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odditems.length;i++){
    odditems[i].style.backgroundColor = 'green';
}



// parent elements and child elements 

var itemparentchild = document.querySelector('#item');

console.log(itemparentchild.parentNode);

itemparentchild.style.backgroundColor = 'yellow';

console.log(itemparentchild.parentNode.parentNode.parentNode);




console.log(itemparentchild.parentElement);
itemparentchild.style.backgroundColor = 'red';
console.log(itemparentchild.parentElement.parentElement.parentElement);


// child emelents

console.log(itemparentchild.childNodes);
itemparentchild.lastChild.style.backgroundColor = 'black';
console.log(itemparentchild.nextElementSibling);

// previous elements 

console.log(itemparentchild.previousElementSibling);
console.log(itemparentchild.previousSibling);

itemparentchild.previousSibling.style.color = 'red';


// create element with javascript 

let newDiv = document.createElement('Div');

newDiv.className('new class');
newDiv.id('new id');

newDiv.setAttribute('title','Hello div');

let newDivtext = document.createTextNode('Hello world');

newDiv.appendChild(newDivtext);


let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';

