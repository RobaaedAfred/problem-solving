//Problem-01: Battery Level Status
function getBatteryStatus(percentage: number): string {

    return percentage<0? "Invalid Percentage": percentage <=20 ? "Low" : percentage <= 50? "Medium" : percentage <=90 ?"High": percentage <= 100 ?"Full": "Invalid Percentage";
    
}


//Problem-02: Table Booking Confirmation
interface Booking {
    name:string
    guests:number
    time:string
}

function formatBookingConfirmation(booking: Booking):  string{

    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
    
}


//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses: number[]): number {

        return expenses.length===0 ? 0 : expenses.reduce((sum:number , expense:number)=> sum + expense,0);
}


//Problem-04: Traffic Light Action
type Light = "red"|"yellow"|"green"; 

function getTrafficAction(light: Light): string {

    return light==="red"?"Stop" : light==="yellow" ? "Slow Down" : light==="green"? "Go" : "Invalid Sign";

}


//Problem-05: Quiz Score Summary
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

