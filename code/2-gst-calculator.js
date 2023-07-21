// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  // tell them what gst is
  alert('The price with GST the price and 15%.')
  //ask for the cost before gst
  let costbefore = prompt('What is the cost before GST?')
  // multipy the costbefore and gst
  let total = 1.15 * costbefore
  //tell them the cost of gst and costbefore
  alert('The cost with GST is ' + total)
}
