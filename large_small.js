var jenny = [8, 6, 7, 5, 3, 0, 9]

var i;

jenny.sort(function(a, b) {
  return a - b;
});

console.log(jenny[jenny.length-1]);

var rev = jenny.reverse();

console.log(rev[rev.length-1]);
