// ####################################
// ###### ----- Pupper Age ----- ######
// ####################################

function pupperAge() {
  // tell them fact
  alert('Dog years are human years times seven.')
  const dog = 7
  // ask for age of dog
  let humanYears = prompt('How old is your dog in human years?')
  //multiply dog age by const
  let result = humanYears * dog
  //tell them their dogs age in human years
  alert('Your dog is ' + result + ' years old.')
}
