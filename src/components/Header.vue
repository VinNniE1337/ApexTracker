<template>
    <header>
        <img :src="image">
    </header>
</template>

<script>
export default {
 name: "Header",
 data() {
     return {
         image: require("@/assets/ovlogo.png")
     };
 }   
};
</script>
<!--Scoped - стиль используется только для этого компонента-->
<style scoped>
    img {
        width: 300px;
        display: block;
        margin: auto;
    }
    @media(max-width: 700px){
        img{
            display: block;
            margin:auto;
        }
    }
</style>