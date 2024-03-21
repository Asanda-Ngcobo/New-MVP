let factors = [];
let negativeFactors = [];
let order = [];
let cFactors = [];
let integer = 0;
let bNumber = 0;
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  integer = Math.trunc(Math.random() * 20) + 1;
  for (var i = 0; i <= integer; i++) {
    if (integer % i === 0) {
      factors.push(i);
      factors.forEach(function (f) {
        negativeFactors.push(f * -1);
        order = new Set(negativeFactors);
        cFactors = [...factors, ...order];
      });
    }
  }

  cFactors.forEach(function (f) {
    const b = integer + f;
    console.log(b);

    if (f * f === integer && f + f === b) {
      bNumber.push(f);
      console.log(bNumber);
    }
  });

  //   console.log(factors);
  //   console.log(negativeFactors);
  //   console.log(order);
  console.log(cFactors);
});
