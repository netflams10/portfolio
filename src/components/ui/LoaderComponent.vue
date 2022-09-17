<template>
    <div>
        <lottie :options="image" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script>
    import Lottie from './lottie.vue';
    import * as image from '../../assets/lottie/coding.json'
    export default {
        name: 'LoadingComponent',
        components: {'lottie': Lottie},
        data () {
            return { image: image, animationSpeed: 1 }
        },
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },
        }
    }
</script>