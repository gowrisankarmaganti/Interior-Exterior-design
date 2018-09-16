<template src="./home.template.html"></template>
<style>
    #bgVideo {
        /* position: fixed;
        top: 71px; */
        max-width: 100%;
        max-height: 50%;
        box-shadow: -5px -4px #868181;
        border: 1px solid #7d7a7a;
        border-radius: 8px;
    }

    .col-md-3.asideLeftMenu {
        /* max-width: 350px; */
        /* background: #c7b65b; */
        max-height: 600px;
        min-height: 380px;
    }

    .home_header {
        font-family: 'Kaushan Script', cursive;
        color: #dac292;
        margin-top: 1px;
        /* letter-spacing: .1em; */
        text-shadow: 
        -1px -1px 1px #111, 
        2px 2px 1px #a48252;
    }

    .home_content {
        /* font-family: 'Satisfy', cursive; */
        font-family: 'Courgette', cursive;
        font-size: 18px;
    }
    .form_section{

    }
    .form_section .register {
        padding: 5px 37px;
        background: #85ac41;
        color: #3E2723;
        min-width: 83%;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .form_section .register:hover {
        padding: 5px 37px;
        background: #6D4C41;
        color: #bcaaa4;
        min-width: 83%;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .form_section.login_btns {
         margin-top: 40px;
        -webkit-animation-name: loginAnimBtns; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 5s; /* Safari 4.0 - 8.0 */
        -webkit-animation-delay: 0s; /* Safari 4.0 - 8.0 */
        animation-name: loginAnimBtns;
        animation-duration: 5s;
        animation-delay: 0s;
    }
    @keyframes loginAnimBtns {
        0%   { left:0px; top:0px;}
        50%  {left:0x; top:100px;}
        75%  {left:0px; top:100px;}
        100% {left:0px; top:0px;}
    }

    .rightSideForm {
        background: #d3b988;
        padding: 20px 44px;
        border-radius: 3px;
        color: #8e6c3e;
        margin-top: 33px;
    }
    .rightSideForm input {
        background: rgba(255,255,255,0.4);
        border: none;
        }
    .rightSideForm span {
        background: #e5d5b8;
        }
</style>
<script>
    export default {
        name: 'home',
        props: [],
        data() {
            return {
                typeOfReg:false,
                formLanding:false
            }
        },
        methods: {
            getRegForm(){
                this.formLanding=true
            }

        },
        computed: {

        },
        mounted() {
            // // var myVideo = document.getElementById;
            // this.$refs.bgVideo.play();
            // // this.$refs.video1.width = 1090

        },
    }
</script>