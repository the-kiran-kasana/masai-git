// Problem Statement:

// Write a program that classifies students based on their scores stored in an object. The object contains student names as keys and their scores as values. You need to print each student’s name along with their grade based on the following conditions:

let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
for(let Score in studentScores)  
{
    if(studentScores[Score] >= 90)
    {
       console.log(Score + " A")
    }
    else{
        if((studentScores[Score] >= 80) && (studentScores[Score] < 90))
        {
            console.log(Score + " B")
        }
        else{
            if((studentScores[Score] >= 70) && (studentScores[Score] < 80))
            {
                console.log(Score + " C")
            }
            else{
                if((studentScores[Score] >= 60) && (studentScores[Score] < 70))
                {
                    console.log(Score + " D")
                }
                else{
                    if(studentScores[Score] < 60 )
                    {
                        console.log(Score + " F")
                    }
                }
            }
        }
    }
}