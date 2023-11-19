var item = getElementbyClassName('list-group-name');
item[2].style.backgroundColor = 'green';
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight = 'bold';
}        

var li = getElementByTagName('li');
li[2].style.backgroundColor = 'black';

li[4].style.fontcolor = 'red';
// if we get it by tag name even if we dont have class name we can edit it 
// using tag name 
