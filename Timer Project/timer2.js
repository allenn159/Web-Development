class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      // defining the call back for onStart() so it can be used in the start function.
    }
    

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    // Having this.tick outside runs the code immediately. If you do not do this, there will be a second delay before it starts.
    this.interval = setInterval(this.tick, 20);
    // setInterval will return an integer.
  };

  pause = () => {
    clearInterval(this.interval);
    // Stops the interval from start function.
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    // This is used as a getter for the tick function.
    return parseFloat(this.durationInput.value);
    // parseFloat takes the numbers out of a string and converts them to integers.
  }

  set timeRemaining(time) {
    //This is used as a setter for the tick function.
    this.durationInput.value = time.toFixed(2);
    // toFixed rounds decimal.
  }
}
