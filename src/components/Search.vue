<template>
    <section class="search">
        <h1>Track Player Stats</h1>
        <!--submit.prevent - событие submit больше не перезагружает страницу (ура)-->
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <!--v-model - связывание элементов данных с input-->
                <select name="platform" id="platform" v-model="platform">
                    <option value="origin">Origin</option>
                    <option value="psn">PlayStation Network</option>
                    <option value="xbl">XBox Live</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamer Tag</label>
                <input type="text" name="text" v-model="gamertag" id="gamertag" placeholder="Origin tag, XBox Live tag, PSN ID, etc">
            </div>
            <div class="form-group">
                <input type="submit" value="Find!" class="btn">
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            platform: "origin",
            gamertag:""
        };
        },
    beforeCreate() {
            document.body.className= "body-bg-image";
        },
        methods:
        {
            onSubmit()
            {
                //Хитрый метод, чтобы при ошибке вылезал красивый ящичек с ошибкой. Он сломался. Очень жаль.
                if(!this.gamertag){
                    this.$toasted.show("Please enter the gamer tag", {duration: 3000});
                } else {
                   this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
                }
            }
        }
};
</script>

<style scoped>

</style>