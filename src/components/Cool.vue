<template>
    <el-container>
      <el-aside><Aside/></el-aside>
      <el-container>
        <el-main>
            <div class="wrap">
                <div>
                    <img src="@/assets/01.jpg" />
                </div>
                <div>
                    <img src="@/assets/02.jpg" />
                </div>
                <div>
                    <img src="@/assets/03.jpg" />
                </div>
                <div>
                    <img src="@/assets/04.jpg" />
                </div>
                <div>
                    <img src="@/assets/05.jpg" />
                </div>
                <div>
                    <img src="@/assets/06.jpg" />
                </div>
            </div>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'

export default {
    name: 'Calendar',
    props: {

    },
    components: {
        Aside
    },
    data() {
        return {
            value: new Date()
        }
	},
	mounted(){
		this.moveon();
	},
    methord:{
		moveon(){
			var answer = confirm("准备好了么？");
			if(answer) window.location = "http://www.bing.com";
		}	
    }
}
</script>


<style scoped>
    .el-aside {
        color: #333;
    }

	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		height: 100%;
	}
	body{
		perspective: 1000px;
		background: #0A0A0A;
	}
	.wrap{
		width: 200px;
		height: 200px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -100px;
		margin-top: -100px;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transform: rotateY(0deg) rotateZ(45deg) rotateX(45deg);
		transform: rotateY(0deg) rotateZ(45deg) rotateX(45deg);
		-webkit-transition: all 50000s;
		transition: all 50000s;
		transition-timing-function: linear;		
		
	}
	img{
		width: 200px;
		height: 200px;
		opacity: 0.7;
		border-radius: 50px;
	}
	.wrap:hover{
		-webkit-transform: rotateY(-1000000deg) rotateZ(45deg) rotateX(45deg);
		transform: rotateY(-1000000deg) rotateZ(45deg) rotateX(45deg);
	}
	.wrap div{
		position: absolute;
		left: 0;
		top: 0;
		width: 200px;
		height: 200px;
		border-radius: 50px;
		/*10px :水平，10px垂直，200px阴影大小*/
		box-shadow: inset 10px 10px 200px yellow, 0 0 150px #6F6;
	}
	.wrap div{
		-webkit-transform: rotateY(0deg) translate3d(0, 0, 100px);
		transform: rotateY(0deg) translate3d(0, 0, 100px);
	}
	.wrap div:nth-child(2){
		background: #000;
		-webkit-transform: rotateY(90deg) translate3d(0, 0, 100px);
		transform: rotateY(90deg) translate3d(0, 0, 100px);
	}
	.wrap div:nth-child(3){
		background: pink;
		-webkit-transform: rotateY(180deg) translate3d(0, 0, 100px);
		transform: rotateY(180deg) translate3d(0, 0, 100px);
	}
	.wrap div:nth-child(4){
		background: skyblue;
		-webkit-transform: rotateY(270deg) translate3d(0, 0, 100px);
		transform: rotateY(270deg) translate3d(0, 0, 100px);
	}
	.wrap div:nth-child(5){
		background: yellow;
		-webkit-transform: rotateX(90deg) translate3d(0, 0, 100px);
		transform: rotateX(90deg) translate3d(0, 0, 100px);
	}
	.wrap div:nth-child(6){
		background: green;
		-webkit-transform: rotateX(270deg) translate3d(0, 0, 100px);
		transform: rotateX(270deg) translate3d(0, 0, 100px);
	}

</style>