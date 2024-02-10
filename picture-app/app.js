const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);

ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "skyblue";
ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 50, 100);

ctx.arc(280, 150, 50, 0,  2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(300, 150, 5, 0, 2 * Math.PI);
ctx.arc(280, 150, 5, 0, Math.PI, 2 * Math.PI);

ctx.fill();