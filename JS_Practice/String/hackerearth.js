function likeDislike(a, b){
    let count = 0;
    for(let i=0, j=0; i<a.toString().length, j<b.toString().length; i++, j++){
        if(a[i]===b[j]){
            count++;
        }
    }
    console.log(count)
    return count;
}

likeDislike(010101,01101)