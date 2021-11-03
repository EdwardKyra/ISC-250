

function grab(id){
    return document.getElementById(id);
}

// checking if addition is accurate 
function checkAddition(op1, op1, ans){
    return (op1 + op1) == ans;
}

function concatination( )

function check(){
                
    //gather the data from the inputs on the page
    var op1 = parseInt(grab("add").value);
    var op2 = parseInt(grab("concat").value);
    var ans = parseInt(grab("ans").value);
    
    //store the references to the "feedback" header objects
                //so we can display things to the user later
                var fb = grab("feedback");
                

                //check the math for each operation, and store the true/false result
                var plus_correct    = checkAddition(        op1, op1, ans);

                if (plus_correct){
                    fb.innerHTML = "correct!";
                    fb.style.color = "green";
                } else {
                    fb.innerHTML = "incorrect";
                    fb.style.color = "red";
                }
                }