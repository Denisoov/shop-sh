const defaultState = {
  basket: [],
}

export const state = () => defaultState

export const mutations = {
  INIT_BASKET(state, basket) {
    state.basket = basket
  },
  CLEAR_BASKET(state) {
    state.basket = []
  },
  ADD_PRODUCT_IN_BASKET(state, product) {
    
    let search = state.basket.find((item) => item.id === product.id)

    if (!!search) {
      state.basket.filter((item) => {
        if (item.id === product.id) {
          item.count + product.count
        }
      })
    }
    else {
      state.basket.push(product)
    }

    this.$cookies.set('basket', state.basket)
  },
  DELETE_PRODUCT_IN_BASKET(state, product) {
    state.basket = state.basket.filter((item) => item.id !== product.id)

    this.$cookies.set('basket', state.basket)
  },
}

export const actions = {}

export const getters = {
  countItemsInBasket: (state) => state.basket.length,
  totalPrice: (state) => {
    return state.basket.reduce((acc, item) => {
      return acc + item.count * item.price
    }, 0)
  }
}
