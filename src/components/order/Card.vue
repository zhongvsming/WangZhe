<template>
    <div class="card-container">
        <div class="card-img">
            <input type="checkbox" v-model="goodInfo.selected">
            <img :src="goodInfo.headImg">
        </div>    

        <div class="card-info">
            <h3>{{goodInfo.name}}</h3>
            <p class="p1">{{goodInfo.subName}}</p>
            <p class="p2">{{goodInfo.price}}</p>
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
        height:110px;
        background:white;
        border-radius:10px;
        margin:10px auto;
        position:relative;
        bottom:70px;
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
            width:75px;
            height:75px;
        }
        input{
            width:30px;
            height:30px;
            margin:0 10px;
            
        
        }
    }
    .card-info{
        min-width:80px;
        min-height:80px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
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