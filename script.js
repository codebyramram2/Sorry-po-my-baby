 // Flower Animation
 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 const flowers = [];

 class Flower {
   constructor() {
     this.x = Math.random() * canvas.width;
     this.y = canvas.height + 50;
     this.radius = Math.random() * 10 + 5;
     this.speed = Math.random() * 3 + 1;
     this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
   }

   draw() {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
     ctx.fillStyle = this.color;
     ctx.fill();
   }

   update() {
     this.y -= this.speed;
     this.draw();
   }
 }

 function animate() {
   requestAnimationFrame(animate);
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   flowers.forEach((flower, index) => {
     flower.update();
     if (flower.y < -flower.radius) {
       flowers.splice(index, 1);
     }
   });

   if (Math.random() < 0.03) {
     flowers.push(new Flower());
   }
 }

 animate();

 // Display Sorry text after some time
 setTimeout(() => {
   document.getElementById('sorry').style.display = 'block';
 }, 5000); // 5000 milliseconds = 5 seconds