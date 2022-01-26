const Counter = {
  data() {
    return {
      productsBag: [],
      productsWish: []
    }
  },
  methods: {
    addBag() {
      this.productsBag.push({
        img: document.querySelector('.js-image'),
        title: document.querySelector('.js-title').textContent,
        count: document.querySelector('.js-input').value + ' шт',
        price: document.querySelector('.js-price').textContent,
      })
    },
    addWish() {
      this.productsWish.push({
        img: document.querySelector('.js-image'),
        title: document.querySelector('.js-title').textContent,
        count: document.querySelector('.js-input').value + ' шт',
        price: document.querySelector('.js-price').textContent,
      })
    }
  }
}

Vue.createApp(Counter).mount('#MyApp')