<template>
  <div class="stopwatch">
    <div class="the-time">
      <span class="minute">{{ minutes }}</span>
      <span>:</span>
      <span class="seconds">{{ seconds }}</span>
    </div>
    <b-button variant="success" @click="start">Start</b-button>
    <b-button variant="danger" @click="pause">Pause</b-button>
    <b-button variant="warning" @click="reset">Reset</b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      timer: null,
      totalTime: 25 * 60,
      buttonReset: false,
      edit: false
    };
  },
  methods: {
    start() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.buttonReset = true;
    },
    pause(){
      clearInterval(this.timer);
      this.timer = null;
      this.buttonReset = true;
    },
    reset() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.buttonReset = false;
    },
    edit() {
      this.edit = true;
    },
    theTime(time){
      return (time < 10 ? '0' : '') + time;
    },
    countdown() {
      this.totalTime--;
    }
  },
  computed: {
    minutes(){
      const minutes = Math.floor(this.totalTime / 60);
      return this.theTime(minutes);
    },
    seconds() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.theTime(seconds);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-time span {
  font-size: 200px;
}

button {
  margin-right: 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
