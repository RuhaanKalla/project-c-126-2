music1 = "";
music2 = "";
rightWristX = 0;
rightWristy = 0;
leftWristX = 0;
leftWristy = 0;
leftWristscore = 0;
rightWristscore = 0;
status1 = "";
status2 = "";
function preload(){
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
   posenet = ml5.poseNet(video , modelLoaded);
   posenet.on("pose" , gotPoses);
}

function draw(){
    image(video,0,0,500,400);
    fill("red");
    stroke("red");
    status1 = music1.isPlaying();
if(leftWristscore > 0.2){
    circle(leftWristX,leftWristy,20);
    music2.stop();
     if(status1 = "false"){
       music1.play();
       document.getElementById("speed").innerHTML = "Harry Potter theme song"
     }

     status2 = music2.isPlaying();
if(rightWristscore > 0.2){
   circle(rightWristX,rightWristy,20);
   music1.stop();
     if(status2 = "false"){
       music2.play();
       document.getElementById("speed").innerHTML = "Peter Pan song"
     }
    
}     
     
    }
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        leftWristscore = results[0].pose.keypoints[9].score;
        rightWristscore = results[0].pose.keypoints[10].score;
        console.log("right wristx = " + rightWristX + "right wristy = " + rightWristy + "left wristx = " + leftWristX + "left wristy = " + leftWristy);
    }
}
