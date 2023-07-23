function checkLogin(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "agroplantadmin" && password === "dumlupinar") {
		location.href = "./views/Admin/CRUD.html";
	} else {
		document.getElementById("error-msg").innerHTML = "Kullanıcı adı veya şifre yanlış.";
	}
}