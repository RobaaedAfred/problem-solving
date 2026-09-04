function getBatteryStatus(percentage: number): string {

    return percentage<0? "Invalid Percentage": percentage <=20 ? "Low" : percentage <= 50? "Medium" : percentage <=90 ?"High": percentage <= 100 ?"Full": "Invalid Percentage";
    
}

console.log(getBatteryStatus(-100));