// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        if (choices[i].value == 'c5') {
            c5score = c5score + 1;
          }
        // 
      }
    }
    
    
    var maxscore = Math.max(c1score,c2score,c3score,c4score,c5score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are  in great shape congrates.";
    }
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerbox.innerHTML = "you need to take care of your health more check my articals for some ideas";
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You can do better";
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "You are not healthy Enough";
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
        answerbox.innerHTML = "You are not healthy you need to stop the bad habits";
      }
    // 
  }
  
  // the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }
