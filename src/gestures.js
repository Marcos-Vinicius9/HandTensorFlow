const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const letterBLibras = new GestureDescription('Letra B - Libras');

const letterClibras = new GestureDescription('Letra C - Libras');

  //Letter B

  letterBLibras.addCurl(Finger.Thumb,FingerCurl.HalfCurl, 1.0)
  letterBLibras.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
  letterBLibras.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
  letterBLibras.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
  letterBLibras.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

//Letter C
  letterClibras.addCurl(Finger.Thumb,FingerCurl.NoCurl, 1.0)
  letterClibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)




const gestures = [

  letterBLibras,letterClibras,
]

export {
    gestures
}