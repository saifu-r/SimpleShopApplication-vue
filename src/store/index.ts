import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    products: [
      {
        id: 'p1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
        title: 'Book Collection',
        description:
          'A collection of must-read books. All-time classics included!',
        price: 99.99,
      },
      {
        id: 'p2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tent_on_a_campsite.jpg/640px-Tent_on_a_campsite.jpg',
        title: 'Mountain Tent',
        description: 'A tent for the ambitious outdoor tourist.',
        price: 129.99,
      },
      {
        id: 'p3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        title: 'Food Box',
        description:
          'May be partially expired when it arrives but at least it is cheap!',
        price: 6.99,
      },
    ],
    items: [] as Array<{productId: string; qty: number; price: number}>, 
    total: 0, 
    qty:0 
  },



  getters: {
    products(state){
      return state.products
    },

    items(state){
      return state.items
    },
    totalSum(state){
      return state.total
    },
    quantity(state){
      return state.qty
    },
  },




  
  mutations: {
    addProductToCart(state, payload){
      const productData= payload
      const productInCartIndex= state.items.findIndex(
        (ci) => ci.productId=== productData.id
      )

      if(productInCartIndex>= 0){
        state.items[productInCartIndex].qty++
      }else{
        const newItem= {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        }
        state.items.push(newItem)
      }
      state.qty++
      state.total+= productData.prices
    },

    removeProductFromCart(state, payload) {
      const prodId= payload.product
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },

  },
  actions: {

    addToCart(context, payload){
      context.commit('addProductToCart', payload)
    },
    removeToCartAction(context, payload){
      context.commit('removeProductFromCart', payload )
    }
  },
  modules: {
  }
})
