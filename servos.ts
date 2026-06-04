//% color=#ff9900 icon="\uf085" block="MicroBot"
namespace microbot {

    //% block="rusz prawą ręką na kąt %angle"
    //% angle.min=0 angle.max=180
    export function prawaReka(angle: number) {
        pins.servoWritePin(AnalogPin.P1, angle)
    }

    //% block="rusz lewą ręką na kąt %angle"
    //% angle.min=0 angle.max=180
    export function lewaReka(angle: number) {
        pins.servoWritePin(AnalogPin.P2, angle)
    }

    //% block="rusz głową na kąt %angle"
    //% angle.min=0 angle.max=180
    export function glowa(angle: number) {
        pins.servoWritePin(AnalogPin.P3, angle)
    }
}
