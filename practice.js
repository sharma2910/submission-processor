function *test(){
    yield {"user": "me", done: true}
    yield {"user": "you", done: true}    
}
console.log(JSON.stringify(test()))