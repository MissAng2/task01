<template>
    <div class="listShow">
        <!-- navbar组件 -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">未读</mt-tab-item>
            <mt-tab-item id="2">已读</mt-tab-item>
        </mt-navbar>

        <!-- search组件 -->
        <mt-search autofocus v-model="value"></mt-search>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div v-for="(n,index) in list" :key="n.title" @click="showDetail(index)">
                    <div v-if="n.status==0" class="listView">
                        <div class="first">
                            <mt-badge class="rem" size="small">
                                {{n.author}}
                            </mt-badge>
                            <mt-badge class="status" size="small">
                                {{n.status_DISPLAY}}
                            </mt-badge>
                        </div>
                        <div class="second">
                            <div class="circle"></div>
                            <div class="title">
                                {{n.title}}
                            </div>
                        </div>
                        <div class="third">
                            <div class="author">
                                {{n.author}}
                            </div>
                            <div class="time">
                                {{n.time}}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div v-for="(n,index) in list" :key="n.title"  @click="showDetail(index)">
                    <div v-if="n.status==1" class="listView">
                        <div class="first">
                            <mt-badge class="rem" size="small">
                                {{n.author}}
                            </mt-badge>
                            <mt-badge class="status" size="small">
                                {{n.status_DISPLAY}}
                            </mt-badge>
                        </div>
                        <div class="second">
                            <div class="circle"></div>
                            <div class="title">
                                {{n.title}}
                            </div>
                        </div>
                        <div class="third">
                            <div class="author">
                                {{n.author}}
                            </div>
                            <div class="time">
                                {{n.time}}
                            </div>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected: '1',
            value: '',
            list: '',
            title: '',
            curindex: '',
            newtime: '',
            result: '',
            listbox: ''
        }
    },
    created(){
        this.datashow(); 
    },
    watch:{
        "value": function(){
            // console.log(this.value);
            var res=[];
            var l=this.list;
            var v=this.value;
            if(v==''){
                this.list=this.listbox;
            }else{
                $.each(l,function(index,value){
                    if(l[index].title.indexOf(v)!=-1){
                        res.push(l[index]);
                    }
                })
                this.result=res;
                // console.log(this.result);
                this.list=this.result;
            }
        }
    },
    methods:{
        datashow(){
            this.$http.get('../static/data.json').then(function(res){
                this.list=res.body.result;
                // console.log(this.list);
                var array=this.list.sort(function(a,b){return b['time']<a['time']?1:-1});
                array=array.reverse();
                // console.log(array);
                this.list=array;
                this.listbox=this.list;
            })
        },
        showDetail(index){
            // console.log(index);
            // console.log(this.list[index].title)
            this.$router.push({
                path: '/Detail',
                query: {title:index}
            })
        }
    }
}
</script>

<style scoped>
    .listView{
        width: 100%;
        height: 90px;
        border-bottom: 1px solid #d9d9d9;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .first,.second,.third{
        width: 100%;
        float: left;
        margin-bottom: 4px;
    }
    .rem{
        float: left;
        border-radius: 6px;
        border: 1px solid #B8CCE5;
        background: none;
        color: #B8CCE5;
        margin-left: 20px;
    }
    .status{
        float: right;
        background-color: #E1F7F5;
        color: #51B1A3;
        border-radius: 4px;
        margin-right: 20px;
    }
    .circle{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
        float: left;
        margin-top: 6px;
        margin-left: 10px;
    }
    .title{
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
        /* float: right; */
        margin-left: 30px;
    }
    .author{
        float: left;
        margin-left: 20px;
        font-size: 12px;
        color: #d9d9d9;
    }
    .time{
        float: right;
        margin-right: 20px;
        font-size: 12px;
        color: #d9d9d9;
    }
</style>