/**
 * Provides a simple 24-position dial.
 */

//% color=190 weight=100 icon="\uf3fd" block="Dial-24"

namespace Dial24 {

    let dial24_list: number[] = []
    let dial24_is = -2

    //% block="Point to %value"
    export function set_dial(value: number) {
        if (dial24_is == -2) {
            dial24_init()
        }
        if (dial24_is > -1) {
            dial_flip(dial24_is)
        }
        dial24_is = dial24_list[(value + 24) % 24]
        dial_flip(dial24_is)
    }

    function dial24_init() {
        dial24_list = [
            2120,
            2130,
            3130,
            3140,
            3141,
            3241,
            3242,
            3243,
            3343,
            3344,
            3334,
            2334,
            2324,
            2314,
            1314,
            1304,
            1303,
            1203,
            1202,
            1201,
            1101,
            1100,
            1110,
            2110
        ]
        dial24_is = -1
        basic.clearScreen()
        led.plot(2, 2)
    }
    function dial_flip(xyxy: number) {
        dial24_flip_xy(Math.idiv(xyxy, 100))
        dial24_flip_xy(xyxy % 100)
    }
    function dial24_flip_xy(xy: number) {
        led.toggle(Math.idiv(xy, 10), xy % 10)
    }

    function dial24_finish() {
        dial24_list = []
        if (dial24_is != -1) {
            basic.clearScreen()
            dial24_is = -1
        }
    }
}

