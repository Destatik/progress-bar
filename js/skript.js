let valueWith = $(".progress-bar").css("width");

function addWidth(){
	valueWith = parseInt(valueWith) + 1;
	$(".progress-bar").css({"width":`${valueWith}`});
	console.log(valueWith);
};

function init(){
	$(".batn1").click(addWidth)
};

$(document).ready(init);

function addWidth3(){
	valueWith = parseInt(valueWith) + 3;
	$(".progress-bar").css({"width":`${valueWith}`});
	console.log(valueWith);
};

function init1(){
	$(".batn2").click(addWidth3)
};
$(document).ready(init1);

function addWidth7(){
	valueWith = parseInt(valueWith) + 7;
	$(".progress-bar").css({"width":`${valueWith}`});
	console.log(valueWith);
};

function init2(){
	$(".batn3").click(addWidth7)
};

$(document).ready(init2);