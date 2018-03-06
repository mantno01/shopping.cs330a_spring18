function clickedOn(){
	let mytable = document.querySelector("#listtab");
	let item = document.querySelector("#name").value;
	let quantity= document.querySelector("#quantity").value;
	let store = document.querySelector("#store").value;
	let section= document.querySelector("#section").value;
	let price= document.querySelector("#price").value;
	let titem = document.createElement("titem");
	let tquantity= document.createElement("tquantity");
	let tstore = document.createElement("tstore");
	let tsection = document.createElement("tsection");
	let tprice = document.createElement("tprice");
	//let td = document.createElement("td");
	titem.innerHTML = item;
	tquantity.innerHTML = quantity;
	tstore.innerHTML = store;
	tsection.innerHTML=section;
	tprice.innerHTML = price;
	mytable.appendChild(titem);
	mytable.appendChild(tquantity);
	mytable.appendChild(tstore);
	mytable.appendChild(tsection);
	mytable.appendChild(tprice);
}
