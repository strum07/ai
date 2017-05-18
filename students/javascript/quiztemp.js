// JavaScript Document
var quizScore, totalScore, count, flag1;
var fname, lname, dept, univ;
var hours, minutes, seconds;

quizScore = new Array();
totalScore = 0;
count = 0;
flag1 = 0;

hours = opener.opener.hours;
minutes = opener.opener.minutes;
seconds = opener.opener.seconds;

finalOutput = ' ';

for(i = 0; i < 9; i++)
{
	quizScore[i] = -1;
}

function MM_openBrWindow(theURL,winName,features) { 
  window.open(theURL,winName,features);
}

function getFinalScore()
{
	MM_openBrWindow('../../finalscore.htm','','scrollbars=yes,resizable=yes,width=700,height=500');
}

function updateParScore(tempScore)
{
	opener.execScript("updateScore(" + tempScore + ");","Javascript");
	
	for(i = 0; i < 9; i++)
	{
		quizScore[i] = opener.quizScore[i];
	}
	
	totalScore = opener.totalScore;
	count = opener.count;
	
	if(count == 1)
	{
        finalOutput = finalOutput + '<br /><input type="button" value="Final Score" id="fsbtn" onClick="parent.getFinalScore()">';
	}

}
