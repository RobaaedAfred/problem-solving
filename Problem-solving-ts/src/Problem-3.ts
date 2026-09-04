function calculateWeeklyTotal(expenses: number[]): number {

        return expenses.length===0 ? 0 : expenses.reduce((sum:number , expense:number)=> sum + expense,0);
}

console.log(calculateWeeklyTotal([]));