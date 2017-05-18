// JavaScript Document
var quizScore, totalScore, count;
var hours, minutes, seconds;

var date1;
date1 = new Date();

quizScore = new Array();
totalScore = 0;
count = 0;

hours = -1;
minutes = -1;
seconds = -1;

if(opener.hours == -1)
{
	opener.hours = date1.getHours();
	hours = opener.hours;
}	
if(opener.minutes == -1)
{
	opener.minutes = date1.getMinutes();
	minutes = opener.minutes;
}	
if(opener.seconds == -1)
{
	opener.seconds = date1.getSeconds();
	seconds = opener.seconds;
}	

for(i = 0; i < 9; i++)
{
	quizScore[i] = -1;
}

function updateScore(newScore)
{
	//opener.execScript("updateScore(3," + newScore + ");", "Javascript");
	opener.updateScore(3,newScore);
	for(i = 0; i < 9; i++)
	{
		quizScore[i] = opener.quizScore[i];
	}
	
	totalScore = opener.totalScore;
	count = opener.count;
}

