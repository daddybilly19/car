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
        cuteBot.closeheadlights()
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 148, 201, 61)
        cuteBot.turnleft()
        basic.pause(10)
        cuteBot.stopcar()
        cuteBot.closeheadlights()
    }
    if (receivedNumber == 3) {
        cuteBot.closeheadlights()
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
radio.setGroup(69)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 255)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 255)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
