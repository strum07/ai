// JavaScript Document
var quizScore;
var totalScore;
var count;
var hours, minutes, seconds;

hours = -1;
minutes = -1;
seconds = -1;


quizScore = new Array();
totalScore = 0;
count = 0;
for(i = 0; i < 9; i++)
{
	quizScore[i] = -1;
}

function checkCertificate()
{
	count = 0;
	totalScore = 0;
	for(i = 0; i < 9; i++)
		{
			if(quizScore[i] != -1)
				{
					count++;
					totalScore = totalScore + quizScore[i];
				}
		}			


}


function updateScore(index1, newScore)
{
    for(i = 0; i < 9; i++)
	{
		if(quizScore[index1-1] == -1)
		{
			quizScore[index1-1] = newScore;
			checkCertificate();
			//document.getElementById('txt1').value = totalScore + " count=" + count;		
		}		
	}
}

