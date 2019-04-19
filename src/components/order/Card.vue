<template>
    <div class="card-container">
        <div class="card-img">
            <input type="checkbox">
            <img src="./yao1.jpg" width="75px" height="75px">
        </div>    

        <div class="card-info">
            <h3>name</h3>
            <p>price</p>
        </div>    

    </div>
</template>

<script>
    export default {
        name:'card',

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
        // float:left;
        // border:red 1px solid;
        // margin:10px auto;
        img{
            //   width:75px;
            //   height:75px;
            //  vertical-align:center;
            //  display:inline-block;

            // vertical-align:middle;
        }
        input{
            // display:inline-block;
            // padding:10px;
            width:30px;
            height:30px;
            margin:0 10px;
            
        
        }
    }
    .card-info{
        min-width:80px;
        min-height:80px;
        // float:right;
        // border:pink medium solid;
        p{
            margin-top:10px;
            color:red;
        }
    }
</style>