<template src="./leftSideMenu.template.html"></template>
<style>
    .image_menu{
        background: #8D6E63;
        max-width: 80%;
    }
    .category_title{
        font-family: 'Kaushan Script', cursive;
        font-size: 20px;
        color: #3E2723;
        background: #BCAAA4;
        padding: 7px 70px;
        margin-top: 0px;

    }
    .menu_title {
        background: #6D4C41;
        color: #BCAAA4;
        width: 98px;
        padding: 0 6px;
    }
    .menu2{
        position: absolute;
        top:0;
        left:79px;
    }
    .image_menu ul {
        cursor: pointer;
    }
    .menu1 li{
        list-style: none;
        position: relative;
        left: -37px;
    }
    .menu2 li{
                list-style: none;
    }
</style>
<script>
    export default {
        name: 'leftSideMenu',
        props: [],
        data() {
            return {
                col1: [
                    { name: "Design", url: require("../../../assets/images/design.jpg"), value: "design" },
                    { name: "Painting", url: require("../../../assets/images/painting.jpg"), value: "painting" },
                    { name: "Elevation", url: require("../../../assets/images/elevation.jpg"), value: "elevation" },
                    { name: "Glass Work", url: require("../../../assets/images/glasswork.jpg"), value: "glasswork" }
                ],
                 col2: [
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