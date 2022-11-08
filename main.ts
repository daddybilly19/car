radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        cuteBot.forward()
        basic.pause(10)
        cuteBot.stopcar()
    }
    if (receivedNumber == 1) {
        cuteBot.backforward()
        basic.pause(10)
        cuteBot.stopcar()
    }
    if (receivedNumber == 2) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 148, 201, 61)
        cuteBot.turnleft()
        basic.pause(10)
        cuteBot.stopcar()
        cuteBot.closeheadlights()
    }
    if (receivedNumber == 3) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 148, 201, 61)
        cuteBot.turnright()
        basic.pause(10)
        cuteBot.stopcar()
        cuteBot.closeheadlights()
    }
    if (receivedNumber == 4) {
        cuteBot.stopcar()
    }
})
let sonar = 0
radio.setGroup(69)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        cuteBot.stopcar()
        radio.sendNumber(5)
    }
})
