const { createApp, ref } = Vue

const MyComponent = {
  setup() {
    let count = ref(0);
    let popupPositive = ref(false);
    let isDisabled = ref(false);
    let popupNegative = ref(false);

    function addOne() {
      count.value++;
      popupPositive.value = true;
      isDisabled.value = true;
    }

    function addNull() {
      count.value = 0;
      popupNegative.value = true;
      isDisabled.value = true;
    }

    return {
      popupPositive, popupNegative, count, addOne, addNull, isDisabled
    }
  }
}

//function PopupPositiveOpen() {}

createApp(MyComponent).mount('#app')
