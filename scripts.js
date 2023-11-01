const { createApp, ref } = Vue

const MyComponent = {
  setup() {
    let count = ref(0);

    function addNull() {
        count.value = 0;
    }

    return {
      count, addNull
    }
  }
}

createApp(MyComponent).mount('#app')

localStorage.setItem("counter","Vue");
