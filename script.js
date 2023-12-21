function scratch(event) {
    const image = document.getElementById('image1');
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const radius = 60;
  
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = image.width;
    ctx.canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
  
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  
    image.style.opacity = 0;
    image.src = ctx.canvas.toDataURL();
  }