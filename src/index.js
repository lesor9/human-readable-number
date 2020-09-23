module.exports = function toReadable (number) {
 	const numberObj = {
 		0 : 'zero',
 		1 : 'one',
 		2 : 'two',
 		3 : 'three',
 		4 : 'four',
 		5 : 'five',
 		6 : 'six',
 		7 : 'seven',
 		8 : 'eight',
 		9 : 'nine',
 		10 : 'ten',
 		11 : 'eleven',
 		12 : 'twelve',
 		13 : 'thirteen',
 		14 : 'fourteen',
 		15 : 'fifteen',
 		16 : 'sixteen',
 		17 : 'seventeen',
 		18 : 'eighteen',
 		19 : 'nineteen',
 		20 : 'twenty',
 		30 : 'thirty',
 		40 : 'forty',
 		50 : 'fifty',
 		60 : 'sixty',
 		70 : 'seventy',
 		80 : 'eighty',
 		90 : 'ninety',
 		100 : 'hundred',
 	}

 	if (number >= 0 && number < 20) return numberObj[number];

 	if (number >= 20 && number < 100) {
 		return twoNum(number);
 	}
 		
 	if (number >= 100 && number < 1000) {
 		return threeNum(number); 		
 	}


 	function twoNum(numnum) {
 		if (numnum < 21) return numberObj[numnum];

 		let dozen = Math.floor(numnum / 10) * 10;
 		if (numnum % dozen == 0) {
 			return numberObj[dozen];
 		} else {
 			return numberObj[dozen] + ' ' + numberObj[numnum - dozen];
 		}
 		
 	}

 	function threeNum(num3) {
 		let thriple = Math.floor(num3 / 100);
 		if (num3 % (thriple * 100) == 0) {
 			return numberObj[thriple] + ' hundred';
 		} else {

 			return numberObj[thriple] + ' hundred ' + twoNum(num3 - thriple * 100);
 		}  
 	}
}