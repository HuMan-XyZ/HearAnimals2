dog = 0
cat = 0

function Start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YmH_TGBGk/model.json", modelReady)
  
}

function modelReady() {
    classifier.classify(gotResults)
}


function gotResults(error, results) {
    console.log("aaaa")
    if (error) {
        console.error(error)
    } else {
        console.log(results) 
        rgb_r = Math.floor(Math.random() * 255) + 1
        rgb_g = Math.floor(Math.random() * 255) + 1
        rgb_b = Math.floor(Math.random() * 255) + 1


        document.getElementById("heard").innerHTML = "Sound Heard: " + results[0].label
        document.getElementById("accuracy").innerHTML = "Hearing Accuracy(100% Not Deaf): " + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("accuracy").style.color = "rgb(" + rgb_r + ", " + rgb_g + "," + rgb_b + ")"
        document.getElementById("heard").style.color = "rgb(" + rgb_r + ", " + rgb_g + "," + rgb_b + ")"

        if (results[0].label == "Dog Barking"){
            document.getElementById("imge").src = "dog.png"
        }

      else if (results[0].label == "Cat Meowing"){
            document.getElementById("imge").src = "cat.png"
        }

     else {
        
            document.getElementById("imge").src = "ear.png"
        
     }

    }
}