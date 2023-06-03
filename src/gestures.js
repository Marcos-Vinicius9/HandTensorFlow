const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // 🙅
const thumbsUpGesture = new GestureDescription('thumbs_up'); // 👍
const middleFingerGesture = new GestureDescription('middle_finger'); // 🖕
const shakaGesture = new GestureDescription('shaka'); // 🤙
const pointingRightGesture = new GestureDescription('\u2764\ufe0f'); // 👉
const heartGesture = new GestureDescription('heart'); // ❤️
const okGesture = new GestureDescription('ok'); // 👌


// Dedo polegar: esticado
heartGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// Dedo mínimo: esticado
heartGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Outros dedos: curvatura média
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  heartGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}

const letterDlibras = new GestureDescription('palm_up_hand');





// Dedo polegar: completamente curvado
okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
okGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
okGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Outros dedos: sem curvatura
for (let finger of [Finger.Index, Finger.Middle]) {
  okGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  okGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
// Dedo polegar: esticado
shakaGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// Dedo mínimo: completamente curvado
shakaGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Outros dedos: sem curvatura
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    shakaGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    shakaGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Dedo polegar: esticado e indicador
pointingRightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pointingRightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
for (let finger of [Finger.Pinky, Finger.Middle, Finger.Ring]) {
  pointingRightGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  pointingRightGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
// Dedo médio: completamente esticado
middleFingerGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// Outros dedos: completamente curvados
for(let finger of [Finger.Thumb, Finger.Index, Finger.Ring, Finger.Pinky]) {
    middleFingerGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    middleFingerGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);


for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}



// Paper
// -----------------------------------------------------------------------------


for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------


scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);


scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);


scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont 🙅
//------------------------------------------------------------------------------

for(const finger of Finger.all) {
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
}

//Letter D
  letterDlibras.addCurl(Finger.Thumb,FingerCurl.NoCurl, 1.0)
  letterDlibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
  letterDlibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
  letterDlibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
  letterDlibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)




const gestures = [

  rockGesture, paperGesture, scissorsGesture, dontGesture,thumbsUpGesture,middleFingerGesture,shakaGesture,pointingRightGesture,letterDlibras,heartGesture,okGesture
]

export {
    gestures
}