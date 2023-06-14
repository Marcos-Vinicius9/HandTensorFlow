const {
  GestureDescription,
  Finger,
  FingerCurl,
  FingerDirection
} = window.fp;

const letterALibras = new GestureDescription('Letra A - Libras');
const letterBLibras = new GestureDescription('Letra B - Libras');
const letterClibras = new GestureDescription('Letra C - Libras');
const letterDlibras = new GestureDescription('Letra D - Libras');
const letterElibras = new GestureDescription('Letra E - Libras');
const letterFlibras = new GestureDescription('Letra F - Libras');
const letterGlibras = new GestureDescription('Letra G - Libras');
const letterHlibras = new GestureDescription('Letra H - Libras');
const letterIlibras = new GestureDescription('Letra I - Libras');
const letterJLibras = new GestureDescription('Letra J - Libras');
const letterKlibras = new GestureDescription('Letra K - Libras');
const letterLLibras = new GestureDescription('Letra L - Libras');
const letterMLibras = new GestureDescription('Letra M - Libras');
const letterNLibras = new GestureDescription('Letra N - Libras');
const letterOLibras = new GestureDescription('Letra O - Libras');
const letterPLibras = new GestureDescription('Letra P - Libras');
const letterQLibras = new GestureDescription('Letra Q - Libras');
const letterRLibras = new GestureDescription('Letra R - Libras');
const letterSLibras = new GestureDescription('Letra S - Libras');
const letterULibras = new GestureDescription('Letra U - Libras');
const letterVLibras = new GestureDescription('Letra V - Libras');
const letterWLibras = new GestureDescription('Letra W - Libras');
const letterYLibras = new GestureDescription('Letra Y - Libras');
const okGesture = new GestureDescription('Perfeito'); // 👌
const loveYou = new GestureDescription('TE AMO - LIBRAS');
const shakaGesture = new GestureDescription('Ligar/Beleza'); // 🤙
const rock = new GestureDescription('ROCK');
const scissorsGesture = new GestureDescription('PAZ E AMOR'); // ✌️


rock.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
rock.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
rock.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
rock.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
rock.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);




//Letter A
letterALibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterALibras.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterALibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterALibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterALibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter B

letterBLibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterBLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterBLibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterBLibras.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
letterBLibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

//Letter C
letterClibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterClibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterClibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterClibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterClibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
letterClibras.addDirection(Finger.Thumb, FingerDirection.HorizontalRightRight, 1.0)
letterClibras.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
letterClibras.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0)
letterClibras.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0)
letterClibras.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0)

//Letter D
letterDlibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterDlibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterDlibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterDlibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterDlibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)

//Letter E
letterElibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterElibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterElibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterElibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterElibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
//Letter F
letterFlibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterFlibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterFlibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterFlibras.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
letterFlibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)


//Letter G
letterGlibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterGlibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterGlibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterGlibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterGlibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)


//Letter H
letterHlibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterHlibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterHlibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterHlibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterHlibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter I
letterIlibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterIlibras.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterIlibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterIlibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterIlibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

//Letter J
letterJLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterJLibras.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterJLibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterJLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterJLibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)

//Letter k
letterKlibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterKlibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterKlibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterKlibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterKlibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter M
letterMLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterMLibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterMLibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterMLibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterMLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)


//Letter L
letterLLibras.addCurl(Finger.Thumb,FingerCurl.NoCurl, 1.0)
letterLLibras.addCurl(Finger.Index,FingerCurl.NoCurl, 1.0)
letterLLibras.addCurl(Finger.Middle,FingerCurl.FullCurl, 1.0)
letterLLibras.addCurl(Finger.Ring,FingerCurl.FullCurl, 1.0)
letterLLibras.addCurl(Finger.Thumb,FingerCurl.FullCurl, 1.0)
letterLLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
letterLLibras.addDirection(Finger.Thumb, FingerDirection.HorizontalRight)



//Letter N
letterNLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterNLibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterNLibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterNLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterNLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter O
letterOLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterOLibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterOLibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterOLibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterOLibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
letterOLibras.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)
letterOLibras.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
letterOLibras.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0)
letterOLibras.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0)
letterOLibras.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0)

//Letter Q
letterQLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterQLibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
letterQLibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterQLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterQLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter R
letterRLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterRLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterRLibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterRLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterRLibras.addCurl(Finger.Pinky, FingerCurl.FullfCurl, 1.0)


//Letter S
letterSLibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterSLibras.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterSLibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterSLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterSLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter U
letterULibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterULibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterULibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterULibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterULibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
//Letter V
letterVLibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterVLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterVLibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterVLibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
letterVLibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)

//Letter W
letterWLibras.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterWLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterWLibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterWLibras.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
letterWLibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)

//Letter P
letterPLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterPLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterPLibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
letterPLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterPLibras.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

//Letter Y
letterYLibras.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterYLibras.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterYLibras.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterYLibras.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterYLibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

//Love you
loveYou.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYou.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYou.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
loveYou.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
loveYou.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

//Perfeito
// Dedo polegar: completamente curvado
okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
okGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
okGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Outros dedos: sem curvatura
for (let finger of [Finger.Index, Finger.Middle]) {
  okGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  okGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}

//Ligar
// Dedo polegar: esticado
shakaGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// Dedo mínimo: completamente curvado
shakaGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Outros dedos: sem curvatura
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
    shakaGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    shakaGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

const gestures = [

  letterALibras, letterBLibras, letterClibras, letterDlibras, letterElibras, letterFlibras, letterGlibras, letterHlibras, letterIlibras, letterKlibras, letterLLibras, letterMLibras, letterNLibras, letterOLibras, letterQLibras, letterRLibras, letterSLibras, letterULibras, letterVLibras, letterWLibras, letterPLibras, letterYLibras, loveYou, okGesture, scissorsGesture,shakaGesture,rock

]

export {
  gestures
}