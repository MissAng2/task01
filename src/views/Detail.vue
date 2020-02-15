<template>
    <div class="detailShow">
        <div v-for="(i,index) in list" :key="i.title">
            <div v-if="index==msg">
                <div class="head">
                    <router-link to="/" slot="left">
                        <mt-button icon="back" class="back"></mt-button>
                    </router-link>
                    <div class="title">
                        {{i.title}}
                    </div>
                </div>
                <div class="info">
                    <div class="img">
                        <img :src="i.img" alt="">
                        <div class="circle"></div>
                    </div>
                    <div class="text">
                        <div class="up">
                            {{upText}}
                        </div>
                        <div class="down">
                            <span class="time">
                                {{i.time}}
                            </span> | 
                            <span class="author">
                                {{i.author}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    {{i.content}}
                </div>
                <img src="../assets/image.jpg" alt="" class="image">
                <mt-button type="primary" class="btn" @click="suggestion()">
                    意见反馈
                </mt-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            msg: '',
            list: '',
            upText: '环球网',
        }
    },
    created(){
        this.$http.get('../static/data.json').then(function(res){
            this.list=res.body.result;
            var array=this.list.sort(function(a,b){return b['time']<a['time']?1:-1});
            array=array.reverse();
            this.list=array;
        })
        this.msg=this.$route.query.title;
        // console.log(this.msg)
    },
    methods:{
        suggestion(){
            this.$router.push('/Suggestion');
        }
    }
}
</script>

<style scoped>
    .head{
        float: left;
    }
    .back{
        float: left;
        margin-top: 20px;
        height: 30px;
        border: none;
        background: none;
        box-shadow: none;
    }
    .title{
        margin-top: 20px;
        margin-left: 40px;
        margin-right: 10px;
        font-size: 24px;
        font-weight: bold;
    }
    .info{
        float: left;
        margin-left: 10px;
    }
    .img{
        width: 60px;
        height: 60px;
        position: relative;
        top: 20px;
        left: 10px;
    }
    .circle{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        /* background-color: #d9d9d9; */
        border: 1px solid #d9d9d9;
        position: absolute;
    }
    .img img{
        width: 60px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .text{
        float: left;
        margin-left: 80px;
        margin-top: -30px;
        font-size: 20px;
    }
    .down{
        font-size: 16px;
        color: #d9d9d9;
    }
    .time{
        margin-right: 10px;
    }
    .author{
        margin-left: 10px;
    }
    .content{
        clear: both;
        padding-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 20px;
        line-height: 30px;
    }
    .image{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }
    .btn{
        margin-top: 20px;
        width: 90%;
        margin-left: 5%;
    }
</style>