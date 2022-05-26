<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import FooterNav from '@/components/FooterNav.vue'
// import storage from '@/storage'
export default {
  components: { HeaderNav, FooterNav },
  name: 'HomeMall',
  data() {
    return {
      res: {}
    }
  },
  created() {
    // storage.setItem('user', { username: 'xzc' })
    // storage.setItem('age', 20, 'user')
    // storage.setItem('details', { productDetails: 'demo1' })
    // console.log(storage.getItem('username', 'user'))
    // storage.clear('details')
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style></style>
