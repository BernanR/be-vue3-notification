<script setup>
    import BeNotificationIcon from './BeNofiticationIcon.vue'
    import BeNotificationInput from './BeNotificationInput.vue'
    const props = defineProps({
        notification : Object
    })
    const emit = defineEmits(['remove'])

    function OnInputFocus(type) {
        if (type.focus === 'in') {
            props.notification.InputFocusOn = true
            props.notification.selfRemove('clear')
        } else if (type.text !== '')
            props.notification.InputFocusOn = false
        else {
            props.notification.InputFocusOn = false
            props.notification.selfRemove('start', 2000)
        }            
    }
    props.notification.selfRemove()
</script>
<template>
    <BeNotificationIcon v-if="!notification.thumb" :type="notification.type"></BeNotificationIcon>           

    <div v-else class="thumbnail">
        <img :src="notification.thumb" alt="">
    </div>

    <div class="text-box">
        <h2>{{ notification.title }}</h2>
        <p> 
            <strong v-if="notification.label">{{ notification.label }}:</strong>
            {{ notification.message}}
        </p>

        <BeNotificationInput 
            v-if="notification.reply" 
            @OnInputFocus="OnInputFocus" 
            @emitCallbackText="text => {notification.emitCallbackText(text, notification)}"
        >
        </BeNotificationInput>
    </div>
    <div class="button-box">
        <button type="button" @click="emit('remove', notification.id)">x</button>
    </div>
</template>