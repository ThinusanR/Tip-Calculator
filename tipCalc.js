function tipCalculator(){
	let billAmountInput = parseInt(document.querySelector("#bill-amount").value);
	let tipPercentInput = parseInt(document.querySelector("#tip-amount").value);
	let numOfPatronsInput = parseInt(document.querySelector("#guests").value);

	

	if (!(isNum(billAmountInput) && isNum(numOfPatronsInput))){
		alert("Not a valid number. Please try again!");
	}

	const totalTip = (tipPercentInput/100) * billAmountInput;
	const totalBill = totalTip + billAmountInput;
	console.log(totalTip);
	document.querySelector("#bill-output span").textContent = billAmountInput;
	document.querySelector("#tip-output span").textContent = totalTip;
	document.querySelector("#bill-total span").textContent = totalBill;
	
	document.querySelector("#this").setAttribute("class","collapse show");



	if (numOfPatronsInput > 1){
		document.querySelector('#per-guest span').textContent = totalBill/numOfPatronsInput;
		document.querySelector("#guest-card").setAttribute("class","collapse show");
	}











	
	
}

function isNum(input){
	return Number.isInteger(input);


}