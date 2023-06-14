const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const letterClibras = new GestureDescription('Letra C - Libras');

//Letter C
  letterClibras.addCurl(Finger.Thumb,FingerCurl.NoCurl, 1.0)
  letterClibras.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
  letterClibras.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)




const gestures = [

  letterClibras
]

export {
    gestures
}