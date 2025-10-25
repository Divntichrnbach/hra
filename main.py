def Left():
    led.unplot(0, 4)
    led.plot(Auto, 4)
def Dalsi4():
    led.unplot(1, 2)
    led.unplot(3, 2)
    led.unplot(2, 4)
    led.plot(1, 1)
    led.plot(2, 1)
    led.plot(3, 1)y
    led.plot(3, 3)
    basic.pause(1000)

def on_button_pressed_a():
    global Hra
    if Hra >= 2 and Playng_game == 0:
        Hra += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def Dalsi5():
    global Playng_game
    if Auto == 2:
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
    else:
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
def Dalsi():
    global Playng_game
    if Auto == 1:
        led.unplot(2, 1)
        led.unplot(2, 4)
        led.unplot(3, 3)
        led.plot(3, 0)
        led.plot(2, 2)
        led.plot(1, 3)
        basic.pause(1000)
        Dalsi2()
    else:
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0

def on_button_pressed_ab():
    global Hra, Playng_game, Y1, X1, Y2, X2
    if Playng_game == 0:
        if Hra == 1:
            Hra = 0
            Playng_game = 1
        elif Hra == 2:
            Hra = 0
            Playng_game = 2
            Y1 = 2
            X1 = 0
            Y2 = 2
            X2 = 4
        elif Hra == 3:
            Hra = 0
            Playng_game = 3
        elif Hra == 4:
            Hra = 0
            Playng_game = 4
        elif Hra == 5:
            Hra = 0
            Playng_game = 5
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Dalsi3():
    global Playng_game
    if Auto == 3:
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
    else:
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0

def on_button_pressed_b():
    global Hra
    if Hra <= 4 and Playng_game == 0:
        Hra += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global Playng_game
    Playng_game = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def Dalsi2():
    global Playng_game
    if Auto == 2:
        led.unplot(1, 0)
        led.unplot(3, 0)
        led.unplot(2, 2)
        led.unplot(3, 4)
        led.plot(2, 3)
        led.plot(1, 4)
        led.plot(3, 1)
        basic.pause(1000)
        Dalsi3()
    else:
        joystickbit.Vibration_Motor(1000)
        Playng_game = 0
def Right():
    led.unplot(0, 4)
    led.plot(Auto, 4)
def Hráči():
    basic.clear_screen()
    led.plot(X1, Y1)
    led.plot(X2, Y2)
def Hráči2():
    led.plot(X1, Y1)
Ano = 0
Auto = 0
Playng_game = 0
Hra = 0
X1 = 0
Y2 = 0
X2 = 0
Y1 = 0
Y1 = -1
X2 = -1
Y2 = -1
X1 = -1
Hra = 1
Playng_game = 0

def on_forever():
    global X1, Ano, Y1
    if Playng_game == 2:
        if joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 900 and (X1 >= 1 and Ano == 1):
            X1 += -1
            Ano = 0
            Hráči()
        if joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 400 and (X1 <= 3 and Ano == 1):
            X1 += 1
            Ano = 0
            Hráči()
        if joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 900 and (Y1 >= 1 and Ano == 1):
            Y1 += -1
            Ano = 0
            Hráči()
        if joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 400 and (Y1 <= 3 and Ano == 1):
            Y1 += 1
            Ano = 0
            Hráči()
        if not (joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 400 or joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 900 or (joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 400 or joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 900)):
            Ano = 1
basic.forever(on_forever)

# Jěždění autem
# Sumo PVP
# Padající kostky
# Strefování
# Geometry dash

def on_forever2():
    if Playng_game == 0:
        if Hra == 1:
            basic.show_leds("""
                # # . . #
                # . . # #
                # . # . #
                # . . . #
                # . # . #
                """)
        elif Hra == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                """)
        elif Hra == 3:
            basic.show_leds("""
                . . # . .
                . . # # .
                # . # # #
                # # # # #
                # # # # #
                """)
        elif Hra == 4:
            basic.show_leds("""
                . . . # .
                # . . . .
                . # . . .
                # . # . .
                # # # . .
                """)
        elif Hra == 5:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . . . # #
                . # . . .
                """)
basic.forever(on_forever2)

def on_forever3():
    global X2, Y2
    if Playng_game == 2:
        if joystickbit.get_button(joystickbit.JoystickBitPin.P12):
            basic.clear_screen()
            X2 += -1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
        elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
            basic.clear_screen()
            Y2 += 1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
        elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
            basic.clear_screen()
            Y2 += -1
            led.plot(X2, Y2)
            led.plot(X1, Y1)
        elif joystickbit.get_button(joystickbit.JoystickBitPin.P15):
            basic.clear_screen()
            X2 += 1
            led.plot(X1, Y1)
            led.plot(X2, Y2)
basic.forever(on_forever3)

def on_forever4():
    global Hra
    if Playng_game == 0 and (not (Hra == 1) and not (Hra == 2) and (not (Hra == 3) and not (Hra == 4) and (not (Hra == 5) and (not (Hra == 6) and not (Hra == 7))))):
        Hra = 1
basic.forever(on_forever4)

def on_forever5():
    global Auto, Ano
    if Playng_game == 1:
        if joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 900 and (Auto >= 2 and Ano == 1):
            Auto += -1
            Left()
            Ano = 0
        if joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 400 and (Auto <= 2 and Ano == 1):
            Auto += 1
            Right()
            Ano = 0
        if not (joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 0 and joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 400 or joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 1023 and joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 900):
            Ano = 1
basic.forever(on_forever5)

def on_forever6():
    global Auto
    if Playng_game == 1:
        if Auto == 0:
            Auto = 2
    if Playng_game == 0:
        if not (Auto == 0):
            Auto = 0
basic.forever(on_forever6)

def on_forever7():
    global Playng_game
    if Playng_game == 1:
        basic.show_leds("""
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            """)
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
        if Auto == 3:
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
        else:
            joystickbit.Vibration_Motor(1000)
            Playng_game = 0
basic.forever(on_forever7)
