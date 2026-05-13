const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".prices");
	let total =0;
	prices.forEach(function(price){
		total += Number(price.textContent);
	});
	document.getElementById("ans").textContent =total;
  
};
getSumBtn.addEventListener("click",getSum);



