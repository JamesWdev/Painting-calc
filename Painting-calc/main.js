/////////////////////inputs
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
const galPerFoot = .0236;
const windowSpace = (5 + 5) * galPerFoot;
const doorSpace = (8 + 3) * galPerFoot;

////////Final calc function
function submitClick() {
  const wallL = +wallLengthInput.value;
  const wallH = +wallHeightInput.value;
  const wallTotal = (wallL + wallH ) * galPerFoot;
  console.log('Total of paint for walls: ' + wallTotal)

  const DoorWindowTotal = (+numWindows.value * windowSpace) + (+numDoors.value * doorSpace)
  console.log('Door and Win space to remove: ' + DoorWindowTotal)

  const openL = +openLength.value;
  const openW = +openHeight.value;
  const openTotal = (openL + openW) * galPerFoot;
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










