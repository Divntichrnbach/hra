function Left() {
    led.unplot(0, 4)
    led.plot(Auto, 4)
}

function Dalsi4() {
    led.unplot(1, 2)
    led.unplot(3, 2)
    led.unplot(2, 4)
    led.plot(1, 1)
    led.plot(2, 1)
    led.plot(3, 1)
    led.plot(3, 3)
    basic.pause(1000)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Hra >= 2 && Playng_game == 0) {
        Hra += -1
    }
    
})
function Dalsi5() {
    
    if (Auto == 2) {
        led.unplot(1, 3)
        led.unplot(3, 3)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(3, 4)
        basic.pause(1000)
        led.unplot(1, 4)
        led.unplot(3, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        basic.pause(1000)
        Playng_game = 0
        joystickbit.Vibration_Motor(10000)
    } else {
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
    }
    
}

function Dalsi() {
    
    if (Auto == 1) {
        led.unplot(2, 1)
        led.unplot(2, 4)
        led.unplot(3, 3)
        led.plot(3, 0)
        led.plot(2, 2)
        led.plot(1, 3)
        basic.pause(1000)
        Dalsi2()
    } else {
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
    }
    
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (Playng_game == 0) {
        if (Hra == 1) {
            Hra = 0
            Playng_game = 1
        } else if (Hra == 2) {
            Hra = 0
            Playng_game = 2
            Y1 = 2
            X1 = 0
            Y2 = 2
            X2 = 4
        } else if (Hra == 3) {
            Hra = 0
            Playng_game = 3
        } else if (Hra == 4) {
            Hra = 0
            Playng_game = 4
        } else if (Hra == 5) {
            Hra = 0
            Playng_game = 5
        }
        
    }
    
})
function Dalsi3() {
    
    if (Auto == 3) {
        led.unplot(1, 1)
        led.unplot(3, 1)
        led.unplot(2, 3)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(2, 4)
        led.plot(3, 2)
        basic.pause(1000)
        Dalsi4()
    } else {
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Hra <= 4 && Playng_game == 0) {
        Hra += 1
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    Playng_game = 0
})
function Dalsi2() {
    
    if (Auto == 2) {
        led.unplot(1, 0)
        led.unplot(3, 0)
        led.unplot(2, 2)
        led.unplot(3, 4)
        led.plot(2, 3)
        led.plot(1, 4)
        led.plot(3, 1)
        basic.pause(1000)
        Dalsi3()
    } else {
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
    }
    
}

function Right() {
    led.unplot(0, 4)
    led.plot(Auto, 4)
}

function Hráči() {
    basic.clearScreen()
    led.plot(X1, Y1)
    led.plot(X2, Y2)
}

function Hráči2() {
    led.plot(X1, Y1)
}

let Ano = 0
let Auto = 0
let Playng_game = 0
let Hra = 0
let X1 = 0
let Y2 = 0
let X2 = 0
let Y1 = 0
Y1 = -1
X2 = -1
Y2 = -1
X1 = -1
Hra = 1
Playng_game = 0
basic.forever(function on_forever() {
    
    if (Playng_game == 2) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.X) >= 900 && (X1 >= 1 && Ano == 1)) {
            X1 += -1
            Ano = 0
            Hráči()
        }
        
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.X) <= 400 && (X1 <= 3 && Ano == 1)) {
            X1 += 1
            Ano = 0
            Hráči()
        }
        
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 900 && (Y1 >= 1 && Ano == 1)) {
            Y1 += -1
            Ano = 0
            Hráči()
        }
        
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 400 && (Y1 <= 3 && Ano == 1)) {
            Y1 += 1
            Ano = 0
            Hráči()
        }
        
        if (!(joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 400 || joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 900 || (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.X) <= 400 || joystickbit.getRockerValue(joystickbit.rockerType.X) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.X) >= 900))) {
            Ano = 1
        }
        
    }
    
})
//  Jěždění autem
//  Sumo PVP
//  Padající kostky
//  Strefování
//  Geometry dash
basic.forever(function on_forever2() {
    if (Playng_game == 0) {
        if (Hra == 1) {
            basic.showLeds(`
                # # . . #
                # . . # #
                # . # . #
                # . . . #
                # . # . #
                `)
        } else if (Hra == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        } else if (Hra == 3) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # . # # #
                # # # # #
                # # # # #
                `)
        } else if (Hra == 4) {
            basic.showLeds(`
                . . . # .
                # . . . .
                . # . . .
                # . # . .
                # # # . .
                `)
        } else if (Hra == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . . # #
                . # . . .
                `)
        }
        
    }
    
})
basic.forever(function on_forever3() {
    
    if (Playng_game == 2) {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            basic.clearScreen()
            X2 += -1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
            basic.clearScreen()
            Y2 += 1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
            basic.clearScreen()
            Y2 += -1
            led.plot(X2, Y2)
            led.plot(X1, Y1)
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            basic.clearScreen()
            X2 += 1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
        }
        
    }
    
})
basic.forever(function on_forever4() {
    
    if (Playng_game == 0 && (!(Hra == 1) && !(Hra == 2) && (!(Hra == 3) && !(Hra == 4) && (!(Hra == 5) && (!(Hra == 6) && !(Hra == 7)))))) {
        Hra = 1
    }
    
})
basic.forever(function on_forever5() {
    
    if (Playng_game == 1) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.X) >= 900 && (Auto >= 2 && Ano == 1)) {
            Auto += -1
            Left()
            Ano = 0
        }
        
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.X) <= 400 && (Auto <= 2 && Ano == 1)) {
            Auto += 1
            Right()
            Ano = 0
        }
        
        if (!(joystickbit.getRockerValue(joystickbit.rockerType.X) >= 0 && joystickbit.getRockerValue(joystickbit.rockerType.X) <= 400 || joystickbit.getRockerValue(joystickbit.rockerType.X) <= 1023 && joystickbit.getRockerValue(joystickbit.rockerType.X) >= 900)) {
            Ano = 1
        }
        
    }
    
})
basic.forever(function on_forever6() {
    
    if (Playng_game == 1) {
        if (Auto == 0) {
            Auto = 2
        }
        
    }
    
    if (Playng_game == 0) {
        if (!(Auto == 0)) {
            Auto = 0
        }
        
    }
    
})
basic.forever(function on_forever7() {
    
    if (Playng_game == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        led.plot(1, 0)
        led.plot(2, 0)
        basic.pause(1000)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.plot(1, 1)
        led.plot(2, 1)
        basic.pause(1000)
        led.unplot(1, 1)
        led.unplot(2, 1)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(1, 2)
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(2, 0)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(2, 1)
        led.plot(3, 1)
        basic.pause(1000)
        led.unplot(1, 3)
        led.unplot(2, 3)
        led.unplot(3, 0)
        led.unplot(2, 1)
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 2)
        led.plot(2, 2)
        led.plot(1, 0)
        basic.pause(1000)
        if (Auto == 3) {
            led.unplot(1, 4)
            led.unplot(2, 4)
            led.unplot(3, 1)
            led.unplot(2, 2)
            led.plot(2, 0)
            led.plot(1, 1)
            led.plot(2, 3)
            led.plot(3, 3)
            basic.pause(1000)
            led.unplot(1, 0)
            led.unplot(2, 0)
            led.unplot(3, 2)
            led.unplot(2, 3)
            led.plot(1, 2)
            led.plot(2, 1)
            led.plot(2, 4)
            led.plot(3, 4)
            led.plot(3, 4)
            led.plot(1, 0)
            basic.pause(1000)
            Dalsi()
        } else {
            joystickbit.Vibration_Motor(1000)
            Playng_game = 0
        }
        
    }
    
})
