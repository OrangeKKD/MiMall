<template>
  <div class="header">
    <!-- 头部条 -->
    <div class="nav-topbar">
      <div class="container">
        <!-- 左右布局 -->
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议服务</a>
        </div>
        <div class="topbar-user">
          <a href="/#/order/list">我的订单</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <!-- 头部导航栏 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <!-- 有隐藏框区域 -->
            <div class="children">
              <ul class="product-list">
                <li class="product" v-for="item in productList" :key="item.id">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米手机</span>
            <!-- 有隐藏框区域 -->
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <!-- 有隐藏框区域 -->
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" id="" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.getProductList()
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    async getProductList() {
      const res = await this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      })
      this.productList = res.list
      // console.log(res)
      if (res.list.length >= 6) {
        this.productList = res.list.slice(0, 6)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      // display: flex;
      // justify-content: space-between;

      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        color: #fff;
        text-align: center;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, '../../public/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();

      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &::before {
            content: '';
            @include bgImg(55px, 55px, '../../public/imgs/mi-logo.png');
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url('../../public/imgs/mi-logo.png') no-repeat center;
            // background-size: contain;
            transition: all 0.2s;
          }
          &::after {
            content: '';
            @include bgImg(55px, 55px, '../../public/imgs/mi-home.png');
          }
          &:hover::before {
            margin-left: -55px;
          }
        }
      }
      .header-menu {
        width: 643px;
        display: inline-block;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: #ff6600;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0px;
            height: 0px;
            width: 1226px;
            overflow: hidden;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #ffffff;
            .product-list {
              display: flex;
              // flex: 1;
              .product {
                position: relative;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                flex: 1;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
                &::before {
                  position: absolute;
                  content: '';
                  background-color: $colorF;
                  top: 26px;
                  right: 0;
                  height: 111px;
                  width: 1px;
                }
                &:last-child::before {
                  display: none;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          border: 1px solid #e0e0e0;
          height: 50px;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '../../public/imgs/icon-search.png');
            margin-left: 14px;
          }
        }
      }
    }
  }
}
</style>
