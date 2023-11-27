Vue.createApp({
  data() {
    return {
      count: localStorage.getItem('count') || 0,
      popupPositive: false,
      isDisabled: false || localStorage.getItem('isDisabled'),
      popupNegative: false,
      counter: []
    };
  },
  methods: {
    addOne() {
      this.count++;
      localStorage.setItem('count', this.count);
      this.popupPositive = true;
      localStorage.setItem('isDisabled', true);
      this.isDisabled = true;
      setTimeout(() => {
        this.isDisabled = false;
      }, 86400000);
    },
    addNull() {
      this.count = 0;
      localStorage.setItem('count', this.count);
      this.popupNegative = true;
      localStorage.setItem('isDisabled', true);
      this.isDisabled = true;
      setTimeout(() => {
        this.isDisabled = false;
      }, 86400000);
    },
  },
}).mount('#app')