interface Mark{
    total:number
    average:number
}

function getQuizSummary(scores: number[]): Mark  {
     if (scores.length===0){
        return{
            total:0,
            average:0
        }
     }
    let total=scores.reduce((sum, scores)=> sum+scores,0);
    let average= total/scores.length;

    return{
        total,
        average
    }

}
console.log(getQuizSummary([0,0]))