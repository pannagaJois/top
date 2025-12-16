let a = [1,2,3,4,5];
let even = a.filter(n => n%2==0);
let trip = even.map(b => b*3);
let sum = trip.reduce((s, n) => s+n, 0)
console.log(sum);