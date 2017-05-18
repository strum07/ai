// JavaScript Document
var str1;
var percentage;

var date1 = new Date();

var today = new Date()
var month = today.getMonth() + 1
var day = today.getDate()
var year = today.getFullYear()
var s = "/"

percentage = (opener.opener.totalScore)/60;
percentage = percentage * 100;
str1 = '<table width="95%"  border="0">';
str1 += '<tr><td width="28%" height="300" rowspan="9"><img src="images/aiot_logo4scorepage.gif" width="113" height="300"></td><td width="42%" height="30" class="nav style26">Section</td><td width="30%" class="nav style26">Score</td></tr>';
str1 += '<tr><td height="35" class="Verdana12bold">1. Academic Dishonesty – Definition and Types </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[0] + '</td></tr>';
str1 += '<tr><td height="35" class="Verdana12bold">2. Causes for Academic Dishonesty </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[1] + '</td></tr>';
str1 += '<tr><td height="36" class="Verdana12bold">3. Consequences for Academic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dishonesty </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[2] + '</td></tr>';
str1 += '<tr><td height="38" class="Verdana12bold">4. Cheating, Fabrication, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falsification and Sabotage </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[3] + '</td></tr>';
str1 += '<tr><td height="34" class="Verdana12bold">5. Plagiarism </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[4] + '</td></tr>';
str1 += '<tr><td height="34" class="Verdana12bold">6. Protecting Yourself  </td><td width="36%" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + opener.opener.quizScore[5] + '</td></tr>';
str1 += '<tr><td height="15" class="Verdana12bold"></td><td class="Verdana12bold">&nbsp;</td></tr>';
str1 += '<tr><td height="16" class="Verdana12bold">Total Score : ' + opener.opener.totalScore + '/60</td><td height="16" class="Verdana12bold">Percentage : ' + Math.round(percentage)+ ' %</td></tr>';
str1 += '<tr><td height="16" class="Verdana12bold">&nbsp;</td><td height="16" class="Verdana12bold">Start Time : ' + opener.opener.hours + ':' + opener.opener.minutes + ':' + opener.opener.seconds + ' </td><td height="16" class="Verdana12bold">Completion Time : ' + date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds() + ' </td></tr>';
str1 += '<tr><td height="47" colspan="2" class="Verdana12bold"><div id="printlogo" align="right"><input type="submit" name="Submit" value="Print Scores" onClick="window.print();"><img src="../images/spacer_10px.gif" alt="" width="25" height="10"></div></td></tr></table>';

var finalStr;
var date1 = new Date();

finalStr = '<table width="100%"  border="0">';
<!--finalStr += '<tr><td><div align="center"><img src="images/certificatetop.jpg" width="768" height="356"></div></td></tr>';
finalStr += '<tr><td height="35" class="Verdana12bold"><div align="center"><span class="style2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME:&nbsp;&nbsp;' + opener.fname + ' ' + opener.lname + '</span></div></td></tr>';
finalStr += '<tr><td height="34" class="Verdana12bold"><div align="center"><span class="style4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DEPARTMENT:&nbsp;&nbsp;' + opener.dept + '</span></div></td></tr>';
finalStr += '<tr><td><div align="center" class="class="Verdana12bold"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; has scored the following scores in each topic on ' + month + s + day + s + year +'.</div></td></tr></table>';
<!--finalStr += '<tr><td height="22"><div align="center" class="Verdana12bold">on ' + date1.getMonth() + '/' +  date1.getDate() + '/' + date1.getYear() + ' at ' + date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds() + ' C.S.T. </div></td></tr>';
<!--finalStr += '<tr><td><div align="center"><img src="images/certificatebottom.jpg" width="768" height="70"></div></td></tr>';
<!--finalStr += '<tr><td><div align="center" id="printlogo"><input type="submit" name="Submit" value="Print Certificate" onClick="window.print();"></div></td></tr></table>';


document.write(finalStr);
for(i = 0; i < 9; i++)
{
	   opener.quizScore[i] = -1;
}

function getCertificate()
{
		window.location.replace("finalcert.htm");
}

if(opener.totalScore >= 42)
{
	
	str1 = str1 + '<br /><div align="center" id="printlogo1" class="Verdana12bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click the button below to get your certificate <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Get Certificate" onClick="getCertificate()"></div>';
}

document.write(str1);