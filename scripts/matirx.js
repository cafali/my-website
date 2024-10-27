        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrixCharacters = "cafali";
        const fontSize = 15;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).fill(1);

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#00ff99"; // matrix color
            ctx.font = fontSize + "px monospace";
            
            drops.forEach((y, i) => {
                const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
                ctx.fillText(text, i * fontSize, y * fontSize);
                
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            });
        }

        setInterval(drawMatrix, 50);
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });