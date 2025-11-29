const canvas = document.getElementById('matrix-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const keys = ['1', '0', '•', '|', ':', '.', 'cmd', 'alt', 'Ctrl', 'Shift', 'C', 'V', 'Win', 'Tab', 'Cmd', '3x', 'Name', 'Secret'];  
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(canvas.height / fontSize);
    function drawMatrix() {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
        ctx.font = fontSize + 'px monospace';
        ctx.fillStyle = 'rgba(100, 100, 100, 0.6)'; 
        for (let i = 0; i < drops.length; i++) {
            const text = keys[Math.floor(Math.random() * keys.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            ctx.fillText(text, x, y);
            if (y > canvas.height && Math.random() > 0.995) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        setTimeout(() => {
            requestAnimationFrame(drawMatrix);
        }, 50);
    }
    drawMatrix();
}