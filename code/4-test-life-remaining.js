// ####################################
// #### ----- Life Remaining ----- ####
// ####################################

function lifeRemaining() {
    //ask how old they are
    let age = prompt('How old are you?')
    //minus their age from 83.5 to get how many years they have left.
    let real = 83.5 - age
    alert("You've got " + real + " years let in you!")

}