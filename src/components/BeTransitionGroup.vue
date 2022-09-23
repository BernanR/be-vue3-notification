<script setup>
import BeNotificationItem from './BeNotificationItem.vue'

    const props = defineProps({
        position : String,
        notifications : Array
    })
    const emit = defineEmits(['remove'])

    function emitRemove(id) {
        emit("remove", id)
    }
</script>

<template>
    <transition-group 
        tag="ul" name="benotify" 
        class="Vue-Benotify_conteiner" 
        :class="['Position--' + position]">
        <li
            v-for="(notification, key) in notifications"           
            class="benotify"
            style="bottom: 0;"
            :id="'be-benotify-' + notification.id"
            :key="notification.id"
            :class="[
                'benotify--' +  notification.type,
                'animation--' +  notification.animation,
                (notification.reply) ? 'input-type' : '',
                (notification.InputFocusOn) ? 'InputFocusOn' : ''
            ]"
            >
            <BeNotificationItem @remove="emitRemove" :notification="notification"></BeNotificationItem>
        </li> 
    </transition-group>
</template>