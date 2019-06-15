var shortcuts = true;
var show = false;
var logistic = true;
var span = document.getElementsByClassName("num");
function clear_form()
{
 document.getElementById("chat").reset();
}
for(var i = 0;i<span.length;i++)
	{
		if(span[i].innerHTML=="0"){
			span[i].style.color = "#777";
		}
	}
function toggleShortcut() {
	if(shortcuts == true) {
		$("#hide").show(700);
		$("#hide2").show(700);
		shortcuts = false;
	}
	else {
		$("#hide").hide(700);
		$("#hide2").hide(700);
		shortcuts = true;
	}
}
function toggle() {
	
	$(".form-div").show(700);
	$(".chatbtn").hide(700)
	var newHeight = 400;
    $(".chatbot").height(newHeight);

    $(".form-divresult").show(700);
	$(".chatbtnresult").hide(700)
	var newHeight = 400;
    $(".chatbotresult").height(newHeight);
	
}
function invtoggle() {
	
	$(".form-div").hide(700);
	$(".chatbtn").show(700)
	var newHeight = 50;
    $(".chatbot").height(newHeight);

    $(".form-divresult").hide(700);
	$(".chatbtnresult").show(700)
	var newHeight = 50;
    $(".chatbotresult").height(newHeight);
	
}

function clearform() {	
	$("#exampleInputPassword1").val('');
	$("#exampleInputEmail1").val('');
		
}
function logistics() {
	var myBtn2 = document.getElementById("more2");
	if(logistic === true) {
		$(".logistic-hide").show(700);
		myBtn2.innerHTML = "less";
		logistic = false;
	}
	else {
		$(".logistic-hide").hide(700);
		myBtn2.innerHTML = "More";
		logistic = true;
	}
}