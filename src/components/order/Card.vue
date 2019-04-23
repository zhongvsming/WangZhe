<template>
    <div class="card-container">
        <div class="card-img">
            <!-- <input type="checkbox" v-model="goodInfo.selected" @click="isAllSelected"> -->
            <input type="checkbox" v-model="goodSelected">
            <img :src="goodInfo.headImg">
        </div>    

        <div class="card-info">
            <h3>{{goodInfo.name}}</h3>
            <p class="p1">{{goodInfo.subName}}</p>
            <div class="row3"> <p class="p2">¥{{goodInfo.price}}</p> 
            <div style="">
                <button @click="subtract" style="width:25px;height:25px;">-</button>
                <input type="text" v-model="num" style="color:black;width:25px;height:25px;padding:0;text-align:center;border-width:1px 0 1px 0;border-color:#ccc"></input>
                <button @click="add" style="width:25px;height:25px;">+</button></div>
            </div>
        </div>    

    </div>
</template>

<script>
    export default {
        name:'card',
        props:['goodInfo'],
        data(){
            return {
                goodSelected:false,
                // num:''
            }
        },
        methods: {
            select(flag){
                if(flag){
                    this.goodSelected=true
                }else{
                    this.goodSelected=false
                }
            },
            add(){
                if(this.num<99)
                this.$store.commit('addOne',this.goodInfo.id)
                // this.num++
            },
            subtract(){
                if(this.num>0)
                // this.num--
                 this.$store.commit('sutractOne',this.goodInfo.id)
            }

        },
        computed: {
          num(){
            //   return this.$store.getters.getCartItem(this.goodInfo.id)
            return this.$store.getters.getItemyId(this.goodInfo.id).num
          }
        },
        watch:{
            goodSelected(newVal){
                this.goodInfo.selected=newVal
                if(this.$store.getters.isAllSelected){
                    this.$emit('selecteall')
                    // this.$emit('changex')
                }else{
                    this.$emit('noselecteall')
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .card-container{
        width:80%;
        height:80px;
        background:white;
        border-radius:20px;
        margin:10px auto;
        // position:relative;
        // bottom:70px;
        // border:yellow medium solid;
        padding:0 5px 0 5px;
        display:flex;
        justify-content: space-around;
        align-items:center;
    }
    .card-img{
        display:flex;
        align-items:center;

        img{
            width:60px;
            height:60px;
        }
        input{
            width:20px;
            height:20px;
            margin:0 10px;
        }
    }
    .card-info{
        width:50%;
        height:100%;
        padding-top:5px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        // float:right;
        // border:pink medium solid;
     .p1{
            // margin-top:10px;
            color:gold;
        }
     .p2{
            // margin-top:10px;
            color:red;
        }
     .row3{
        //  width:
         display:flex;
         justify-content:space-between;
     }   
    }
  
</style>