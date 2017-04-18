var body = document.getElementsByTagName('body')[0];
var checkerCounter = 1;
var gradientOffset = 0;

for(i=1; i<=9; i++) {
  for(j=1; j<=9; j++, checkerCounter++) {
    var element = document.createElement('div');
    element.style.width = '11.1%';
    element.style.float = 'left';
    if(checkerCounter % 2 === 0){
      element.style.backgroundColor = 'rgb(0,0,0)';
    } else {
      element.style.backgroundColor = 'rgb(255,' + (0 + gradientOffset) + ',0)';
    }
    element.style.paddingBottom = '11.1%';
    //element.style.zIndex = 1;
    body.appendChild(element);
    gradientOffset += 2;
  }
}
