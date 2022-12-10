/////////////////////Inputs
const wallLengthInput = document.querySelector('#wall-length');
const wallHeightInput = document.querySelector('#wall-height');
const numWindows = document.querySelector('#num-windows');
const numDoors = document.querySelector('#num-doors');
const openLength = document.querySelector('#open-length');
const openHeight = document.querySelector('#open-height');
const coats = document.querySelector('#paint-coats');
//submit button and display
const calcDisplay = document.querySelector('#gal-calc');
const submit = document.querySelector('button');
/////////pre-calc constants
const galPerFoot = .0028;
const windowSpace = (5 * 5) * galPerFoot;
const doorSpace = (8 * 3) * galPerFoot;

////////Final calc function
function submitClick() {
  const wallL = +wallLengthInput.value;
  const wallH = +wallHeightInput.value;
  const wallTotal = (wallL * wallH ) * galPerFoot;
  console.log('Total of paint for walls: ' + wallTotal)

  const DoorWindowTotal = (+numWindows.value * windowSpace) + (+numDoors.value * doorSpace)
  console.log('Door and Win space to remove: ' + DoorWindowTotal)

  const openL = +openLength.value;
  const openW = +openHeight.value;
  const openTotal = (openL * openW) * galPerFoot;
  console.log('Total open space to remove: ' + openTotal)

  let coatsIn = +coats.value;
  if (coatsIn < 1) {coatsIn = 1};
  console.log('Total amount of coats: ' + coatsIn)

  let total = (wallTotal - openTotal - DoorWindowTotal) * coatsIn;
  if (total < 0) {total = 0};
  console.log('Total of paint needed: ' + total)

  calcDisplay.textContent = Math.ceil(total);
  console.log('Total Gal needed: ' + Math.ceil(total))
  console.log('----------------------------')
}
submit.addEventListener('click', submitClick)

/////////Validation for one decimal inputs
const regex = /(0\.\d)|([1-9]+\d*\.?\d?)|((0|[1-9])(\.|\.\d)?)|(\.?\d?)/g;
// const regex = /((\d*\.?)|(\d*\.\d)|(\.\d)|(\.))/g;
function charRemove(s) {
  const str = s;
  let filter1 = str.match(regex);
  console.log('Regex Filter: ' + filter1);
  let filter2 = filter1.join('');
  console.log('Joined together: ' + filter2);
  let charArray = filter2.split('');
  console.log(charArray);
  let periodCount = 0;

  for(let i = 0; i < charArray.length; i++){
    if (charArray[i] === '.'){periodCount++};
    if (charArray[i] === '.' && periodCount > 1){charArray[i] = '';}
  }

  let onePeriodArray= charArray.join('');
  if (onePeriodArray === ''){
    return onePeriodArray
  } else {
  let oneDecimal = Math.floor(+onePeriodArray * 10)/10;
  console.log('One decimal filter: ' + oneDecimal);
  return oneDecimal;
  }
}
//////////Validation for int only inputs
const regexIntOnly = /\d*/g;
function charRemoveInt(s) {
  const str = s;

  let reFilter = str.match(regexIntOnly);
  console.log(reFilter);
  let joinArray = reFilter.join('');
  console.log(joinArray);

  if(joinArray === ''){return joinArray}
  return Math.floor(+joinArray);
}

/////////Arrow key functionality
function arrowToggle(){
  if (window.event.key === 'ArrowUp'){
    if (document.activeElement.value === '.'){document.activeElement.value = 0;}
    document.activeElement.value = (+document.activeElement.value + .1).toFixed(1);
  }
  if (window.event.key === 'ArrowDown' && +document.activeElement.value >= .1){
    document.activeElement.value = (+document.activeElement.value - .1).toFixed(1);
  }
}
function arrowToggleInt(){
  if (window.event.key === 'ArrowUp'){
    if (document.activeElement.value === '.'){document.activeElement.value = 0;}
    document.activeElement.value = +document.activeElement.value + 1;
  }
  if (window.event.key === 'ArrowDown' && +document.activeElement.value >= 1){
    document.activeElement.value = +document.activeElement.value - 1;
  }
}
