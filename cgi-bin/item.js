'use strict';

var ViewThing = require('./view')

class Subject {
	
	constructor(){
		this.handlers = []
	}

	subscribe(fn) {
		this.handlers.push(fn);
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(
			function(item) {
				if (item !== fn) {
					return item;
				}
			}
		};
	}
//items within the table, not the item section i'm really sick of shitty naming conventions
class Item extends Subject{
	constructor(name, quantity, store, section, price){
		this.name = name;
		this.quantity = quantity;
		this.store = store;
		this.section = section;
		this.price = price;
	}
	get name(){
		return this.name;
	}
	get quantity(){
		return this.quantity;
	}
	get store(){
		return this.store;
	get section(){
		return this.section;
	}
	get price(){
		return this.price;
	}
