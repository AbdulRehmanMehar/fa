<template>
    <div>
        <h1>App</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default class App extends Vue{
        mounted(): void {
            console.log('component mounteed')
        }
    }
</script>