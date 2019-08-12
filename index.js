function takeANumber(line,name){
  line.push(name);

  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line){
  if (line.length === 0){
    return (`There is nobody waiting to be served!`);
  }
  return (`Currently serving ${line.shift()}.`)
}

function currentLine(line){
  if (line.length === 0){
    return (`The line is currently empty.`);
  }

  var num = [];


/* For Loop  

  for (let n = 0; n < line.length; n++) {
    num.push(`${n + 1}. ${line[n]}`);
  }

  return (`The line is currently: ${num.join(`, `)}`)
}

*/

var n = 0;

/// While Loop
while(n < line.length){
    num.push(`${n + 1}. ${line[n]}`);
    n++;
  }
return (`The line is currently: ${num.join(`, `)}`)
}
