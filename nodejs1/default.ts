let discount=function(price:number,rate:number=0.40){
	return price*rate;
}
discount(500);
discount(500,0.45);
console.log(discount(500));
console.log(discount(500,0.45))