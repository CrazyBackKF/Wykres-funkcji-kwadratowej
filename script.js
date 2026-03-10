const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.translate(canvas.width / 2, canvas.height / 2);

const parabola = {
    a: 0,
    b: 0,
    c: 0
}


function animate() { 
    requestAnimationFrame(animate);   
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -canvas.height / 2 + 10);
    ctx.lineTo(0, canvas.height / 2 - 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-canvas.width / 2 + 10, 0);
    ctx.lineTo(canvas.width / 2 - 10, 0);
    ctx.stroke();
    for (let i = -25; i < 25; i++)
    {
        ctx.beginPath();
        ctx.moveTo(((canvas.width - 20) / 50 + 10) * i, -10);
        ctx.lineTo(((canvas.width - 20) / 50 + 10) * i, 10);
        ctx.stroke();
    }
    for (let i = -9; i < 9; i++)
    {
        ctx.beginPath();
        ctx.moveTo(-10, ((canvas.height - 20) / 20 + 10) * i);
        ctx.lineTo(10, ((canvas.height - 20) / 20 + 10) * i);
        ctx.stroke();
    }
    for (let i = -25; i < 25; i+= 0.01)
    {
        ctx.beginPath();
        const x1 = (canvas.width / 50) * i;
        ctx.moveTo(x1, -(parabola.a * x1 * x1 / 100 * 3 + parabola.b * x1 + parabola.c * 44));
        const x2 = (canvas.width / 50) * (i + 0.01);
        ctx.lineTo(x2, -(parabola.a * x2 * x2 / 100 * 3 + parabola.b * x2 + parabola.c * 44));
        ctx.stroke();
    }
    if(isNaN(Number(document.getElementById("a").value)) || isNaN(Number(document.getElementById("b").value)) || isNaN(Number(document.getElementById("c").value))) return;
    gsap.to(parabola, {
        a: Number(document.getElementById("a").value),
        b: parabola.b = Number(document.getElementById("b").value),
        c: parabola.c = Number(document.getElementById("c").value),
        duration: 1.5,
        ease: "power1.out"
    })
}

animate();

