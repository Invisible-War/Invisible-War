alert("You have been drafted to fight in the Invisible War. Use arrow keys to move and space to launch a bullet. When you hear a boing sound that is not yours, you will have 5 seconds to run until you are out of range of your target. Use the coordinates on the left hand side to help you. The range is how far back (-Z) you can be, however, your X must be exact. Kill the 25 enemies to get to beat the game. Good luck...");
var fight = false;
var username;
var users = [];
var winners = 0;
var players = [];
var main;
var range = 200;
var ammo = 20;
let keysPressed = {};
var you;
var matrix2;
var health = document.getElementById("health");
var matrix4;
var matrix = new WebKitCSSMatrix(
	window.getComputedStyle(document.getElementById("bullet")).transform
);
var ps = 0;
var sol1 = document.getElementById("panther");
var matrix3;
var sold;
var p = 0;
var person;
var roomnumber = 0;
var otherplayer;








function myfunction(tree) {
	tree.src = "explosion.png";
}
function newgun() {
	matrix = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("bullet")).transform
	);
	matrix3 = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("panther")).transform
	);
	matrix4 = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("universe")).transform
	);
	if (matrix4.m41 === -1000 && matrix4.m43 === 0 && ps === 10) {
		alert("Enjoy your new gun.");
		range = 500;
		document.getElementById("range").innerHTML = "Range: 500";
		document.removeEventListener("keydown", newgun);
	}
}

function pclick() {
	document.getElementById("enemyhealth").value = 5;
	ps++;
	document.getElementById("panther").style.transform =
		"translateX(" +
		100 * Math.floor(Math.random() * 50) +
		"px) translateZ(" +
		-100 * Math.floor(Math.random() * 50) +
		"px) perspective(6000px) translateY(-300px)";
	matrix3 = new WebKitCSSMatrix(getComputedStyle(sol1).transform);
	localStorage.setItem("x", matrix3.m41);
	localStorage.setItem("z", matrix3.m43);
	localStorage.setItem("ps", ps);
	matrix4 = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("universe")).transform
	);
	console.log(ps);
	document.getElementById("enemy").innerHTML =
		"A soldier is at X: " + matrix3.m41 + " Z: " + -matrix3.m43;
	if (ps === 10) {
		alert("Go to X: 0, Z: 0 to get a sniper rifle with 500 range.");
	}
	if (ps === 25) {
		alert("Time for Level 2: Forest Wars.");
		window.location.href = "https://forest-wars.the-paperpaper.repl.co/";
	}
}

sol1 = document.getElementById("panther");

var y = 500;
var a = 0;
var b = 0;
document.getElementById("universe").style.transform =
	"translateY(" +
	y +
	"px) translateZ(" +
	a +
	"px) perspective(" +
	a * -2 +
	"px) translateX(" +
	b +
	"px)  scale3d(5,5,5)";

var ry = 0;
function kill() {
	if (ps < 25) {
		matrix = new WebKitCSSMatrix(
			window.getComputedStyle(document.getElementById("bullet")).transform
		);
		matrix4 = new WebKitCSSMatrix(
			window.getComputedStyle(document.getElementById("universe")).transform
		);
		if (range === 200) {
			setTimeout(() => {
				sol1 = document.getElementById("panther");
				matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1).transform);
				console.log(matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)));
				console.log(matrix3.m43 - -a);
				if (
					matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) >= -200 &&
					matrix3.m43 - -a >= -200 &&
					matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) < 200 &&
					matrix3.m43 - -a < 200
				) {
					document.getElementById("healthp").hidden = false;
					document.getElementById("enemyhealth").hidden = false;
					if (Math.floor(Math.random() * 10) === 1) {
						document.getElementById("shot").play();
						setTimeout(() => {
							if (
								matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) >= -200 &&
								matrix3.m43 - -a >= -200 &&
								matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) < 200 &&
								matrix3.m43 - -a < 200
							) {
								health.value--;
								if (health.value === 0) {
									alert("You died.");
									location.reload();
								}
							}
						}, 5000);
					} else {
						console.log("You Survived!");
					}
				} else {
					document.getElementById("healthp").hidden = true;
					document.getElementById("enemyhealth").hidden = true;
				}
			}, 3000);
		}
		if (range === 500) {
			setTimeout(() => {
				sol1 = document.getElementById("panther");
				matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1).transform);
				console.log(matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)));
				console.log(matrix3.m43 - -a);
				if (
					matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) >= -600 &&
					matrix3.m43 - -a >= -600 &&
					matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) < 600 &&
					matrix3.m43 - -a < 600
				) {
					document.getElementById("healthp").hidden = false;
					document.getElementById("enemyhealth").hidden = false;
					if (Math.floor(Math.random() * 10) === 1) {
						document.getElementById("shot").play();
						setTimeout(() => {
							if (
								matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) >= -600 &&
								matrix3.m43 - -a >= -600 &&
								matrix.m41 - (matrix3.m41 - (-matrix4.m41 - 1000)) < 600 &&
								matrix3.m43 - -a < 600
							) {
								health.value--;
								if (health.value === 0) {
									alert("You died.");
									location.reload();
								}
							} else {
								document.getElementById("healthp").hidden = true;
								document.getElementById("enemyhealth").hidden = true;
							}
						}, 5000);
					} else {
						console.log("You Survived!");
					}
				}
			}, 3000);
		}
	}
}
var rx = 0;
var playera = 0,
	playerb = 0;
var ry = 0;
document.getElementById("universe").style.transform =
	"translate3d(" + b + "px, " + y + "px, " + a + "px)  scale3d(5,5,5)";
var perspective = 300;
matrix4 = new WebKitCSSMatrix(
	window.getComputedStyle(document.getElementById("universe")).transform
);
targetmatrix = matrix4;
var treelist;
var treematrix;

document.addEventListener("keydown", function(e) {
	newgun();
	matrix = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("bullet")).transform
	);
	matrix4 = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("universe")).transform
	);
	sol1 = document.getElementById("panther");
	a = parseInt(a);
	b = parseInt(b);
	y = parseInt(y);
	var worldclone;
	if (e.key == "ArrowUp") {
		e.preventDefault();
		a += 50;
		playera += 50;
		document.getElementById("universe").style.transform =
			"translate3d(" + b + "px, " + y + "px, " + a + "px)  scale3d(5,5,5)";
	}
	if (e.key == "ArrowDown") {
		e.preventDefault();
		a -= 50;
		playera -= 50;
		document.getElementById("universe").style.transform =
			"translate3d(" + b + "px, " + y + "px, " + a + "px)  scale3d(5,5,5)";
	}
	if (e.key == "ArrowRight") {
		e.preventDefault();
		playerb += 50;
		b -= 50;
		document.getElementById("universe").style.transform =
			"translate3d(" + b + "px, " + y + "px, " + a + "px)  scale3d(5,5,5)";
	}
	if (e.key == "ArrowLeft") {
		e.preventDefault();
		b += 50;
		playerb -= 50;
		document.getElementById("universe").style.transform =
			"translate3d(" + b + "px, " + y + "px, " + a + "px)  scale3d(5,5,5)";
	}

	if (e.key == " ") {
		matrix = new WebKitCSSMatrix(
			window.getComputedStyle(document.getElementById("bullet")).transform
		);
		matrix4 = new WebKitCSSMatrix(
			window.getComputedStyle(document.getElementById("universe")).transform
		);

		matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1).transform);
		document.getElementById("shot").play();

		if (ammo === 0) {
			alert("No ammo. reloading in 3 seconds...");
			setTimeout(() => {
				ammo = 20;
				document.getElementById("ammo").innerHTML = "Ammo: " + ammo;
			}, 3000);
		} else {
			ammo--;
			document.getElementById("ammo").innerHTML = "Ammo: " + ammo;
			matrix = new WebKitCSSMatrix(
				window.getComputedStyle(document.getElementById("bullet")).transform
			);
			matrix4 = new WebKitCSSMatrix(
				window.getComputedStyle(document.getElementById("universe")).transform
			);

			matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1).transform);
			if (range === 200) {
				setTimeout(() => {
					if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 200
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 150
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 100
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 50
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					}
				}, 1000);
			} else if (range === 500) {
				setTimeout(() => {
					if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 500
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 450
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 400
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 350
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 300
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
						}
						pclick(sol1);
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 250
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 200
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
						}
						pclick(sol1);
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 150
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 100
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
						}
						pclick(sol1);
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a - 50
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						}
					} else if (
						matrix.m41 === matrix3.m41 - (-matrix4.m41 - 1000) &&
						matrix3.m43 === -a
					) {
						document.getElementById("enemyhealth").value--;
						if (document.getElementById("enemyhealth").value === 0) {
							pclick(sol1);
						} else {
						}
					}
				}, 1000);
			}
		}
	}
	newgun();
	matrix = new WebKitCSSMatrix(
		window.getComputedStyle(document.getElementById("bullet")).transform
	);
	matrix4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("universe")).transform
	);
	sol1 = document.getElementById("panther");
	matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1).transform);
	a = parseInt(a);
	b = parseInt(b);
	y = parseInt(y);
	you = document.getElementById("universe");
	matrix4 = new WebKitCSSMatrix(window.getComputedStyle(you).transform);
	document.getElementById("coordinates").innerHTML =
		"You are at X: " + (-matrix4.m41 - 1000) + " Z: " + matrix4.m43;
	if (ps < 25) {
		document.getElementById("enemy").innerHTML =
			"A soldier is at X: " + matrix3.m41 + " Z: " + -matrix3.m43;
	}
	kill();
});

var dirt = document.getElementById("boxDiv");
var rows = document.getElementById("mainDiv");
var dirtnew;
for (var i = 0; i < 5000; i += 50) {
	dirtnew = dirt.cloneNode(true);
	dirtnew.style.transform =
		"translateY(" + -i + "px) translateX(" + (i - 500) + "px)";
	dirtnew.style.height = "50px";
	dirtnew.style.width = "50px";
	dirtnew.style.transformStyle = "preserve-3d";
	rows.appendChild(dirtnew);
}
var newrow;
var z = 0;
while (z < 100) {
	z++;
	newrow = rows.cloneNode(true);
	newrow.style.top = "100px";
	newrow.style.height = "1000px";
	newrow.style.width = "1000px";
	newrow.style.transformStyle = "preserve-3d";
	newrow.style.perspective = "800px";
	newrow.style.position = "absolute";
	newrow.style.transform =
		"rotateX(180deg) translateY(1600px) perspective(6000px) translateZ(" +
		(z * 50 + 1000) +
		"px)";

	document.getElementById("world").appendChild(newrow);
}




var t = 0;
for (var i = 0; i < document.getElementsByClassName("tree").length; i++) {
	t = Math.floor(Math.random() * 20);
	if (t === 4) {
		document.getElementsByClassName("tree")[i].hidden = false;
	}
}
