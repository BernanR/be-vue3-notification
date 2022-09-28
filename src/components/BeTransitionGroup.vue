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
        tag="ul" name="be-v-notify" 
        class="Be-Vue3-notification_conteiner" 
        :class="['Position--' + position]">
        <li
            v-for="(notification, key) in notifications"           
            class="be-v-notify teste-class"
            style="bottom: 0;"
            :id="'be-v-notify-' + notification.id"
            :key="notification.id"
            :class="[
                'be-v-notify--' +  notification.type,
                'animation--' +  notification.animation,
                (notification.reply) ? 'input-type' : '',
                (notification.InputFocusOn) ? 'InputFocusOn' : ''
            ]"
            >
            <BeNotificationItem @remove="emitRemove" :notification="notification"></BeNotificationItem>
        </li> 
    </transition-group>
</template>