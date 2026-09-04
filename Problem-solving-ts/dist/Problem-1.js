"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    return percentage <= 20 ? "Low" : percentage <= 50 ? "Medium" : percentage <= 90 ? "High" : percentage <= 100 ? "Full" : "Invalid Percentage";
}
console.log(getBatteryStatus(100));
//# sourceMappingURL=Problem-1.js.map