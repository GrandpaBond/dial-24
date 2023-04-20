/**
 * Provides a simple 24-position dial.
 */

//% color=190 weight=100 icon="\uf3fd" block="Dial-24"

namespace Dial24 {

    let dial24_list: number[] = []
    let dial24_pos = -2

    //% block="Point to %position"
    //% position.min=0 position.max=23
    export function point_to(position: number) {
        // if dial24_pos is -2, initialise first 
        if (dial24_pos == -2) {
            dial24_init()
        }
        if (dial24_pos > -1) {
            dial_flip(dial24_pos)// unplot current position
        }
        dial24_pos = (position + 24) % 24
        dial_flip(dial24_pos) // plot new position
    }

    //% block="Turn up to %position"
    //% position.min=0 position.max=23
    export function turn_up(position: number) {
        rotate(position, 1)
    }

    //% block="Turn down to %position"
    //% position.min=0 position.max=23
    export function turn_down(position: number) {
        rotate(position, -1)
    }

    function rotate(new_pos: number, by: number) {
        // if dial24_pos is -2, initialise first 
        if (dial24_pos == -2) {
            dial24_init()
        }
        // otherwise repeat until dial24_pos = new_pos % 24:
        while (dial24_pos != (new_pos + 24) % 24) {
            if (dial24_pos > -1) {
                dial_flip(dial24_pos)// unplot current position
            }
            dial24_pos = (dial24_pos + by + 24) % 24
            dial_flip(dial24_pos) // plot new position
            basic.pause(25)
        }
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
        dial24_pos = -1
        basic.clearScreen()
        led.plot(2, 2)
    }

    function dial_flip(pos: number) {
        let xyxy = dial24_list[pos]
        dial24_flip_xy(Math.idiv(xyxy, 100))
        dial24_flip_xy(xyxy % 100)
    }
    function dial24_flip_xy(xy: number) {
        led.toggle(Math.idiv(xy, 10), xy % 10)
    }
}

