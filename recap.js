function countHashtags(caption){
    if (typeof caption!=="string"){
        return "invalid";
    }
    let count=0
    let wordcount=0
    let words=caption.split(" ")
    for ( let word of words){
        if(word.startsWith("#")){
            count++
        }
   
        
    
    }

    return count
    return words
}
console.log(countHashtags("Loving this weather today sunny #vibes #weekend"))