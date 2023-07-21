// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  //tell them about 60
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')
  //ask how lessons left
  let left = prompt('How many lessons do you have left today?')
  //multuplying the secon by HOW MANY LESSONS LEFT
  let seconds = 60
  alert('Thats ' + left * seconds + ' seconds!')
}
