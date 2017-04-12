var body = document.getElementsByTagName('body')[0];
var checkerCounter = 1;

function randomColor(){
  let r = Math.floor(Math.random()*250);
  let g = Math.floor(Math.random()*250);
  let b = Math.floor(Math.random()*250);
  console.log('rgb(' +r + ', ' + b + ', ' + g + ')');
  return 'rgb(' +r + ', ' + b + ', ' + g + ')';

}

for(i=1; i<=9; i++) {
  for(j=1; j<=9; j++, checkerCounter++) {
    var element = document.createElement('div');
    element.style.width = '11.1%';
    element.style.float = 'left';
    element.style.backgroundColor = randomColor();
    element.style.paddingBottom = '11.1%';
    body.appendChild(element);
  }
}// Your JS goes here
