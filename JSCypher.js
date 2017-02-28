/*
 * JSCypher
 * https://github.com/adansinacento/JSCypher
 *
 * Copyright 2017, Adan Sandoval
 * https://twitter.com/adansinacento
 *
 */

function JSCypher(str){ // Declaration of the main class
	this.string = str;
	this.getString = function(){
		return this.string;
	}
	this.reversed = function(){
		var temp = this.string;
		var arr = temp.split('');
		arr.reverse();
		return arr.join('');
	}
	this.caesar = function(n){
		n = n % 26;
		var temp = this.string;
		var arr = temp.split('');
		var ascii = 0, charcode = 0;
		for (var i = 0; i < arr.length; i++) {
			ascii = 0; 
			charcode = 0;
			if (isAlpha(arr[i])) {
				if (arr[i] == arr[i].toUpperCase()) {
					charcode = 65;
				} else {
					charcode = 97;
				}
				ascii = arr[i].charCodeAt(0) - charcode;
				ascii = ((Number(ascii) + Number(n) + 26) % 26) + charcode;
				arr[i] = String.fromCharCode(ascii);
			}
		}
		return arr.join('');
	}
	this.atbash = function(){
		var temp = this.string;
		var arr = temp.split('');
		var ascii = 0, charcode = 0;
		for (var i = 0; i < arr.length; i++) {
			ascii = 0; 
			charcode = 0;
			if (isAlpha(arr[i])) {
				if (arr[i] == arr[i].toUpperCase()) {
					charcode = 65;
				} else {
					charcode = 97;
				}
				ascii = arr[i].charCodeAt(0) - charcode;
				ascii = (25 - Number(ascii)) + charcode;
				arr[i] = String.fromCharCode(ascii);
			}
		}
		return arr.join('');
	}
	this.binary = function(){

		var temp = this.string;
		var arr = temp.split('');
		var ascii = 0;
		for (var i = 0; i < arr.length; i++) {
			ascii = 0; 
			charcode = 0;
			if (isAlpha(arr[i])) {
				ascii = arr[i].charCodeAt(0);
				arr[i] = (dec2bin(ascii));
			}
		}
		return arr;
	}
	this.binary.decrypt = function(){
		return "Hola Memo";
	}
}

function isAlpha(txt){ //Function to detect if char is part of the alphabet
	var letterNumber = /^[a-zA-Z]+$/;
	if((txt.match(letterNumber))) 
	{
    	return true;
    } else { 
    	return false; 
    }
}

function dec2bin(dec){ //Funtion to convert decimal to binary
    return (dec >>> 0).toString(2);
}