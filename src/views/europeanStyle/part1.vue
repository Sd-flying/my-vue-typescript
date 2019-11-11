<template>
    <div class="european">
        <div class="eur-left">
            <div class="design">
                <img src="//www.w3cplus.com/sites/default/files/blogs/2019/1910/photo-1511692277506-3be3a7ab1686.jpeg"
                     alt="">
                <div class="design__border"></div>
            </div>
        </div>
        <div class="eur-right">
            <div class="rightRows">
                <ul>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/1.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                我可以微笑着听你说你们的故事，但真的打不起笑脸听你说你们的关系。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/2.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                有人说，青春仿佛是朵素洁的昙花，来不及铺张、来不及遐思，甚至来不及弥补欠缺和瑕庛，就那么匆匆地谢了。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/3.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                多少次又多少次，回忆把生活划成一个圈，而我们在原地转了无数次，无法解脱。总是希望回到最初相识的地点，如果能够再一次选择的话，以为可以爱得更单纯。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/4.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                人生就像一座山，重要的不是它的高低，而在于灵秀；人生就像一场雨，重要的不是它的大小，而在于及时。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/5.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                母爱是一缕阳光，让你的心灵即便在寒冷的冬天也能感受到温暖如春；母爱是一泓清泉，让你的情感即使蒙上岁月的风尘仍然清澈澄净。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/6.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                真诚是美酒，年份越久越醇香浓型；真诚是焰火，在高处绽放才愈是美丽；真诚是鲜花，送之于人手有余香。
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/7.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                自信是永不枯竭的源泉，自信是奔腾不息的波涛，自信是急流奋进的渠道，自信是真正的成功之母。
                            </div>
                        </div>

                    </li>
                    <li>
                        <div class="courseLogo">
                            <div class="courseBefore">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../../../static/img/8.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time>
                                            <el-button type="text" class="button">操作按钮</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <div class="courseAfter">
                                思念是一首诗，让你在普通的日子里读出韵律来；思念是一阵雨，让你在枯燥的日子里湿润起来；思念是一片阳光，让你的阴郁的日子里明朗起来。
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "part1",
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>

<style lang="stylus">
    .european
        width 100%
        height 100%
        display flex
        overflow hidden

    .eur-left
        margin-right 2%
        flex 1

        .design
            margin-left 10px
            position relative
            width 100%
            height 100%
            overflow hidden

        .design > *
            position absolute
            width 100%
            height 100%

        .design__border
            box-sizing border-box
            border 15px #eb311f solid
            transform rotate(45deg)
            box-shadow 0 0 10px #eb311f, inset 0 0 20px #eb311f

    .eur-right
        width 60%
        height 640px

        .rightRows ul
            width 100%
            height 100%
            display flex
            justify-content space-between
            flex-wrap wrap

            li
                margin 1%
                width 220px
                height 300px
                cursor pointer

                .courseLogo
                    perspective 800px

                    .courseBefore
                        width 100%
                        height 100%
                        position absolute
                        top 0
                        left 0
                        background-repea: no-repeat
                        background-position center center
                        backface-visibility hidden
                        transition 1s
                        background-color pink

                        .time
                            font-size 13px
                            color #999

                        .bottom
                            margin-top 13px
                            line-height 12px


                        .button
                            padding 0
                            float right
                            color #A4DA89


                        .image
                            width 100%
                            height 210px
                            display block

                        .clearfix:before,
                        .clearfix:after
                            display table


                        .clearfix
                            &:after
                                clear both

                    .courseAfter
                        width 100%
                        height 100%
                        position absolute
                        top 0
                        left 0
                        color #EE3C7E
                        background-color dodgerblue
                        text-indent 2em
                        transform rotateY(-180deg)
                        backface-visibility: hidden
                        transition 1s

                .courseLogo:hover .courseBefore
                    transform rotateY(360deg)

                .courseLogo:hover .courseAfter
                    transform rotateY(0deg)
</style>
