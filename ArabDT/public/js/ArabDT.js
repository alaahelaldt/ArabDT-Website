// Menu Drop Down Services
function myFunction() {
	document.getElementById("myServiceDropdown").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('#ServiceDown')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

// Menu Drop Down Language
function myEnFunction() {
	document.getElementById("myEnDropdown").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('#EnDown')) {
		var Endropdowns = document.getElementById("myEnDropdown");
		var i;
		for (i = 0; i < Endropdowns.length; i++) {
			var OpenDropdown = Endropdowns[i];
			if (OpenDropdown.classList.contains('show')) {
				OpenDropdown.classList.remove('show');
			}
		}
	}
}

// Header Nav Bar
$(document).ready(function () {
	$('sf-menu li a').click(function () {
		$('li a').removeClass("active");
		$(this).addClass("active");
	});
});

// Career Details Link Using JS
function GoToDetails() {
	window.location.href = 'CareerDetails.html';
}

// Footer Button
var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});

