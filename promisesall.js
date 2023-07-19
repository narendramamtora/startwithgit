const post=[];

function updateLastUserActivityTime () {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(new Date())
            resolve();
        }, 3000)
    }) 
}
function createPost(item) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(item);
            resolve();
        }, 500)
    }) 
}
Promise.all([createPost('new post of narendra'),updateLastUserActivityTime ()])