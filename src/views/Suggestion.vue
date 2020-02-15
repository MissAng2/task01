<template>
    <div class="suggestionShow">
        <div class="head">
            <mt-header title="意见反馈">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="post">
            <p>{{text1}}</p>
            <p>{{text2}}</p>
            <img src="../assets/post.png" alt="">
        </div>
        <div class="form">
            <div class="select">
                {{select}}
            </div>
            <ul class="box">
                <li v-for="(i,index) in options" :key="index" @click="changeList(index)" :class="{checked:index==n}">{{i}}</li>
            </ul>
            <div class="area">
                <mt-field placeholder="请输入你要反馈的内容" type="textarea" maxlength="100" rows="6" v-model="con">

                </mt-field>
            </div>
            <div class="loadImg">
                <input type="file" id="loadfile">
                <div class="add">
                    <div class="add-image" @click="choose()">
                        <p>添加图片(可选)</p>
                        <img src="../assets/add.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <mt-button type="primary" class="btn" @click="submit()">
            确认提交
        </mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            text1: '您的珍贵意见，',
            text2: '是我们前进的动力~',
            select: '请选择反馈类型',
            options: ["投诉","建议","表扬"],
            n: 0,
            con: ''
        }
    },
    methods:{
        changeList(index){
            this.n=index;       
        },
        submit(){
            console.log(this.con);
            if(this.con==''){
                Toast("请输入反馈内容");
            }else{
                this.$router.push('/');
            }
            
        },
        choose(){
            $("#loadfile").click();
        }
    }
}
</script>

<style scoped>
    .suggestionShow{
        background-color: #d9d9d9;
    }
    .mint-header{
        background-color: #d9d9d9;
        color: black;
        height: 60px;
        font-size: 22px;
    }
    .post{
        width: 100%;
        height: 100px;
        background-color: #D8E4F2;
        padding-top: 20px;
        position: relative;
    }
    .post p{
        font-size: 24px;
        /* width: 200px; */
        /* float: left; */
        margin-left: 20px;
        margin-bottom: 5px;
    }
    .post img{
        width: 68px;
        float: right;
        position: absolute;
        margin-right: 20px;
        top: 20px;
        right: 20px;
    }
    .form{
        background-color: #ffffff;
        margin-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .select{
        color: #c0c0c0;
        font-size: 20px;
        padding-top: 20px;
    }
    ul{
        padding: 0;
        list-style: none;
        padding-top: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d9d9d9;
    }
    li:first-child{
        margin-left: 0;
    }
    li{
        width: 60px;
        height: 28px;
        display: inline-block;
        border-radius: 6px;
        border: 1px solid #3B8DFB;
        text-align: center;
        line-height: 28px;
        color: #3B8DFB;
        margin-left: 20px;
    }
    li.checked{
        background-color: #3B8DFB;
        color: #ffffff;
    }
    .area{
        border-bottom: 1px solid #d9d9d9;
    }
    .btn{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .loadImg input{
        display: none;
    }
    .add p{
        margin-top: 20px;
        color: #c0c0c0;
    }
    .add img{
        width: 60px;
        margin-bottom: 20px;
        padding: 5px;
        margin-top: 5px;
        border: 1px dotted #d9d9d9;
    }
</style>