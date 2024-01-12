$(document).ready(function(){
	alert("a")
	changeNavebar();

	channelSplit(document.getElementById("sologanChanel"));

	var _offset = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 50 : 20;

	$("nav").removeClass("scrolled");

	window.onscroll = function () {
		scaleLogo();
	};

	$("#btnContactUs").click(function () {
		var url = "https://www.facebook.com/blueeventagency/";
		window.open(url, '_blank');
	});
	
	$("a[rel='relPageScroll']").mPageScroll2id({
        offset: _offset
    });

	// var form = document.getElementById("formMail");
	// form.addEventListener('submit', submitFeedback);
});

function changeNavebar() {
	var fixedNav = $('.navbar-fixed-top');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			fixedNav.addClass('scrolled');
			$('body').addClass('scrolled');
		} else {
			fixedNav.removeClass('scrolled');
			$('body').removeClass('scrolled');
		}
	});
}

function scaleLogo() {
	var logo = document.getElementById("imgLogo")
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		logo.style.width = '110px';
	} else {
		logo.style.width = '180px';
	}
}

function submitFeedback(event) {
	event.preventDefault();

	$('#resultSendMail').empty();

	if ($('#txtMailName').val().trim() == "" || $('#txtMailFrom').val().trim() == "") {
		return;
	}

	$.ajax({
		url: "/api/email/feedback",
		type: "POST",
		data: $('#formMail').serialize(),
		success: function (response) {
			if (response == "0") {
				sendMailSuccess();
			} else {
				sendMailFailed();
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
			sendMailFailed();
		}
	});
}

function sendMailSuccess() {
	$('#txtMailName').val("");
	$('#txtMailFrom').val("");
	$('#txtMailSubject').val("");
	$('#txtMailBody').val("");
	$('#resultSendMail').append("<div class='alert alert-success' role='alert'>Your email has been sent successfully.</div>");
}

function sendMailFailed() {
	$('#txtMailName').val("");
	$('#txtMailFrom').val("");
	$('#txtMailSubject').val("");
	$('#txtMailBody').val("");
	$('#resultSendMail').append("<div class='alert alert-danger' role='alert'>Sorry, server is busy. Please try again later.</div>");
}

function channelSplit(elem) {
	if (elem) {
		const inner = elem.innerHTML;
		elem.innerHTML = "";

		const spanHidden = document.createElement("span");
		spanHidden.classList.add("channel-split-static");
		spanHidden.innerHTML = inner;
		elem.appendChild(spanHidden);

		["red", "green", "blue"].forEach(x => {
			const span = document.createElement("span");
			span.classList.add("channel-split");
			span.classList.add(`channel-split-${x}`);
			span.innerHTML = inner;
			elem.appendChild(span);
		});
	}
}
