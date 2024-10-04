const car = function(color, model, brand, engineVolume, speed, maxSpeed) {
    this.color = color;
    this.model = model;
    this.brand = brand;
    this.engineVolume = engineVolume;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
}

const carPrototype = {
    accelerate: function(increaseSpeed) {
        this.speed += increaseSpeed;
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    },
    deaccelerate: function(dicreaseSpeed) {
        this.speed -= dicreaseSpeed;
        if(this.speed < 0) {
            this.speed = 0;
        }
    },
    stop: function() {
        this.speed = 0;
    }
}
car.prototype = carPrototype;

const car1 = new car('black metallic', 'GTX-500', 'Asukuma Motors', 4.2, 220, 320);
const car2 = new car('metallic', 'GTX-300', 'Asukuma Motors', 3.2, 150, 250);
const car3 = new car('red', 'GTX-250', 'Asukuma Motors', 4.2, 300, 250);

//car 1
car1.accelerate(150);
console.log(car1.speed); 
car1.deaccelerate(80);
console.log(car1.speed);
car1.stop();
console.log(car1.speed);

//car 2
car2.accelerate(120);
console.log(car2.speed); 
car2.deaccelerate(60);
console.log(car2.speed);
car2.stop();
console.log(car2.speed);

//car 3
car3.accelerate(165);
console.log(car3.speed); 
car3.deaccelerate(95);
console.log(car3.speed);
car3.stop();
console.log(car3.speed);