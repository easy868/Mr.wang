<template>
  <section class="index">
    <header class="banner-box">
      <div class="banner" @touchstart="bannerMove">
        <a :href="item.href" class="banner-item" v-for="item in banner">
          <img :src="item.src" alt="">
        </a>
      </div>
      <ul class="banner-pointer">
        <li v-for="(item ,index) in banner"></li>
      </ul>
    </header>
  </section>
</template>

<script>


  export default ({
    name: 'home',
    data() {
      return {
        banner: [
          {src: '../../static/imgtest/slide05.jpg', href: '#'},
          {src: '../../static/imgtest/subject_201706021405124915192.jpg', href: '#'},
          {src: '../../static/imgtest/subject_201706091221341116165.jpg', href: '#'}
        ]
      }
    },
    components: {

    },
    methods: {
      bannerMove() {
        let banner = document.querySelector('.banner-box a'),
          bannerW = banner.offsetWidth,
          pointBox = document.querySelector('.banner-pointer'),
          points = document.querySelectorAll('.banner-pointer li');
      }
    }
  })
</script>

<style scoped lang="scss">
  .banner-box { position: relative; overflow: hidden;
    .banner { display: flex;
      .banner-item { width: 100%; flex: none; }
    }
    .banner-item img { width: 100%; display: block; }
    .banner-pointer { position: absolute; left: 0; bottom: 10px; width: 100%; text-align: center;
      li { display: inline-block; margin-right: 8px; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 1px solid #66b1ff; }
      .active { background: #66b1ff; }
    }
  }
</style>
