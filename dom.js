//manipulating title
// console.log(document.URL);
// console.log(document.domain);
// console.log(document)
// document.title=123

// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent="Helloji"

//GETELEMENTBYID

// var ht=document.getElementById('header-title');
//console.log(ht);
// ht.style.border='solid 3px #000';

// var ai=document.getElementsByClassName('title');
// ai[0].style.color="green"
//ai[0].style.fontWeight="bold"
// console.log(ai[0])


//GETELEMENTBYCLASSNAME
var items=document.getElementsByClassName('list-group-item');
//items.style.fontWeight="bold"
console.log(items)
console.log(items[1])
items[1].textContent='Hello 2 '
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}