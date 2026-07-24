const canvas = document.querySelector<HTMLCanvasElement>('#game')!
const ctx = canvas.getContext('2d')!

let x = 0
let y = 0
const speed = 3
const size = 20
const keys = new Set<string>()
document.addEventListener('keydown', (e) => keys.add(e.key))
document.addEventListener('keyup', (e) => keys.delete(e.key))

function update() {
  if (keys.has('w')) y -= speed
  if (keys.has('s')) y += speed
  if (keys.has('a')) x -= speed
  if (keys.has('d')) x += speed
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'red'
  ctx.fillRect(x, y, size, size)
}

function loop() {
  update()
  draw()
  requestAnimationFrame(loop)
}

loop()