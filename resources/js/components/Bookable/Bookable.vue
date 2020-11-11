<template>
    <div class="card" style="width: 18rem;">
        <div v-if="loading">Loading...</div>
        <div v-else class="card-body">
            <router-link to="/">
                <h5 class="card-title">{{bookable.title}}} #{{bookable.id}}</h5>
            </router-link>
            <p class="card-text">{{bookable.description}}</p>
            <router-link to="/">
                <button class="btn btn-primary">Go back</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import BookableListItem from '../Bookables/BookableListItem'

    export default {
        name: 'bookable',
        components: {
            BookableListItem
        },
        data() {
            return {
                bookable: null,
                loading: false
            }
        },
        created() {
            this.loading = true;
            axios.get(`/api/bookables/${this.$route.params.id}`)
                .then(response => {
                    this.bookable = response.data.data;
                    console.log(response);
                    this.loading = false;
                })
                .catch(err => console.log(err));
        },
        mounted() {
            console.log(this.bookable);
        }
    }
</script>
