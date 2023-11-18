<template>
    <div>
        <h1 class="title">State Change</h1>
        <StateChange />

        <h1 class="title">Mouse Events</h1>
        <MouseEvents />

        <h1 class="title">For Loop</h1>
        <ForLoop />

        <h1 class="title">Attribute Binding -> :src :href :alt :class</h1>
        <AttributeBinding />

        <h1 class="title">Dynamic Classes -> css changing</h1>
        <DynamicClasses />

        <h1 class="title">
            Computed Properties -> filtering through array for example
        </h1>
        <ComputedProperties />

        <h1 class="title">Template Refs -> bind to html DOM element</h1>
        <TemplateRefs />

        <h1 class="title">Passing a prop</h1>
        <PropsPassing
            :header="header"
            :text="text"
            subtext="Subtext"
            theme="sale"
        />

        <h1 class="title">
            Custom Events -> open a modal example, CLOSES BY CLICK OUTSIDE
        </h1>
        <ModalEvent :show="showModal" @close="toggleModal" />
        <button @click.alt="toggleModal">Toggle Modal (click alt)</button>

        <h1 class="title">Slots (children in components)</h1>
        <SlotChildren
            ><p>child 1</p>
            <p>child 2</p></SlotChildren
        >

        <h1 class="title">Signup Form</h1>
        <SignupForm />

        <h1 class="title">WatchEffect vs Watch</h1>
        <WatchEffect />
    </div>
</template>

<script>
import StateChange from '../StateChange.vue'
import MouseEvents from '../MouseEvents.vue'
import ForLoop from '../ForLoop.vue'
import AttributeBinding from '../AttributeBinding.vue'
import DynamicClasses from '../DynamicClasses.vue'
import ComputedProperties from '../ComputedProperties.vue'
import TemplateRefs from '../TemplateRefs.vue'
import PropsPassing from '../PropsPassing.vue'
import ModalEvent from '../ModalEvent.vue'
import SlotChildren from '../SlotChildren.vue'
import SignupForm from '../SignupForm.vue'
import WatchEffect from '../WatchEffect.vue'

export default {
    name: 'LandingView',
    components: {
        // HelloWorld,
        StateChange,
        MouseEvents,
        ForLoop,
        AttributeBinding,
        DynamicClasses,
        ComputedProperties,
        TemplateRefs,
        PropsPassing,
        ModalEvent,
        SlotChildren,
        SignupForm,
        WatchEffect,
    },
    data() {
        return {
            header: 'Header',
            text: 'Text',
            showModal: false,
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
    },
}
</script>

<style></style>
