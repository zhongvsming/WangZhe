<template>
    <div class="order-container">
        <!-- 可滑动区域 -->
        <div class="order-scroll">
            <!-- 标题栏 -->
            <div class="order-title">
                <h1>购物车</h1>
                <h2>共{{cartNum}}件商品</h2>
            </div>   
            <!-- 内容区 -->
            <div class="order-main">
                <card-component v-for="item of cart" :key="item.id" :goodInfo="item" ref="cardcomponent" @selecteall="selecteAll" @noselecteall="noSelecteAll"></card-component>
            </div> 
        </div>    
           
        <!-- 结算栏 -->
        <div class="order-buy">
            <div> <input type="checkbox" id="buy" v-model="allSelec" @click="isSelectAll"><label for="buy">全选</label>
            <button v-show="true" style="margin-left:10px;border:0px;" @click="delSelectedItem">删除</button></div>
            <div>合计：<span>¥{{calTotal}}</span><button class="blance">结算</button></div>
        </div>    


    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        name:'oder',
        data(){
            return {
                allSelec:false,
                // x:true
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
                return this.$store.getters.getCartTotalPrice
            }
        },
        watch: {
     
        },
        methods: {
            selecteAll(){
                // console.log('selecteAll')
                this.allSelec=true
            },
            noSelecteAll(){
                // console.log('noSelecteAll')
                this.allSelec=false
            },
            isSelectAll(){
                const arr = this.$refs.cardcomponent
                if(this.allSelec===false){
                this.$store.commit('selectedAll')
                arr.forEach(element => {
                    element.select(true)
                });
                }else{
                this.$store.commit('cancelSelectedAll')
                arr.forEach(element => {
                    element.select(false)
                });
                }
            },
            delSelectedItem(){
                this.$store.commit('delSelectedItem')
            }
        },
    }
</script>

<style lang="scss" scoped>
.order-container{
    // min-height:850px;
    width:100%;
    background:#c3c3c3;
    height:100%;
    position:absolute;
    overflow-y:hidden;
}
.order-scroll{
    height:-webkit-calc(100% - 50px);
    height:-moz-calc(100% - 50px);
    height:calc(100% - 50px);
    overflow-y:scroll;
    
}
.order-main{
     position:relative;
     bottom:60px;
}
.order-title{
    background:#222;
    height:150px;
    // position:relative;
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
    background:lightyellow;
    padding:0 20px 0 20px;
    height:50px;
    bottom:0;
    position:absolute;
    display:flex;
    justify-content:space-between;
    font-size:1.3em;
    align-items:center;
    // border-top:1px black solid;
    .blance{
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