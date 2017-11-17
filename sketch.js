function setup() {
  createCanvas(500,400)
}
function draw() {
  background(0)
  fill(250)
  fill('red')

  var x = 50
  var count = 0

  while (count < 8) {
    rect (x, height/2, 50, 50)
    count += 1
    x += 50
    
        rect (x, height/3, 50, 50)
    count += 1
    x += 50
  }
}
for ( var count = 0; count < 8; count += 1 ) {
  //...
}