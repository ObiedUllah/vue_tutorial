<!-- ExampleComponent.vue -->
<template>
    <div>
        <h2>Watch vs. WatchEffect</h2>

        <div>
            <label>Value to Watch for watch:</label>
            <input v-model="watchedValue" />
        </div>
        <p>Watched Value: {{ watchedValue }}</p>

        <div>
            <label>Another Value to Watch for watch:</label>
            <input v-model="anotherValue" />
        </div>
        <p>Another Watched Value: {{ anotherValue }}</p>

        <div>
            <label>Value to Watch for watcheffect:</label>
            <input v-model="watchEffectValue" />
        </div>
        <p>Watch Effect: {{ watchEffectValue }}</p>
        <p>always executes at the start</p>
    </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'

export default {
    setup() {
        const watchedValue = ref('')
        const anotherValue = ref('')
        const watchEffectValue = ref('')

        // Watcher using the watch function
        watch(
            [watchedValue, anotherValue],
            (
                [newWatchedValue, newAnotherValue],
                [oldWatchedValue, oldAnotherValue]
            ) => {
                console.log(
                    'Watched Values Changed (watch):',
                    newWatchedValue,
                    newAnotherValue
                )
                console.log(
                    'Previous Values (watch):',
                    oldWatchedValue,
                    oldAnotherValue
                )
            }
        )

        watchEffect(() => {
            console.log(
                'Watch Effect Executed (watchEffect):',
                watchEffectValue.value
            )
        })

        return {
            watchedValue,
            watchEffectValue,
            anotherValue,
        }
    },
}
</script>
