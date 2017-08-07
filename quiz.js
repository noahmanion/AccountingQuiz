var score = 1;
$("#quizForm").on('submit', function() {
   //console.log("starting")
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
  
  /** Validation
  for(i=1; i<=total; i++) {
    if(eval('q'+i) == null || eval('q'+i) == '') {
      console.log('You missed question #' + i);
      return false;
    }
  } **/
  var sum = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
  var score = sum/10;
  //console.log(score);
      if (score >= 1) {
        $("#results").show();
        //$('<p>'+score+'</p>').appendTo('#results');
        document.getElementById("score").value = score;

        console.log(score);
      } else {
        alert("I think you missed a question, please check your answers")
      }

      return false;

})