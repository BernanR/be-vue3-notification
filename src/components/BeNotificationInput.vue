<script setup>
    import { ref } from 'vue';
    const emit = defineEmits(['emitCallbackText', 'OnInputFocus'])
    const text = ref("")
    const spinner = ref(false)


    function sendNotify() {
        if (text.value !== '') {
            emit('emitCallbackText', text)
            spinner.value = true
        }            
    }

</script>
<template>
    <div class="BenotifyInput">
        <label>Reply</label>
        <div class="benotify-input-box">
            <div>
                <input type="text" v-model="text" 
                    @focus="emit('OnInputFocus', {focus: 'in', text: text})" 
                    @blur="emit('OnInputFocus', {focus: 'out', text: text})"
                    >
            </div>
            <div class="be-notify-button--Send">
                <button v-if="!spinner" type="button" @click="sendNotify">
                    <span class="ico">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </span>
                </button>
                <span v-else class="spinner-button spinner-loading"></span>
            </div>    
        </div>
    </div>
</template>