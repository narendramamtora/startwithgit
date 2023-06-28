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
// var items=document.getElementsByClassName('list-group-item');
// //items.style.fontWeight="bold"
// console.log(items)
// console.log(items[1])
// items[1].textContent='Hello 2 '
// items[2].style.backgroundColor='green'
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }


//GETELEMENTBYTAGNAME
// var ite=document.getElementsByTagName('li');
// console.log(ite)
// console.log(ite[1])
// ite[1].textContent='Hello 2 '
// ite[2].style.backgroundColor='green'
// for(var i=0;i<ite.length;i++){
//     ite[i].style.fontWeight="bold"
// }


// QuerySelector
// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.background="green"

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility="hidden"


// QuerySelectorALL
// var secondSItem=document.querySelectorAll('.list-group-item')
// secondSItem[1].style.color="green"

// var odd = document.querySelectorAll('li:nth-child(odd');
// for(var i=0;i<odd.length;i++){
// odd[i].style.background="green"
// }


// TRAVERING THE DOM
// var itemList= document.querySelector('#items');
//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.background='grey';
// console.log(itemList.parentElement.parentElement.parentElement)

//childrennodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background='yellow';

//firstChild
// console.log(itemList.firstChild);
 
//firstelementChild
// console.log(itemList.firstElementChild);                             
// itemList.firstElementChild.textContent='Hello 1'

//lastChild
// console.log(itemList.lastChild);
 
//lastelementChild
// console.log(itemList.lastElementChild);                             
// itemList.lastElementChild.textContent='Hello 4'

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

 //createElement
 //Create div
//  var divv=document.createElement('div');
// var divvv=document.createElement('div');
 //add class
//  divv.className='hello'
//  divvv.className='hi'
 // add id
//  divv.id='hello1'
//  divvv.id='hi'
 //add attr
//  divv.setAttribute('title','hello Div');
//  divvv.setAttribute('title','hi Div');
 //createtextnode
//  var divvText=document.createTextNode('HEllo word')
//  var divvvText=document.createTextNode('HEllo')

 //Add tect to Div
//  divv.appendChild(divvText)
//  divvv.appendChild(divvvText)


// var conta=document.querySelector('header .container');
// var h1=document.querySelector('header h1')

// var con=document.getElementById('items')


// var list=document.querySelector('h2  .list');
// var h2=document.querySelector('ul li')
 
// console.log(divvv)
// console.log(divv)

// conta.insertBefore(divv, h1);
// con.insertBefore(divvv, con.childNodes[0]);


//delete and edit functionality
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

   // Create del button element
   var edit = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Add classes to edit button
  edit.className = 'btn btn-blue btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append text node for edit
  edit.appendChild(document.createTextNode('e'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append button to li for edit
  li.appendChild(edit);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}