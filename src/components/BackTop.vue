<template>
  <div class="back-top" :style="{ bottom }" @click="back"> </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        isBack: true
      }
    },
    computed: {
      maxBottom() {
        let winH = document.documentElement.clientHeight || document.body.clientHeight
        if (winH < 1150) {
          return 250
        } else {
          let distance = winH - 1150
          return 250 + distance
        }
      },
      bottom() {
        if (this.isBack) {
          return '100%'
        } else {
          return `${this.maxBottom}px`
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let winH = document.documentElement.clientHeight || document.body.clientHeight
        this.isBack = scrollTop <= winH / 2
      },
      back() {
        document.querySelector('#app').scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .back-top {
    position: fixed;
    z-index: 27;
    width: 70px;
    height: 900px;
    right: 0;
    background-image: url('../assets/images/back-top.png');
    transition: bottom 1s;
    cursor: pointer;
  }
</style>
