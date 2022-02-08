/* 

Base Fare + ((Cost per minute x time of the ride) + (cost per mile x ride distance) x surge boost multiplier) + booking fee = Passengers Ride Fare

*/



class Uber_Price {

    constructor(baseFare, costPerMinute, timeoftheRide, costPerMile, rideDistance, surgeBoostMultiplier, bookingFee) {

        this.baseFare = baseFare,
        this.costPerMinute = costPerMinute,
        this.timeoftheRide = timeoftheRide,
        this.costPerMile = costPerMile,
        this.rideDistance = rideDistance,
        this.surgeBoostMultiplier = surgeBoostMultiplier,
        this.bookingFee = bookingFee
       
    }
    
    getTotal() {
        return this.baseFare + ((this.costPerMinute * this.timeoftheRide) + (this.costPerMile * this.rideDistance) * this.surgeBoostMultiplier) + this.bookingFee;
    }

};

const totalCharge = new Uber_Price(2, 15, 3, 3, 10, 2, 5);
console.log("Total bill for the ride- " + totalCharge.getTotal());





