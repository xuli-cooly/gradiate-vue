<template>
   <div>
       <h1>
           welcome to 小猪佩奇的世界
       </h1>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {
      axios.get('/user/userinfo').then(res => { console.log(res)})
  },

  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
