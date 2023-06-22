// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')
  let costbefore = prompt('What is the cost before GST?')

  let total = 1.15 * costbefore
  alert('The cost with GST is ' + total)
}
