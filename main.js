function StartClassification()
{
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xt1QPIEGV/model.json', modelReady);
}
    
function modelReady()
{
    classifier.classify(gotResults);
}