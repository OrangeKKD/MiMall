<template>
  <div>
    <div class="index">
      <div class="container">
        <!-- 轮播图开始 -->
        <div class="swiper-box">
          <!-- 轮播图侧边导航栏开始 -->
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:;">手机 电话卡</a>
                <div class="children">
                  <ul v-for="(row, index) in menuList" :key="index">
                    <li v-for="(item, index) in row" :key="index">
                      <a :href="item ? '/product/' + item.id : '/product/30'"
                        ><img v-lazy="item ? item.img : '/imgs/item-box-1.png'" alt="" />
                        {{ item ? item.name : '小米青春版' }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电视 盒子</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">笔记本 平板</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">家电 插线板</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">出行 穿戴</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">智能 路由器</a>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电源 配件</a>
              </li>
            </ul>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </div>
          <!-- 轮播图侧边导航栏结束 -->
          <swiper :options="swiperOptions">
            <swiper-slide v-for="item in slideList" :key="item.id"
              ><a :href="'/product/' + item.id"><img v-lazy="item.img" /></a
            ></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <!-- 轮播图结束 -->
        </div>
        <!-- 广告栏开始-->
        <div class="ads-box">
          <ul>
            <li v-for="item in adsList" :key="item.id">
              <a :href="'/product/' + item.id"><img v-lazy="item.img" alt="" /></a>
            </li>
          </ul>
        </div>
        <!-- banner -->
        <div class="banner">
          <a href="/#/product/30">
            <img src="/imgs/banner-1.png" alt="" />
          </a>
        </div>
        <!-- 产品展示 -->
        <div class="product-box">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="left-box">
              <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt="" /></a>
            </div>
            <div class="phone-list">
              <ul v-for="(row, index) in phoneList" :key="index">
                <li v-for="item in row" :key="item.id">
                  <span v-bind:class="{ 'new-pro': index % 2 == 0, 'kill-pro': index % 2 !== 0 }">新品</span>
                  <a :href="'/product/' + item.id">
                    <img v-lazy="item.mainImage" alt="" />
                  </a>
                  <div class="phoneName">{{ item.name }}</div>
                  <div class="subTitle">{{ item.subtitle }}</div>
                  <div class="price" @click="addCart(item.id)">{{ item.price }}元</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal-dialogue :btnType="'3'" :cancelText="'取消'" :modalType="'small'" :showModal="ModalStatus" :sureText="'确定'" :title="'提示'" @cancel="ModalStatus = false" @submit="submit">
      <template v-slot:body>
        <p>购物车添加成功！</p>
      </template>
    </modal-dialogue>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
import ModalDialogue from '@/components/ModalDialogue.vue'

export default {
  components: { ServiceBar, swiper, swiperSlide, ModalDialogue },
  name: 'MallIndex',
  data() {
    return {
      // 轮播图设置
      swiperOptions: {
        // 自动播放
        autoplay: true,
        // 循环播放
        loop: true,
        // 播放效果-方块
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
      ModalStatus: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then((res) => {
          res.list = res.list.slice(6, 14)
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        })
    },
    addCart() {
      this.ModalStatus = true
    },
    submit() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';
.index {
  .container {
    .swiper-box {
      position: relative;
      .nav-menu {
        box-sizing: border-box;
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 8;
        background-color: #55585a7a;
        padding: 26px 0;

        .menu-item {
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          a {
            position: relative;
            display: block;
            color: #fff;
            font-size: 16px;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '../../public/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            z-index: 10;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;

                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height: 35px;
                    margin-right: 15px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
      // 重写第三方样式
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          margin-left: 264px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      margin-top: 14px;
      margin-bottom: 20px;
      ul {
        @include flex();
        li {
          img {
            width: 296px;
            height: 167px;
          }
        }
      }
    }
    .banner {
      height: 130px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        // margin-right: 16px;
        display: flex;
        .left-box {
          img {
            width: 224px;
            height: 619px;
          }
        }
        .phone-list {
          flex: 1;
          height: 619px;
          text-align: center;
          background-color: $colorG;
          ul {
            @include flex();
            li {
              span {
                margin-top: 10px;
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: $colorG;
                &.new-pro {
                  background-color: #7ecf68;
                }
                &.kill-pro {
                  background-color: #e82626;
                }
              }
              img {
                width: 100%;
                height: 200px;
              }
              .phoneName {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              .subTitle {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '../../public/imgs/icon-cart-hover.png');
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
