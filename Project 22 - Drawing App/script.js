//https://developer.mozilla.org/es/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 20
let color = 'black'
let x
let y

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI *2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size
  ctx.stroke()
}

drawCircle(100, 200)
drawLine (300, 300, 300, 500)
