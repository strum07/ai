// JavaScript Document
var str1;
var percentage;

var date1 = new Date();

percentage = (opener.totalScore)/60;
percentage = percentage * 100;
str1 = '<table width="95%"  border="0">';
str1 += '<tr><td width="28%" height="300" rowspan="9"><img src="images/aiot_logo4scorepage.gif" width="113" height="300"></td><td width="42%" height="30" class="nav style26">Section</td><td width="30%" class="nav style26">Score</td></tr>';
str1 += '<tr><td height="35" class="Verdana12bold">1. Academic Dishonesty – Definition &nbsp;&nbsp;&nbsp;&nbsp;and Types </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[0] + '</td></tr>';
str1 += '<tr><td height="35" class="Verdana12bold">2. Causes for Academic Dishonesty </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[1] + '</td></tr>';
str1 += '<tr><td height="36" class="Verdana12bold">3. Consequences for Academic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dishonesty </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[2] + '</td></tr>';
str1 += '<tr><td height="38" class="Verdana12bold">4. Cheating, Fabrication, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falsification and Sabotage </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[3] + '</td></tr>';
str1 += '<tr><td height="34" class="Verdana12bold">5. Plagiarism </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[4] + '</td></tr>';
str1 += '<tr><td height="34" class="Verdana12bold">6. Protecting Yourself  </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.quizScore[5] + '</td></tr>';
str1 += '<tr><td height="15" class="Verdana12bold"></td><td class="Verdana12bold">&nbsp;</td></tr>';
str1 += '<tr><td height="16" class="Verdana12bold">Total Score : ' + opener.totalScore + '/60</td><td height="16" class="Verdana12bold">Percentage : ' + Math.round(percentage)+ ' %</td></tr>';
str1 += '<tr><td height="16" class="Verdana12bold">Start Time : ' + opener.hours + ':' + opener.minutes + ':' + opener.seconds + ' </td><td height="16" class="Verdana12bold">Completion Time : ' + date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds() + ' </td></tr>';
str1 += '<tr><td height="47" colspan="2" class="Verdana12bold"><div align="center" id="printlogo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" name="Submit" value="Print Scores" onClick="window.print();"></div></td></tr></table>';


for(i = 0; i < 9; i++)
{
	   opener.quizScore[i] = -1;
}


function getCertificate()
{
		window.location.replace("certInfo.htm");
}

if(opener.totalScore >= 1)
{
	
	str1 = str1 + '<br /><div align="center" id="printlogo1" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click the button below to get your certificate <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Get Certificate" onClick="getCertificate()"></div>';
}

document.write(str1);