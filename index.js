
let names = "";
render();


function render() {
  let pairForSprints = makePair(names);
  const $div = document.getElementById('content');
  $div.innerHTML = '';
  $div.innerHTML += `<img src="pairFairy.png" />`;
  for (let i = 0; i < pairForSprints.length; i ++) {
    $div.innerHTML += `<div id = "card_${i}" class="card card-panel"/>`
    let card_id = document.getElementById(`card_${i}`);
    for (let x = 0; x < Math.floor((pairForSprints.length + 1) / 2); x++) {
      card_id.innerHTML +=
        `<table class="centered "> 
            <tr>
              <td>${pairForSprints[i][x][0]}</td> 
              <td>${pairForSprints[i][x][1]}</td> 
            </tr>                 
          </table>`
    }
    if (pairForSprints.length % 2 === 0) {
      card_id.innerHTML +=
        `<table class="centered center-align"> 
          <tr>
            <td>${pairForSprints[i][0][2]}</td> 
          </tr>                 
        </table>`
    }
  }
  $div.innerHTML += `<img src="pairFairy.png" />`
}



const btn = document.getElementById('btn');
btn.addEventListener('click', clickHandle);

function clickHandle() {
  names = document.getElementById('in').value;
  console.log(names);
  render();
}



function makePair(names) {
  const inputStudents = names.split(' ');
  const howManyStudent = inputStudents.length;
  const lastIdx = howManyStudent - 1;
  let pairs = [];

  for (let pairNum = 1; pairNum < howManyStudent; pairNum++) {
    pairs.push([]);
  }

  let students = inputStudents.slice();
  if (howManyStudent % 2 === 0) {
    for (let round = 0; round < howManyStudent - 1; round++) {
      students = students.slice(0, 1).concat(students.slice(lastIdx), students.slice(1, lastIdx));
      for (let idx = 0; idx < howManyStudent / 2; idx++) {
        pairs[round].push([students[idx], students[lastIdx - idx]]);
      }
    }
  } else {
    for (let round = 0; round < howManyStudent - 1; round++) {
      students.unshift(students.pop());
      for (let idx = 1; idx <= (howManyStudent - 1) / 2; idx++) {
        let soloOrTriple = students[0];
        pairs[round].push([students[idx], students[lastIdx - idx + 1], soloOrTriple]);
      }
    }
  }

  return pairs;
}

