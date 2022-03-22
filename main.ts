input.onButtonPressed(Button.A, function () {
    users_number += 1
    basic.showNumber(users_number)
})
input.onGesture(Gesture.TiltLeft, function () {
    users_second_number += 1
    basic.showNumber(users_second_number)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(users_second_number)
    basic.showNumber(users_number)
    music.playMelody("E E F D G B C5 - ", 120)
})
input.onButtonPressed(Button.B, function () {
    users_number += -1
    basic.showNumber(users_number)
})
input.onGesture(Gesture.Shake, function () {
    users_second_number = 0
    basic.showNumber(users_second_number)
})
input.onGesture(Gesture.TiltRight, function () {
    users_second_number += -1
    basic.showNumber(users_second_number)
})
let users_second_number = 0
let users_number = 0
users_number = 0
basic.showNumber(users_number)
basic.forever(function () {
	
})
