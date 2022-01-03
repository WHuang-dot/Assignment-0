function titleCaseEdit(title) {
let lowertitle = title.split(" ");

for (let i = 0; i < lowertitle.length; i++){
	lowertitle[i] =lowertitle[i][0].toUpperCase() + lowertitle[i].substring(1); //change to uppercase using string manipulation
}

let upperedTitle = lowertitle.join(" "); //add back

return upperedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;