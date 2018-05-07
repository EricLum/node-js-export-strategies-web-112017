// const Lamp = require('./lamp');
// const myLamp = new Lamp(10);
// console.log(myLamp.currentBrightness);
//
// myLamp.turnOn();
//
// console.log(myLamp.currentBrightness);

const Decor = require('./lamp');
const powerEvents = require('./power');
const myLamp = new Decor(10);
const powerLimits = require('./power_limits');
console.log(powerLimits.type, powerLimits.maxBrightness)
myLamp.turnOn();

console.log(`myLamp's currentBrightness: ${myLamp.currentBrightness}`);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

myLamp.turnOn()

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
