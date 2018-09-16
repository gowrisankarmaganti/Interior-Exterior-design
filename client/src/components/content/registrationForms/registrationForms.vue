<template src="./registrationForms.template.html"></template>
<style>
    .image_menu {
        margin-top: 30px;
    }

    .image_menu .col-md-6:nth-child(odd) {
        left: 9px
    }

    .image_menu .col-md-6:nth-child(even) {
        left: -9px
    }

    .image_menu img {
        padding: 7px;
        position: relative;
        /* border: 2px solid #bdbbbb; */
    }

    .image_menu img:hover  {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    .image_menu span {
        background: rgba(250, 235, 215, 0.6);
        padding: 4px 34px;
        position: absolute;
        left: 22px;
        color: #030f6d;
        bottom: 7px;
        font-size: 18px;
    }
</style>
<script>
    export default {
        name: 'registrationForms',
        props: [],
        data() {
            return {
                rightMenu: [
                    { name: "Raw Material", url: require("../../../assets/images/rawMaterial.jpg"), value: "rawMaterial" },
                    { name: "Ceiling", url: require("../../../assets/images/ceiling.jpg"), value: "ceiling" },
                    { name: "Tiles", url: require("../../../assets/images/tiles.jpg"), value: "tiles" },
                    { name: "Man Power", url: require("../../../assets/images/manPower.jpg"), value: "manPower" }
                ]
            }
        },
        methods: {
            getCategoryType(cat){
                alert(cat)
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