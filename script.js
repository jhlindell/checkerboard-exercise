var body = document.getElementsByTagName('body')[0];
var checkerCounter = 1;
for(i=1; i<=9; i++) {
  for(j=1; j<=9; j++, checkerCounter++) {
    var element = document.createElement('div');
    element.style.width = '11.1%';
    //element.style.height = 'auto';
    element.style.float = 'left';
    if(checkerCounter % 2 === 0){
      element.style.backgroundColor = 'black';
    } else {
      element.style.backgroundColor = 'red';
    }
    element.style.paddingBottom = '11.1%';
    body.appendChild(element);
  }
}// Your JS goes here
