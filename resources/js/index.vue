<template>
    <div>
        <nav class="navbar navbar-light bg-white border-bottom">
            <router-link class="nav-brand mr-auto" :to="{ name: 'home' }">LaravelBnB</router-link>
        </nav>
        <div class="container mb-4 mt-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div> 
</template>

<script>
export default {
    mounted() {
        console.log('Mounted');
    }
};
</script>