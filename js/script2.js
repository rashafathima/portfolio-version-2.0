
var aText = new Array(
"<br> > <b>getEducation() ... </b>",
"Information science and Engineering from Sahyadri College of Engineering and Management with a CGPA of 8.84(2019 - 2023)",
"<br>",
"> <b>getExperience() ... </b>",
"Worked as a SDE Intern at ARS Softech for a duration of 2 months (Mar 2023 - May 2023) and as a freelance QA Manual Tester for a month (Nov - Dec 2022)"
);

var iSpeed = 35;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 700);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

setTimeout("typewriter()", 10000);
