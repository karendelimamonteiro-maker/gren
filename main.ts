let index = 0
let quizAnswer = ""

// Startup
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.showString("MRS GREN")

// Press A to cycle through the 7 life processes (Study Mode)
input.onButtonPressed(Button.A, function () {
    index = (index % 7) + 1

    if (index == 1) {
        basic.showString("M")
        basic.showIcon(IconNames.Duck)
        basic.showString("Movement: living things move")
    } else if (index == 2) {
        basic.showString("R")
        basic.showIcon(IconNames.Target)
        basic.showString("Respiration: release energy")
    } else if (index == 3) {
        basic.showString("S")
        basic.showIcon(IconNames.Happy)
        basic.showString("Sensitivity: react to surroundings")
    } else if (index == 4) {
        basic.showString("G")
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showString("Growth: getting bigger")
    } else if (index == 5) {
        basic.showString("R")
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showString("Reproduction: making babies")
    } else if (index == 6) {
        basic.showString("E")
        basic.showIcon(IconNames.No)
        basic.showString("Excretion: removing waste")
    } else if (index == 7) {
        basic.showString("N")
        basic.showIcon(IconNames.EigthNote)
        basic.showString("Nutrition: eating food")
    }
})

// Press B for a quick Quiz
input.onButtonPressed(Button.B, function () {
    let randomQ = randint(1, 4)
    if (randomQ == 1) {
        quizAnswer = "M"
        basic.showString("Q: Running or flying?")
    } else if (randomQ == 2) {
        quizAnswer = "G"
        basic.showString("Q: Getting taller?")
    } else if (randomQ == 3) {
        quizAnswer = "N"
        basic.showString("Q: Eating plants or food?")
    } else if (randomQ == 4) {
        quizAnswer = "S"
        basic.showString("Q: Feeling cold or heat?")
    }
    basic.pause(1000)
    basic.showString("Press A+B for answer")
})

// Press A+B to reveal quiz answer
input.onButtonPressed(Button.AB, function () {
    if (quizAnswer != "") {
        basic.showString("Ans: " + quizAnswer)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showString("MRS GREN")
    }
})

// Shake to demonstrate Movement
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Tortoise)
    basic.pause(300)
    basic.showIcon(IconNames.Rabbit)
    basic.pause(300)
    basic.showString("Movement!")
}