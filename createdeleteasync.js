const posts = [{title: 'POST1'},{title: 'POST2'}];

function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}
function deletePost(){

  return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve();
        }, 1000)
    })
}

async function init(){
    await create3rdPost().then(deletePost)
    await create4thPost()
    printPost();
}
init()