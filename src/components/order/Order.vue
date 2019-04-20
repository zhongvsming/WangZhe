<template>
    <div class="order-container">
        <div class="order-title">
            <h1>购物车</h1>
            <h2>共{{cartNum}}件商品</h2>
        </div>   

        <div class="order-main">
            <card-component v-for="item of cart" :goodInfo="item"></card-component>
        </div>    

        <div class="order-buy">
            <div> <input type="checkbox" id="buy" v-model="allSelec"><label for="buy">全选</label></div>
            <div>合计：<span>¥{{calTotal}}</span><button>结算</button></div>
        </div>    


    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        name:'oder',
        data(){
            return {
                allSelec:false
            }
        },
        components:{
            'card-component':Card
        },
        computed: {
            cart(){
                return this.$store.getters.getCart
            },
            cartNum(){
                return this.$store.getters.getCartNum
            },
            calTotal(){
                var total = 0
                this.$store.getters.getCart.forEach(item => {
                    if(item.selected===true){
                        total+=item.price
                    }
                });
                return total
            },
            isAllSelected(){
                return this.$store.getters.isAllSelected
            }
        },
        watch: {
            allSelec(newValue){
                if(newValue===true){
                   this.$store.commit('selectedAll')
                }else{
                    this.$store.commit('cancelSelectedAll')
                }
            },
            isAllSelected(newValue){
                if(newValue){
                    this.$store.commit('selectedAll')
                }else{
                    this.$store.commit('cancelSelectedAll')                    
                }
            }

        },
    }
</script>

<style lang="scss" scoped>
.order-container{
    min-height:700px;
    background:#c3c3c3;
    height:100%;
    position:relative;
}
.order-title{
    background:#333;
    min-height:150px;
    position:relative;
    h1{
        color:gold;
        padding:10px
    }
    h2{
        font-size:1.3em;
        color:white;
        padding:10px;
    }
}
.order-buy{
    width:100%;
    background:white;
    padding:0 20px 0 20px;
    height:50px;
    bottom:50px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    font-size:1.3em;
    align-items:center;
    border:1px yellow solid;
    button{
        width:100px;
        height:40px;
        background:deeppink;
        border-radius:20px;
        margin-left:10px;
        color:white;
    }
    div{
        height:40px;
        display:flex;
        align-items:center;
    }
}
</style>