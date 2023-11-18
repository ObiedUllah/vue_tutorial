<template>
    <div class="Context">
        <h1>This is a context page</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos modi sint vel consectetur ut repellendus magnam esse
            explicabo corrupti ab cum praesentium, iusto culpa nihil optio saepe
            maiores est non perferendis excepturi at eos. Dolorum dolore
            molestiae hic similique doloribus saepe pariatur, quos, possimus
            voluptatem, aliquid aut non necessitatibus quaerat.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos modi sint vel consectetur ut repellendus magnam esse
            explicabo corrupti ab cum praesentium, iusto culpa nihil optio saepe
            maiores est non perferendis excepturi at eos. Dolorum dolore
            molestiae hic similique doloribus saepe pariatur, quos, possimus
            voluptatem, aliquid aut non necessitatibus quaerat.
        </p>
        <p>{{ sharedData }}</p>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'ContextExampleView',
    components: {},
    setup() {
        // Injecting the provided data from ParentComponent
        const sharedData = inject('sharedData')

        return {
            sharedData,
        }
    },
}
</script>

<style></style>
