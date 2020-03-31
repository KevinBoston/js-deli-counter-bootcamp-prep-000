var katzDeliLine = [];
function takeANumber (lineNum, name){
  var num = lineNum++;
  var welcome = `Welcome ${name}. You are number ${num} in line.`;
  return welcome;
}
function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
}