const toggleButton = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
toggleButton.addEventListener('click', function () {
  if (sideMenu.style.display === 'none') {
    sideMenu.style.display = 'block';
  } else {
    sideMenu.style.display = 'none';
  }
});
//calculator1//
const toggleButton2 = document.getElementById('btnCalculator');
const threeWay = document.getElementById('threeWay');
toggleButton2.addEventListener('click', function () {
  if (threeWay.style.display === 'none') {
    threeWay.style.display = 'block';
  } else {
    threeWay.style.display = 'none';
  }
});
//profit

const stakeInput = document.getElementById('stake2');
const profitPercentageOutput = document.getElementById('profitPercentage');
stakeInput.addEventListener('input', function () {
  const stake = parseFloat(stakeInput.value);

  // Calculate the profit percentage based on the stake value
  const odd1 = parseFloat(document.querySelector('.odd1').textContent);
  const oddx = parseFloat(document.querySelector('.oddx').textContent);
  const odd2 = parseFloat(document.querySelector('.odd2').textContent);
  const totalInv = stake;
  const profit1 = totalInv / odd1;
  const profitx = totalInv / oddx;
  const profit2 = totalInv / odd2;
  const totalProfit = profit1 + profitx + profit2;
  const profitPercentage = ((totalInv - totalProfit) / totalProfit) * stake;
  //consele.log(totalProfit);

  // Update the output with the new profit percentage value
  profitPercentageOutput.textContent = profitPercentage.toFixed(2);
});
//console.log(profitPercentageOutput.textContent);
//calculator closeBtn1//
const toggleButton3 = document.getElementById('closeBtn1');
//const threeWay = document.getElementById('threeWay');
toggleButton3.addEventListener('click', function () {
  if (threeWay.style.display === 'block') {
    threeWay.style.display = 'none';
  } else {
    threeWay.style.display = 'block';
  }
});

//calculator2//
const toggleButton4 = document.getElementById('btnCalculator2');
const twoWay = document.getElementById('twoWay');
toggleButton4.addEventListener('click', function () {
  if (twoWay.style.display === 'none') {
    twoWay.style.display = 'block';
  } else {
    twoWay.style.display = 'none';
  }
});

//calculator closeBtn1//
const toggleButton5 = document.getElementById('closeBtn2');
//const twoWay = document.getElementById('threeWay');
toggleButton5.addEventListener('click', function () {
  if (twoWay.style.display === 'block') {
    twoWay.style.display = 'none';
  } else {
    twoWay.style.display = 'block';
  }
});

//calculator3//
const toggleButton6 = document.getElementById('btnCalculator3');
const twoWay2 = document.getElementById('twoWay2');
toggleButton6.addEventListener('click', function () {
  if (twoWay2.style.display === 'none') {
    twoWay2.style.display = 'block';
  } else {
    twoWay2.style.display = 'none';
  }
});

//calculator closeBtn3//
const toggleButton7 = document.getElementById('closeBtn3');
//const twoWay2 = document.getElementById('threeWay');
toggleButton7.addEventListener('click', function () {
  if (twoWay2.style.display === 'block') {
    twoWay2.style.display = 'none';
  } else {
    twoWay2.style.display = 'block';
  }
});
//calculator function
function calculateProfitPercentage() {
  const odd1 = parseFloat(document.querySelector('.odd1').textContent);
  const oddx = parseFloat(document.querySelector('.oddx').textContent);
  const odd2 = parseFloat(document.querySelector('.odd2').textContent);

  const totalInv = 1;
  const profit1 = totalInv / odd1;
  const profitx = totalInv / oddx;
  const profit2 = totalInv / odd2;
  const totalProfit = profit1 + profitx + profit2;
  // consele.log(totalProfit);

  const profitPercentage = ((totalInv - totalProfit) / totalProfit) * 100;
  // console.log(profitPercentage);
  const centDiv = document.querySelector('.cent');
  centDiv.textContent = profitPercentage.toFixed(2) + '%';
  //console.log(centDiv.textContent);
  calculateOutcome();
}

calculateProfitPercentage();

// Get the calculator button element
const calculatorBtn = document.getElementById('btnCalculator');

// Add an event listener to the calculator button
calculatorBtn.addEventListener('click', function () {
  // Get the odds values from the corresponding div elements
  const odds1 = document.querySelector('.odd1').innerText;
  const odds2 = document.querySelector('.oddx').innerText;
  const odds3 = document.querySelector('.odd2').innerText;

  // Fill the odds values into the corresponding input elements
  document.getElementById('odds1').value = odds1;
  document.getElementById('odds2').value = odds2;
  document.getElementById('odds3').value = odds3;
});

//splite stake//
function splitStake(stake, odds) {
  const totalImpliedProbability = odds.reduce((acc, cur) => acc + 1 / cur, 0);
  const amounts = odds.map(
    (odd) => (1 / odd / totalImpliedProbability) * stake
  );
  return amounts;
}
const stakeIput = document.getElementById('stake2');
const odds1Iput = document.getElementById('odds1');
const odds2Iput = document.getElementById('odds2');
const odds3Iput = document.getElementById('odds3');
const amount1Iput = document.getElementById('budget1');
const amount2Iput = document.getElementById('budget2');
const amount3Iput = document.getElementById('budget3');

function updateAmounts() {
  const stake = parseFloat(stakeInput.value);
  const odds1 = parseFloat(odds1Iput.value);
  const odds2 = parseFloat(odds2Iput.value);
  const odds3 = parseFloat(odds3Iput.value);
  const odds = [odds1, odds2, odds3];
  const amounts = splitStake(stake, odds);
  amount1Iput.value = amounts[0].toFixed(2);
  amount2Iput.value = amounts[1].toFixed(2);
  amount3Iput.value = amounts[2].toFixed(2);
}
stakeInput.addEventListener('input', updateAmounts);
odds1Iput.addEventListener('input', updateAmounts);
odds2Iput.addEventListener('input', updateAmounts);
odds3Iput.addEventListener('input', updateAmounts);

function calculateOutcome() {
  //out-come//
  const stakeInput1 = document.getElementById('stake2');
  const profitElement = document.getElementById('profitPercentage');
  const outComeElement = document.getElementById('budget4');
  const stake = parseFloat(stakeInput1.value);
  const profit = parseFloat(profitElement.innerText);
  const outCome = stake + profit;

  outComeElement.value = outCome.toFixed(2);
  stakeInput1.addEventListener('input', calculateOutcome);
}

/*//calculate function//
const calculateButton = document.getElementsByClassName('cal3way');
calculateButton.addEventListener('click', calculateOutcome);*/

//profit2
const stakeAInput = document.getElementById('stakeA');
const profitPercentage2Output = document.getElementById('profitPercentage2');

stakeAInput.addEventListener('input', function () {
  const stakeA = parseFloat(stakeAInput.value);

  // Calculate the profit percentage based on the stake value

  const oddxA = parseFloat(document.querySelector('.oddxA').textContent);
  const odd12 = parseFloat(document.querySelector('.odd12').textContent);

  const totalInv2 = stakeA;
  const profitxA = totalInv2 / oddxA;
  const profit12 = totalInv2 / odd12;
  const totalProfit2 = +profitxA + profit12;
  const profitPercentage2 =
    ((totalInv2 - totalProfit2) / totalProfit2) * stakeA;

  // Update the output with the new profit percentage value
  profitPercentage2Output.textContent = profitPercentage2.toFixed(2);
});
//console.log(profitPercentage2);
//calculator function
function calculateProfitPercentage2() {
  const oddxA = parseFloat(document.querySelector('.oddxA').textContent);
  const odd12 = parseFloat(document.querySelector('.odd12').textContent);

  const totalInv2 = 1;
  const profitxA = totalInv2 / oddxA;
  const profit12 = totalInv2 / odd12;
  const totalProfit2 = profitxA + profit12;
  const profitPercentage2 = ((totalInv2 - totalProfit2) / totalProfit2) * 100;

  const cent2Div = document.querySelector('.cent2');
  cent2Div.textContent = profitPercentage2.toFixed(2) + '%';
  // console.log(cent2Div.textContent);
  calculateOutcome2();
}
calculateProfitPercentage2();

// Get the calculator button element
const calculatorBtn2 = document.getElementById('btnCalculator2');

// Add an event listener to the calculator button
calculatorBtn2.addEventListener('click', function () {
  // Get the odds values from the corresponding div elements
  const oddsxA = document.querySelector('.oddxA').innerText;
  const odds12 = document.querySelector('.odd12').innerText;

  // Fill the odds values into the corresponding input elements
  document.getElementById('oddsxA').value = oddsxA;
  document.getElementById('odds12').value = odds12;
});

//splite stake//
function splitStake2(stakeA, oddsA) {
  const totalImpliedProbability2 = oddsA.reduce((acc, cur) => acc + 1 / cur, 0);
  const amounts2 = oddsA.map(
    (odd) => (1 / odd / totalImpliedProbability2) * stakeA
  );
  return amounts2;
}
const stakeA2Input = document.getElementById('stakeA');
const oddsxAInput = document.getElementById('oddsxA');
const odds12Input = document.getElementById('odds12');
const amountAInput = document.getElementById('budgetC');
const amountBInput = document.getElementById('budgetB');

function updateAmounts2() {
  const stakeA = parseFloat(stakeA2Input.value);
  const oddsxA = parseFloat(oddsxAInput.value);
  const odds12 = parseFloat(odds12Input.value);
  const oddsA = [odds12, oddsxA];
  const amounts2 = splitStake2(stakeA, oddsA);
  amountAInput.value = amounts2[0].toFixed(2);
  amountBInput.value = amounts2[1].toFixed(2);
}
stakeA2Input.addEventListener('input', updateAmounts2);
oddsxAInput.addEventListener('input', updateAmounts2);
odds12Input.addEventListener('input', updateAmounts2);

function calculateOutcome2() {
  //out-come//
  const stakeA2Input = document.getElementById('stakeA');
  const profitElement2 = document.getElementById('profitPercentage2');
  const outComeElement2 = document.getElementById('budgetA');
  const stakeA = parseFloat(stakeA2Input.value);
  const profit2 = parseFloat(profitElement2.innerText);
  const outCome2 = stakeA + profit2;

  outComeElement2.value = outCome2.toFixed(2);
  stakeAInput.addEventListener('input', calculateOutcome2);
}

/*//calculate function//
const calculateButton2 = document.getElementsByClassName('btncl2');
calculateButton2.addEventListener('click', calculateOutcome2);*/

//profit3
const stakeBInput = document.getElementById('stakeB');
const profitPercentage3Output = document.getElementById('profitPercentage3');

stakeBInput.addEventListener('input', function () {
  const stakeB = parseFloat(stakeBInput.value);

  // Calculate the profit percentage based on the stake value

  const under = parseFloat(document.querySelector('.oddUnder').textContent);
  const over = parseFloat(document.querySelector('.oddOver').textContent);

  const totalInv3 = stakeB;
  const profitUnder = totalInv3 / under;
  const profitOver = totalInv3 / over;
  const totalProfit3 = +profitUnder + profitOver;
  const profitPercentage3 =
    ((totalInv3 - totalProfit3) / totalProfit3) * stakeB;

  // Update the output with the new profit percentage value
  profitPercentage3Output.textContent = profitPercentage3.toFixed(2);
});
//console.log(profitPercentage2);
//calculator function
function calculateProfitPercentage3() {
  const under = parseFloat(document.querySelector('.oddUnder').textContent);
  const over = parseFloat(document.querySelector('.oddOver').textContent);

  const totalInv3 = 1;
  const profitUnder = totalInv3 / under;
  const profitOver = totalInv3 / over;
  const totalProfit3 = profitUnder + profitOver;
  const profitPercentage3 = ((totalInv3 - totalProfit3) / totalProfit3) * 100;
  //console.log(totalProfit3);
  const cent3Div = document.querySelector('.cent3');
  cent3Div.textContent = profitPercentage3.toFixed(2) + '%';
  //console.log(cent2Div.textContent);
  calculateOutcome3();
}
calculateProfitPercentage3();

// Get the calculator button element
const calculatorBtn3 = document.getElementById('btnCalculator3');

// Add an event listener to the calculator button
calculatorBtn3.addEventListener('click', function () {
  // Get the odds values from the corresponding div elements
  const under = document.querySelector('.oddUnder').innerText;
  const over = document.querySelector('.oddOver').innerText;

  // Fill the odds values into the corresponding input elements
  document.getElementById('under').value = under;
  document.getElementById('over').value = over;
});

//splite stake//
function splitStake3(stakeB, oddsA1) {
  const totalImpliedProbability3 = oddsA1.reduce(
    (acc, cur) => acc + 1 / cur,
    0
  );
  const amounts3 = oddsA1.map(
    (odd) => (1 / odd / totalImpliedProbability3) * stakeB
  );
  return amounts3;
}
const stakeB2Input = document.getElementById('stakeB');
const underInput = document.getElementById('under');
const overInput = document.getElementById('over');
const amountYInput = document.getElementById('budgetY');
const amountZInput = document.getElementById('budgetZ');

function updateAmounts3() {
  const stakeB = parseFloat(stakeB2Input.value);
  const under = parseFloat(underInput.value);
  const over = parseFloat(overInput.value);
  const oddsA1 = [under, over];
  const amounts3 = splitStake3(stakeB, oddsA1);
  amountYInput.value = amounts3[0].toFixed(2);
  amountZInput.value = amounts3[1].toFixed(2);
}
stakeB2Input.addEventListener('input', updateAmounts3);
underInput.addEventListener('input', updateAmounts3);
overInput.addEventListener('input', updateAmounts3);

function calculateOutcome3() {
  //out-come//
  const stakeB3Input = document.getElementById('stakeB');
  const profitElement3 = document.getElementById('profitPercentage3');
  const outComeElement3 = document.getElementById('budgetX');
  const stakeB = parseFloat(stakeB3Input.value);
  const profit3 = parseFloat(profitElement3.innerText);
  const outCome3 = stakeB + profit3;

  outComeElement3.value = outCome3.toFixed(2);
  stakeBInput.addEventListener('input', calculateOutcome3);
}

/*//calculate function//
const calculateButton2 = document.getElementsByClassName('btncl2');
calculateButton2.addEventListener('click', calculateOutcome2);*/
