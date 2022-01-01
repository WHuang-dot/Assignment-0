function titleCaseEdit(title) {
let lowertitle = title.split(" ");

for (let i = 0; i < lowertitle.length; i++){
	lowertitle[i] =lowertitle[i][0].toUpperCase() + lowertitle[i].substring(1);
}

let upperedTitle = lowertitle.join(" ");

return upperedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;