

function takeANumber(line,name){
  line.push(name);  /// Pushes names into array

  return (`Welcome, ${name}. You are number ${line.length} in line.`) ///Returns name and number in a string
}

function nowServing(line){
  if (line.length === 0){ /// Conditional statement that returns string
    return (`There is nobody waiting to be served!`);
  }
  return (`Currently serving ${line.shift()}.`) ///Returns person in line and removes them from array
}

function currentLine(line){
  if (line.length === 0){ /// Conditional statement that returns string
    return (`The line is currently empty.`);
  }

  var numAndName = [];  /// Array to hold the number and name


/* For Loop

  for (let n = 0; n < line.length; n++) {
    num.push(`${n + 1}. ${line[n]}`);
  }

  return (`The line is currently: ${num.join(`, `)}`)
}

*/

/// While Loop
var n = 0; /// Variable that shows first array index

while(n < line.length){ /// Loop will run as long as n is less than the line
    numAndName.push(`${n + 1}. ${line[n]}`); /// Pushing name and number into the array
    n++; /// Increments position by 1
  }
return (`The line is currently: ${numAndName.join(`, `)}`) /// Returns string of people with name and number order while spacing the array out into a string
}
