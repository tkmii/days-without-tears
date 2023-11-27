Vue.createApp({
  data() {
    return {
      count: localStorage.getItem('count') || 0,
      popupPositive: false,
      isDisabled: false,
      popupNegative: false,
      counter: []
    };
  },
  methods: {
    addOne() {
      this.count++;
      localStorage.setItem('count', this.count);
      this.popupPositive = true;
      this.isDisabled = true;
    },
    addNull() {
      this.count = 0;
      localStorage.setItem('count', this.count);
      this.popupNegative = true;
      this.isDisabled = true;
    },
  },
}).mount('#app')