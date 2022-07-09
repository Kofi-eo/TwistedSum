function twistedSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i.toString().length > 1) {
      i.toString()
        .split("")
        .forEach((index) => {
          sum += parseInt(index);
        });
    } else {
      sum += i;
    }
  }
  return sum;
}

//Example Test
//# N = 10
console.log(twistedSum(10)); //---> Result = 46 (1+2+3+4+5+6+7+8+9+(1+0))
