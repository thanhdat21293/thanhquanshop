<template>
  <div id="page">
    <Headerr></Headerr>
    <router-view/>
    <Footerr></Footerr>
  </div>
</template>

<script>
import Headerr from '@/components/Header.vue'
import Footerr from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Headerr,
    Footerr
  }
}
</script>

<style>

</style>
