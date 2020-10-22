/**
 * Create a car class
 * Properties are:
 * mpg - number to represent the mpg
 * tankSize - how much gas it holds
 * currentFule - the number of gallons in the gas tank
 * odometer - ttoal miles driven by car
 * id - the id of the car
 * 
 * constructor
 * pass in id, mpg, and tankSize
 * currentFuel should be set to zero
 * 
 * Methods
 * addFuel(gallons) - how much fuel to add in gallons, update currentFuel 
 * should not allow gas to be taken out and not overfill
 * 
 * have a distanceToEmpty()
 * return the number of miles the car can drive, based on current fuel and mpg
 * 
 * drive(miles) - the numbr of miles the car drives
 * should reduce the currentFuel
 * should update odometer
 */

 const assert = require('assert')

class Car {

    constructor(id, mpg, tankSize) {
        this.id = id
        this.mpg = mpg
        this.tankSize = tankSize
        this.currentFuel = 0
        this.odometer = 0
    }

    addFuel(gallons) {
        let emptySpace = this.tankSize - this.currentFuel

        if(gallons < 0) {
            return
        }

        if(gallons >= emptySpace) {
            this.currentFuel = this.tankSize
        } else {
            this.currentFuel = this.currentFuel + gallons
        }
    }

    distanceToEmpty() {
        return this.mpg * this.currentFuel
    }

    drive(miles) {
        if(miles < 0) {
            return
        }

        if(this.currentFuel == 0) {
            return
        }

        let maxDistance = this.distanceToEmpty()

        if(miles > maxDistance) {
            this.odometer = this.odometer + maxDistance
            this.currentFuel = this.currentFuel - (maxDistance / this.mpg)
        } else {
            this.odometer = this.odometer + miles
            this.currentFuel = this.currentFuel - (miles / this.mpg)
        }
    }
}

if (typeof describe == 'function') {
    describe('constructor test', function(){
        it('Should handle simple constructor', function(){
            let mazda = new Car('1234', 31, 13)
            assert.ok(mazda.id == '1234')
            assert.ok(mazda.mpg == 31)
            assert.ok(mazda.tankSize == 13)
            assert.ok(mazda.currentFuel == 0)
            assert.ok(mazda.odometer == 0)
        })
    })
    describe('addFuel() test', function(){
        it('should add fuel to currentFuel', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(1)
            assert.ok(mazda.currentFuel == 1)
            mazda.addFuel(4)
            assert.ok(mazda.currentFuel == 5)
        })
        it('allow incrimental fuel to capacity', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(5)
            mazda.addFuel(5)
            mazda.addFuel(1.5)
            mazda.addFuel(1.5)
            assert.ok(mazda.currentFuel == 13)
        })
        it('should not overfill', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(15)
            assert.ok(mazda.currentFuel == 13)
        })
        it('should not overfill 2', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(10)
            mazda.addFuel(4)
            assert.ok(mazda.currentFuel == 13)
        })
        it('should not allow negative fuel', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(10)
            mazda.addFuel(-3)
            assert.ok(mazda.currentFuel == 10)
        })
    })
    describe('distance to empty', function(){
        it('When the car has some gass', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(1)
            assert.ok(mazda.distanceToEmpty() == 31)
        })
        it('When the car is empty of gass', function(){
            let mazda = new Car('1234', 31, 13)
            assert.ok(mazda.distanceToEmpty() == 0)
        })
        it('When the car is full of gass', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(13)
            assert.ok(mazda.distanceToEmpty() == (13*31))
        })
        it('When the car has fractional gallons of gass', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(1.5)
            assert.ok(mazda.distanceToEmpty() == 46.5)
        })
    })
    describe('Driving the car', function(){
        it('No negative distance', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(10)
            mazda.drive(-1)
            assert.ok(mazda.odometer == 0)
        })
        it('Not be able to drive with no gas', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.drive(13)
            assert.ok(mazda.odometer == 0)
        })
        it('Not be able to drive on fumes', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(10)
            mazda.drive(1000)
            assert.ok(mazda.odometer == 310)
            assert.ok(mazda.currentFuel == 0)
        })
        it('Normal driving', function(){
            let mazda = new Car('1234', 31, 13)
            mazda.addFuel(10)
            mazda.drive(31)
            mazda.drive(62)
            mazda.drive(15.5)
            assert.ok(mazda.odometer == 108.5)
            assert.ok(mazda.currentFuel == 6.5)
        })
    })
}