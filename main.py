Blue = 0
Green = 0
Red = 0
LED = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def on_forever():
    global Red, Green, Blue
    Red = neopixel.rgb(0, 0, 0)
    Green = neopixel.rgb(0, 0, 0)
    Blue = neopixel.rgb(0, 0, 255)
    for index in range(255):
        Red += 1
        Blue += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    for index2 in range(255):
        Green += 1
        Red += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    for index3 in range(255):
        Blue += 1
        Green += -1
        LED.show_color(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
        basic.show_number(maqueen.sensor(PingUnit.CENTIMETERS))
basic.forever(on_forever)
