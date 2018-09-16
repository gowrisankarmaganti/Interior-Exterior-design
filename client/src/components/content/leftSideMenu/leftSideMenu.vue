<template src="./leftSideMenu.template.html"></template>
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
        /* border: 2px solid #bdbbbb; */
        cursor: pointer;
    }

    .image_menu img:hover {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
</style>
<script>
    export default {
        name: 'leftSideMenu',
        props: [],
        data() {
            return {
                leftMenu: [
                    { name: "Design", url: require("../../../assets/images/design.jpg"), value: "design" },
                    { name: "Painting", url: require("../../../assets/images/painting.jpg"), value: "painting" },
                    { name: "Elevation", url: require("../../../assets/images/elevation.jpg"), value: "elevation" },
                    { name: "Glass Work", url: require("../../../assets/images/glasswork.jpg"), value: "glasswork" }
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