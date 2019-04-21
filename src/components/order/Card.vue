<template>
    <div class="card-container">
        <div class="card-img">
            <input type="checkbox" v-model="goodInfo.selected">
            <img :src="goodInfo.headImg">
        </div>    

        <div class="card-info">
            <h3>{{goodInfo.name}}</h3>
            <p class="p1">{{goodInfo.subName}}</p>
            <p class="p2">¥{{goodInfo.price}}</p>
        </div>    

    </div>
</template>

<script>
    export default {
        name:'card',
        props:['goodInfo'],
        data(){
            return {
                s:''
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
        min-width:80px;
        min-height:60px;
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
    }
</style>