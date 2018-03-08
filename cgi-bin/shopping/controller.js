var stores = ['Fareway', 'Oneota Food Co-op', 'Caseys', 'Ace Kitchen']
var sections = ['Prdouce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Kitchen Supplies', 'Clothing']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)

function clickedOn(){
	let rowcolids = ['name','qty','store','section','price','priority']
	let vals = {}

	for (let cid of rowcolids){
		vals[cid] = document.getElementById(cid).value;
	}
	let it = new Item(vals.name, vals.qty, vals.priority, vals.store, vals.section, vals.price)
	shoppingModel.addItem(it)
}

function populateSelect(selectId, sList){
	let sel = document.getElementById(selectId, sList)
	for (let s of sList){
		let opt = document.createElement("option")
		opt.value = s
		opt.innerHTML = s
		sel.appendChild(opt)

	}
}

$(document).ready(function (){
	populateSelect('store', stores)
	populateSelect('category', sections)
})