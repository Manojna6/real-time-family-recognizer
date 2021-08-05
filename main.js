function preload(){

}
function setup(){
    canvas= createCanvas(300,300);
    video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lA9---Id9/model.json', modelLoaded)
}
function draw(){
    image(video, 0, 0, 400, 400);
    classifier.classify(video, show);
}
function modelLoaded(){
    console.log('model loaded');
}
function show(error, results){
    if (error){
       console.log(error);
    } else {
       document.getElementById("label").innerHTML = results[0].label;
       document.getElementById("confidence").innerHTML = results[0].confidence;
       console.log(results);
    }
}
