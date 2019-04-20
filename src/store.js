import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    addToCart(state,data){
      state.cart.push(data)
    },
    delInCart(state,data){
      var delIndex
      var flag = state.cart.some(function(item,index){
        if(item.id===data.id){
          delIndex = index 
          return true
        }else{
          return false
        }
      })
      if(flag){
        state.cart.splice(delIndex,1)
      }
    },
    selectedAll(state){
        state.cart.forEach(item => {
          item.selected = true
        });
    },
    cancelSelectedAll(state){
      state.cart.forEach(item => {
        item.selected = false
      });
    }
  },
  actions: {

  },
  getters:{
    getCart(state){
      return state.cart
    },
    getCartNum(state){
      return state.cart.length
    },
    isAllSelected(state){
      var hasNoSelected = state.cart.some(function(item){
        item.selected===false
      })
      if(hasNoSelected){
        return false
      }else{
        return true
      }
  
    }
  }
})
