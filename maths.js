var answer;
var score = 0;
var backgroundImages = [];
function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
  const prediction = predictImage();
  console.log(`Answer is ${answer}, Prediction is ${prediction}`);

  if(prediction == answer){
    score++;
    console.log(`Correct, Score is: ${score}`);
    if (score < 7){
      backgroundImages.push(`url('images/background${score}.svg')`)
    }else{
      alert("Congratulation You won this games");
      score = 0;
      backgroundImages = [];
    }
    document.body.style.backgroundImage = backgroundImages;
  }else{
    if(score > 0){
      setTimeout(function(){alert("Congratulation You won this games");}, 3000);
      backgroundImages.pop();
      score--;
    }

    console.log(`Wrong, Score is: ${score}`);
  }

}
