<template>
    <div class="navList">
        <div class="menu">
            <div class="menuList">
                <ul>
                    <template v-for="(item,index) in listArr">
                        <li
                                :style="{'background':item.color,'opacity':numbers===item.num?'1':'0.6'}"
                                :key="index"
                                @click="button(item.num)"
                        >
                            <div :class="item.icon" class="icon_nav"></div>
                            <div>{{item.name}}</div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // import {Emit, Prop, Vue, Watch} from 'vue-property-decorator'

    export default {
        data() {
            return {
                numbers: 1
                // listArr: []
            }
        },
        props: {
            listArr: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
            button(num) {
                this.numbers = num
                this.$emit('changePage', num)
            }
        }
        // public numbers: number = 1
        //
        // @Prop({
        //     type: Object,
        //     required: false
        // }) listArr!: any  //接收父组件传递过来的值
        // @Emit('changePage') button(num: number) {
        //     this.numbers = num;
        // }
        //
        // changePage() {
        //     this.button(this.numbers)
        // }
        //
        // //监听从父组件传递过来得值，并且赋给子组件的变量
        // @Watch('listArr') Modal(val: any): any {
        //     this.listArr = val
        // }


    }
</script>

<style scoped>
    .navList {
        width: 100%;
        height: 60px;
        background-color: white;
        box-shadow: 1px 1px 1px beige;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .menuList {
        width: 100%;
        height: 60px;
        margin: 2px 10px;
    }

    .menuList ul {
        display: flex;
        /*justify-content: space-between;*/
        width: 50%;
        height: 50px;
        padding: 5px 5px;
    }

    .menuList ul li {
        width: 250px;
        height: 100%;
        margin-right: 10%;
        display: flex;
        justify-content: center;
        color: white;
        font-size: 20px;
        box-shadow: 1px 1px 5px gray;
        border-radius: 10px;
        align-items: center;
        cursor: pointer;
    }

    .icon_nav {
        margin-right: 5%;
        font-size: 30px;
    }

</style>
