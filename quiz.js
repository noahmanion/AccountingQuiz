var score = 1;
$("#quizForm").on('submit', function() {
  var q1 = parseInt(document.forms['quizForm']['q1'].value);
  var q2 = parseInt(document.forms['quizForm']['q2'].value);
  var q3 = parseInt(document.forms['quizForm']['q3'].value);
  var q4 = parseInt(document.forms['quizForm']['q4'].value);
  var q5 = parseInt(document.forms['quizForm']['q5'].value);
  var q6 = parseInt(document.forms['quizForm']['q6'].value);
  var q7 = parseInt(document.forms['quizForm']['q7'].value);
  var q8 = parseInt(document.forms['quizForm']['q8'].value);
  var q9 = parseInt(document.forms['quizForm']['q9'].value);
  var q10 = parseInt(document.forms['quizForm']['q10'].value);

  //console.log("q1 is " + q1 + " q2 is " + q2 + " q3 is " + q3 + " q4 is " + q4 + " q5 is " + q5);
  
  //Validation
  for(i=1; i<=10; i++) {
    if(eval('q'+i) == null ) {
      alert('You missed question #' + i);
      return false;
    }
  } 
  var sum = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
  var score = sum/10;
  //console.log(score);
      if (score >= 5) {
        score = "A+";
        console.log(score);
      } else if (score >= 4.5) {
        score = "A";
        console.log(score);
      } else if (score >= 4) {
        score = "B";
        console.log(score); 
      } else if (score >= 3.5) {
        score = "C";
        console.log(score); 
      } else if (score >= 3 ) {
        score = "D";
        console.log(score); 
      } else if (score >= 0 ) {
        score = "F";
        console.log(score);
      } else {
        alert("I think you missed a question, please check your answers")
        return false
      }
      $("#results").show();
        //$('<p>'+score+'</p>').appendTo('#results');
        document.getElementById("score").value = score;
        document.getElementById("a1").value = q1
        document.getElementById("a2").value = q2
        document.getElementById("a3").value = q3
        document.getElementById("a4").value = q4
        document.getElementById("a5").value = q5
        document.getElementById("a6").value = q6
        document.getElementById("a7").value = q7
        document.getElementById("a8").value = q8
        document.getElementById("a9").value = q9
        document.getElementById("a10").value = q10


      return false;

})