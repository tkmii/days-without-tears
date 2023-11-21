Vue.createApp({
  data() {
    return {
      count: 0,
      popupPositive: false,
      isDisabled: false,
      popupNegative: false,
      counter: []
    };
  },
  methods: {
    addOne() {
      this.count++;
      this.popupPositive = true;
      this.isDisabled = true;
    },
    addNull() {
      this.count = 0;
      this.popupNegative = true;
      this.isDisabled = true;
    },
  },
  mounted() {
      this.counter = JSON.parse(localStorage.getItem("counter")) || []
  },
  watch: {
    counter(newValue, oldValue) {
      localStorage.setItem("counter", JSON.stringify(newValue));
    }
  }
}).mount('#app')
