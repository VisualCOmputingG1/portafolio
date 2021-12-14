const stepTime = 2500 // ms
const stepSeparation = 150

let fbo
let blurShader
function setup() {
  createCanvas(400, 400, WEBGL);
  pixelDensity(1)
  
  fbo = new Framebuffer(window)
  blurShader = createShader(vert, frag)
}

function draw() {
  const eyeZ = (height/2) / tan(PI/6)
  const near = eyeZ/10
  const far = eyeZ*10
  perspective(PI/3, width/height, near, far)
  
  const linearStepProgress = (millis() % stepTime) / stepTime
  const stepProgress = Ease.easeInOutCubic(linearStepProgress)
  const stepSide = (millis() % (2*stepTime)) >= stepTime ? -1 : 1
  
  const targetDepth = 300 + 200 * sin((millis() % (5*stepTime)) / (5*stepTime) * TWO_PI)
  const blurIntensity = 0.05 + 0.015 * sin((millis() % (5*stepTime)) / (5*stepTime) * TWO_PI)
  
  fbo.draw(() => {
    clear()
    push()
    
    background(0)
    noStroke()
    
    // Point up at the light
    rotateX(PI*0.35)
    
    // Sway from side to side each step
    rotateZ(sin((0.5+linearStepProgress) * PI) * stepSide * PI * 0.008)
    
    // Jerk a bit at each footstep
    rotateZ(
      sin((Ease.easeInOutQuad(linearStepProgress) + 0.5) * TWO_PI)
        * stepSide * PI * 0.0025
    )
    
    // Extra motion
    const fiveStep = (millis() % (5*stepTime)) / (5*stepTime)
    const fourStep = (millis() % (4*stepTime)) / (4*stepTime)
    translate(
      10*sin(fiveStep * TWO_PI),
      20*cos(fourStep * TWO_PI),
      30*sin(fiveStep*TWO_PI+300)
    )
    
    noLights()
    push()
    fill(255)
    translate(0, -2500, 0)
    sphere(100)
    pop()
    
    pointLight(255, 255, 255, 0, -900, -400)

    // The ladder
    push()
    fill(180)
    
    // The left/right vertical bars
    for (const side of [-1, 1]) {
      push()
      translate(side * 90, -900, 0)
      cylinder(15, 3000)
      pop()
    }
    
    // The crossbeams
    translate(0, -stepProgress * stepSeparation, 0)
    for (let i = -18; i < 4; i++) {
      push()
      translate(0, i * stepSeparation, 0)
      rotateZ(PI/2)
      cylinder(12, 180)
      pop()
    }
    pop()
    
    pop()
  })
  
  clear()

  push()

  noStroke()
  rectMode(CENTER)
  shader(blurShader)
  _renderer.getTexture(fbo.depth).setInterpolation(
    _renderer.GL.NEAREST,
    _renderer.GL.NEAREST
  );
  blurShader.setUniform('uImg', fbo.color)
  blurShader.setUniform('uDepth', fbo.depth)
  blurShader.setUniform('uSize', [width, height])
  // try replacing blurIntensity with 0 to see an unblurred version
  blurShader.setUniform('uIntensity', blurIntensity)
  blurShader.setUniform('uNumSamples', 15)
  blurShader.setUniform('uTargetZ', targetDepth)
  blurShader.setUniform('uNear', near)
  blurShader.setUniform('uFar', far)
  
  
  rect(0, 0, width, -height)
  pop()
}