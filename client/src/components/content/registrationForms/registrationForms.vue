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

    .image_menu img:hover {
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

    .rightSideForm {
        background: #d3b988;
        padding: 0px 44px;
        border-radius: 3px;
        color: #8e6c3e;
        margin-top: 33px;
    }

    .rightSideForm input {
        background: rgba(255, 255, 255, 0.4);
        border: none;
    }

    .rightSideForm span {
        background: #e5d5b8;
    }

    .successDetails {
        position: relative;
        background: #93d081;
        padding: 28px 44px;
        border-radius: 3px;
        color: #8e6c3e;
        margin-top: 33px;
        max-width: 90%;
        height: 220px;
        margin-left: 50px;
        border-radius: 25px;
    }

    .form-group.float-right {
        float: right;
    }

    .row.successDetails img {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 14%;
    }

    .row.successDetails .logout {
        position: absolute;
        bottom: 0;
        left: 50%;
        padding: 12px 0px;
        cursor: pointer;
    }
</style>
<script>
    import axios from 'axios'

    export default {
        name: 'registrationForms',
        props: ["isLoggedIn"],
        data() {
            return {
                rightMenu: [
                    { name: "Raw Material", url: require("../../../assets/images/rawMaterial.jpg"), value: "rawMaterial" },
                    { name: "Ceiling", url: require("../../../assets/images/ceiling.jpg"), value: "ceiling" },
                    { name: "Tiles", url: require("../../../assets/images/tiles.jpg"), value: "tiles" },
                    { name: "Man Power", url: require("../../../assets/images/manPower.jpg"), value: "manPower" }
                ],
                user: {},
                loggedIn: isLoggedIn
                // client: {}
            }
        },
        methods: {
            getCategoryType(cat) {
                alert(cat)
            },
            submitForm() {
               let scope=this;
                axios({
                    method: 'post',
                    url: 'http://localhost:1226/register',
                    data: this.user
                })
                    .then(function (response) {
                        console.log(response)
                        if (response.data) {
                            window.localStorage.setItem('client', JSON.stringify(response.data))
                            scope.loggedIn = true
                            scope.client()
                        }
                        else{
                            scope.loggedIn = false
                        }

                    })
            }
        },
        computed: {
            client() {
                let data = window.localStorage.getItem('client')
                console.log(data)
                if (true) {
                    this.loggedIn = true
                    return window.localStorage.getItem('client')
                }
                else {
                    return {}
                    this.loggedIn = false
                }
            }
        },
        mounted() {
            alert(this.isLoggedIn)
            // // var myVideo = document.getElementById;
            // this.$refs.bgVideo.play();
            // // this.$refs.video1.width = 1090

        },
    }
</script>