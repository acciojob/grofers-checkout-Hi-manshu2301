const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let total =0;
	prices.forEach(function(price){
		total += Number(price.textContent);
	});
	const row = document.createElement("tr");
	const cell = document.createElemtnt("td");
	cell.colSpan = 2;
	cell.textContent = total;
	row.appenChild(cell);
	document.querySelector("table").appendChild(row);
  
};
getSumBtn.addEventListener("click",getSum);

getSumBtn.addEventListener("click", getSum);

