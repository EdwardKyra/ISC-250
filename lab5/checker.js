function check()
{
    var testInput = document.getElementById('ans').value

    if(testInput == 4 && document.getElementById('add').checked)
    {
            document.getElementById('feedback').innerHTML = "Correct!"
    }
    else if(testInput == 22 && document.getElementById('concat').checked)
    {
            document.getElementById('feedback').innerHTML = "Correct!"
    }
    else
    {
            document.getElementById('feedback').innerHTML = "Incorrect!"
    }

}