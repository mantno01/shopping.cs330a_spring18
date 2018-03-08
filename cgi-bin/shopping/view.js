class ShoppingView{
	constructor(model){
		model.subscribe(this.redrawList.bind(this))
	}

	redrawList(shoppingList, msg){
		let tbl = document.getElementById("listtab")
		tbl.innerHTML = ""
		for (let item of shoppingList.newItems){
			this.addRow(item, tbl)
			if(item.purchased){
				this.addStrike(item, tbl)
			}

		}
	}
	addRow(item, parent){
		let row = document.createElement("tr")
		row.classList.add(item.priority)
		let cb = document.createElement("input")
		cb.type = "checkbox"
		cb.classList.add("form-control")
		cb.onclick = function(){item.purchased = true;}
		row.appendChild(cb)

		for (let val of ['name', 'quantity', 'store', 'section', 'price', 'priority']){
			let td = document.createElement("td")
			td.innerHTML = item[val]
			row.appendChild(td)
		}
		parent.appendChild(row)
	}
	addStrike(item, parent){
		let row = document.createElement("tr")
		row.classList.add(item.priority)
		let cb = document.createElement("input")
		cb.type = "checkbox"
		cb.classList.add("form-control")
		cb.onclick = function(){item.purchased = true;}
		row.appendChild(cb)

		for (let val of ['name', 'quantity', 'store', 'section', 'price', 'priority']){
			let td = document.createElement("td")
			td.class = "strikeout"
			td.innerHTML = item[val]
			row.appendChild(td)
		}
		parent.appendChild(row)
	}

}

