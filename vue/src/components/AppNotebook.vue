<template>
    <div id="notebook">
        <div class="notebook__header">
            header
        </div>
        <div class="notebook__content">
            <AppCheckbox v-model="checkData" />
            {{checkData}}
        </div>
    </div>
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue'

export default {
  name: 'notebook',
  components: {
    AppCheckbox
  },
  data: () => ({
    checkData: null
  })
}
</script>

<style lang="scss" scoped>
    #notebook {
        margin-top: 30px;
        border: 1px solid #000;
        border-radius: 4px;
        min-height: 25px;
        // height: 100%;
        min-width: 150px;
        width: 100%;;
        margin-right: auto;
    }
    .notebook__header {
        padding: 15px;
        border-bottom: 1px solid #000;
        text-align: center;
        font-weight: bold;
        font-size: 1.3rem;
    }
    .notebook__content {
        padding: 15px;
    }
</style>
