<template>
  <div id="page">
    <Headerr></Headerr>
    <div class="blank-box" ></div> <!-- khoảng trắng ở phía trên để cách header với banner-->
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
