<template>
    <div class="table2">
        <div class="test">
            <div class="images">
                <div class="polaroid rotate_left">
                    <img src="../../../../static/img/10.jpeg" width="284" height="213"/>
                    <p class="caption">有时候我们需要正视自己。</p>
                </div>
                <div class="polaroid rotate_right">
                    <img src="../../../../static/img/12.jpeg" alt="世博中国馆" width="284" height="213"/>
                    <p class="caption">贫困远比孤单可怕-Just try yourself</p>
                </div>
            </div>

            <div class="text">
                <p>
                    Annotation A modern classic, Carrie introduced a distinctive new voice in American fiction – Stephen
                    King. The story of misunderstood high school girl Carrie White, her extraordinary tele inetic
                    powers, and her violent rampage of revenge, remains one of the most barrier-brea ing and shoc ing
                    novels of all time. Ma e a date with terror and live the nightmare that is...Carrie Pa rt O ne Pa rt
                    Two Pa rt T hree Part One Blood Sport News item from the Westover ( Me. ) weekly Enterprise , August
                    19, 19 : RAIN OF STONES REPORTED It was reliably reported by several persons that a rain of stones
                    fell from a clear blue s y on Carlin Street in the town of Chamberlain on August 17th.
                </p>
                <p>
                    The stones
                    fell principally on the home of Mrs Margaret White, damaging the roof extensively and ruining two
                    gutters and a downspout valued at approximately $25. Mrs White, a widow, lives with her
                    three-year-old daughter, Carietta. Mrs White could not be reached for comment. Nobody was really
                    surprised when it happened, not really, not at the subconscious level where savage things grow. On
                    the surface, all the girls in the shower room were shoc ed, thrilled, ashamed, or simply glad that
                    the White bitch had ta en it in the mouth again. Some of them might also have claimed surprise, but
                    of course their claim was untrue. Carrie had been going to school with some of them since the first
                    grade, and this had been building since that time.
                </p>
            </div>

            <div class="images2">
                <div class="polaroid rotate_left">
                    <img src="../../../../static/img/13.jpeg" alt="郁金香" width="284" height="213"/>
                    <p class="caption">换个视角，发现世界的不同。Change our life..</p>
                </div>
                <div class="polaroid rotate_right">
                    <img src="../../../../static/img/11.jpeg" alt="世博中国馆" width="284" height="213"/>
                    <p class="caption">偶然的浑然天成，大自然的美丽。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table2"
    }
</script>

<style scoped lang="stylus">
    .table2
        margin-left 10px
        width 100%
        height 'calc(100vh - %s)' % 245px
        box-shadow 1px 1px 1px #e9e9e9
        border-radius 10px

        .test
            .images
                width 50%

                .polaroid
                    width 288px
                    padding 15px
                    margin 15px
                    border 1px silod #BFBFBF
                    background-color #ffffff
                    box-shadow 10px 10px 10px #999999

                .rotate_left
                    float left
                    transform rotate(8deg)

                .rotate_right
                    float left
                    transform rotate(-8deg)

            .text
                color #000000
                font-size 18px
                font-family Calibri
                text-indent 2em
                word-spacing 5px
                letter-spacing 2px

                p
                    margin-top 10px

            .images2
                width 50%
                float right

                .polaroid
                    width 288px
                    padding 15px
                    margin 15px
                    border 1px silod #BFBFBF
                    background-color #ffffff
                    box-shadow 10px 10px 10px #999999

                .rotate_left
                    float left
                    transform rotate(8deg)

                .rotate_right
                    float left
                    transform rotate(-8deg)
</style>
