let Blue = 0
let Green = 0
let Red = 0
let LED = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    Red = neopixel.rgb(0, 0, 0)
    Green = neopixel.rgb(0, 0, 0)
    Blue = neopixel.rgb(0, 0, 255)
    for (let index = 0; index < 255; index++) {
        Red += 1
        Blue += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        Green += 1
        Red += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        Blue += 1
        Green += -1
        LED.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
})
basic.forever(function () {
    basic.showNumber(maqueen.sensor(PingUnit.Centimeters))
})
