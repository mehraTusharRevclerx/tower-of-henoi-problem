function henoi() {
  const t1 = [1, 2, 3,4,5,6,7];
  const t2 = [];
  const t3 = [];
  const t1length = t1.length;
  console.log(t1length)
  while (t1length !== t3.length) {
    console.log(t3)
    firstStep(t1, t3);
    t2.unshift(t1.shift());
    t2.unshift(t3.shift());
    firstStep(t1, t3);
    t1.unshift(t2.shift());
    t3.unshift(t2.shift());
    firstStep(t1, t3);
    console.log(t1,t2,t3)
}
}

function firstStep(t1, t3) {
  t3.unshift(t1.shift());
}
// henoi();

// WITH CONSOLE OUTPUT
// function firstSlice(t1, t2, t3) {
//     if (t1.length === 3) {
//       console.log(t1, t2, t3);
//       t3.push(t1.shift());
//       console.log(t1, t2, t3);
//       t2.push(t1.shift());
//       console.log(t1, t2, t3);
//       t2.unshift(t3.shift());
//       console.log(t1, t2, t3);
//       t3.unshift(t1.shift());
//       console.log(t1, t2, t3);
//       t1.unshift(t2.shift());
//       console.log(t1, t2, t3);
//       t3.unshift(t2.shift());
//       console.log(t1, t2, t3);
//       t3.unshift(t1.shift());
//       console.log(t1, t2, t3);
//     }
//   }
