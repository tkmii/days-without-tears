Vue.createApp({
  data() {
    return {
      count: localStorage.getItem('count') || 0,
      popupPositive: false,
      isDisabled: false || localStorage.getItem('isDisabled'),
      popupNegative: false,
      positiveSrc: 'images/cat.jpg',
      memeSrc: 'images/meme.jpg',
      positiveImages: ['images/cat.jpg', 'images/cats1.jpg', 'images/cat2.jpg', 'images/cats3.jpg', 'images/cat4.jpg', 'images/cats5.jpg'],
      memeImages: ['images/meme.jpg', 'images/meme1.jpg', 'images/meme2.jpg', 'images/meme3.jpg', 'images/meme4.jpg', 'images/meme5.jpg'],
      quote: '',
      autor: '',
      quotes: [
        {
          name: 'Нара Шикамару',
          cite: 'Не бывает безвыходных ситуаций. Бывают ситуации, выход из которых тебя не устраивает.'
        },
        {
          name: 'Наруто Узумаки',
          cite: 'Никогда не сдаваться... Встать, когда все рухнуло — вот настоящая сила.'
        },
        {
          name: 'Лайт Ягами',
          cite: 'Нельзя выиграть, если ты только защищаешься. Чтобы выиграть, нужно идти в атаку.'
        },
        {
          name: 'Себастьян Михаэлис',
          cite: 'Опыт приходит с болью.'
        },
        {
          name: 'Доппо Куникида',
          cite: 'Не кипешуй. Паника приводила к гибели и опытных людей.'
        },
        {
          name: 'Кана Альберона',
          cite: 'Ошибки не оковы, не дающие сделать шаг вперед. Благодаря им дух становится сильнее.'
        }
      ]
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
      
      function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      const randomNum = randomInteger(0, 5);
      this.positiveSrc = this.positiveImages[randomNum];
      return this.positiveSrc
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

      function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      const randomNum = randomInteger(0, 5);

      this.memeSrc = this.memeImages[randomNum];

      this.quote = this.quotes[randomNum].cite;
      this.author = this.quotes[randomNum].name;
      return this.memeSrc, this.quote, this.author
    },
  },
}).mount('#app')