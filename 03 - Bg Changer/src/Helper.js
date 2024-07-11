function ranColor(num){
    let arr = new Array(num)
    for(let i=0;i<num;i++){
        arr[i] = Math.floor(Math.random()*255)
    }
    return arr;
}

export default ranColor