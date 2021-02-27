function tipCalculator(){
	let billAmountInput = parseInt(document.querySelector("#bill-amount").value);
	let tipPercentInput = parseInt(document.querySelector("#tip-amount").value);
	let numOfPatronsInput = parseInt(document.querySelector("#guests").value);

	

	if (!(isNum(billAmountInput) && isNum(numOfPatronsInput))){
		alert("Not a valid number. Please try again!");
	}

	const totalTip = (tipPercentInput/100) * billAmountInput;
	const totalBill = totalTip + billAmountInput;
	
	document.querySelector("#bill-output span").textContent = billAmountInput.toFixed(2);
	document.querySelector("#tip-output span").textContent = totalTip.toFixed(2);
	document.querySelector("#bill-total span").textContent = totalBill.toFixed(2);
	
	document.querySelector("#bill-breakdown").setAttribute("class","collapse show");



	if (numOfPatronsInput > 1){
		document.querySelector('#per-guest span').textContent = (totalBill/numOfPatronsInput).toFixed(2);
		document.querySelector("#guest-card").setAttribute("class","collapse show");
	}
	else{
		document.querySelector("#guest-card").setAttribute("class","collapse");
	}











	
	
}

function isNum(input){
	return Number.isInteger(input);


}