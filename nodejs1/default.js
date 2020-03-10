var discount = function (price, rate) {
    if (rate === void 0) { rate = 0.40; }
    return price * rate;
};
discount(500);
discount(500, 0.45);
console.log(discount(500));
console.log(discount(500, 0.45));
