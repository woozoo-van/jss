const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.fill(); 
ctx.beginPath();

ctx.rect(250, 250, 100, 100);
/** 
 fill, stroke선언 윗코드의 모든 캔버스 도형에 적용, 아래 캔버스 도형에 선언을 하지않으면 안보인다.
-> Path 개념
 Fill : 색 채우기, Stroke : 선만 있음
 */
 
 ctx.rect(350, 350, 100, 100);
 ctx.fillStyle = "red"; // 전체 적용
 ctx.fill();
 
 ctx.beginPath();
 ctx.rect(450, 450, 100, 100);
 ctx.fillStyle = "blue"; 
 setTimeout(() => {
    ctx.fill();
 }, 5000);
