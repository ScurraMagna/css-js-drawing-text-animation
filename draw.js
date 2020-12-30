let letters = document.getElementsByTagName('svg')[0];
let n = letters.children.length; // number of path

for (let i=0; i<n; i++) {
  let letter = letters.children[i];
  letter.style.strokeDasharray = letter.getTotalLength();
  letter.style.strokeDashoffset = letter.getTotalLength();
  letter.style.animationDelay = (i * 2 / n) + "s";
}
