<template>
    <div id="checkbox">
        <label class="checkbox-item">
            <input type="checkbox" :checked="value"
                    @change="$emit('input', $event.target.checked)"
                    v-bind:class="{ active: value }"
                    class="checkbox-input">
            <span class="checkbox-label">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: ['value']
}
</script>
