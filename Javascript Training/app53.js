// Arrow functions and this

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
        const {
            phrases
        } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log("PHEW THANK HEAVENS THAT IS OVER");
    }
} 

// Using the arrow function will make sure it works because it doesn't have it's own this. Before,
// you had to make a new variable for this. The arrow function just keeps the same this from its parent scope.
// That being said, you wouldn't want to use an arrow function if you were writing it straight from start(). 
// This only works because the arrow function is being used within the start() function.