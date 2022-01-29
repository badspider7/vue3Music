<template>
  <!-- 头部 -->
  <Header />
  <!-- 主体 -->
  <main>
    <!-- 轮播图 -->
    <div class="carsouel main">
      <n-carousel show-arrow dot-type="line" autoplay>
        <img
          v-for="(item, index) in banner"
          :key="index"
          class="carousel-img"
          :src="item.imageUrl"
        />
      </n-carousel>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommendList main">
      <div class="title">
        推荐歌单
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinle"></use>
        </svg>
      </div>
      <div class="lists">
        <div class="list" v-for="(item, index) in recommendLists" :key="index">
          <img :src="item.picUrl" alt="" />
          <n-ellipsis style="max-width: 200px">
            {{ item.name }}
          </n-ellipsis>
          <div class="mask">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinle1"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news main">
      <div class="title">
        最新音乐
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-renzheng"></use>
        </svg>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in news" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}</div>
            <div>--{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新MV -->
    <div class="nextMV main">
      <div class="title">
        推荐MV
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanjun"></use>
        </svg>
      </div>
      <div class="contents">
        <div class="MVContent" v-for="(item, index) in nextMV" :key="index">
          <div class="mv">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            <span class="count">{{ parseInt(item.playCount / 10000) }}万</span>
            <img :src="item.cover" alt="" />
          </div>
          <div class="mvName">{{ item.name }}</div>
          <div class="artistName">{{ item.artistName }}</div>
        </div>
      </div>
    </div>
  </main>
  <!-- 底部 -->
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCarsouelStore } from "@/store/carsouel";
import { storeToRefs } from "pinia";
import { onMounted, components } from "vue";
// actions
const { getBanner, getRecommnedList, getNews, getNewsMV } = useCarsouelStore();
// state
const { banner, recommendLists, news, nextMV } = storeToRefs(
  useCarsouelStore()
);
components: {
  Header, Footer;
}
onMounted(() => {
  getBanner();
  getRecommnedList();
  getNews();
  getNewsMV();
});
</script>

<style lang="scss" scoped>
.main {
  width: 1080px;
  margin: 0 auto;
}
main {
  margin-top: 80px;
  .recommendList {
    margin-top: 20px;
    .title {
      font-size: 16px;
      padding: 10px;
      border-bottom: 1px solid #18a058;
    }
    .lists {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      .list {
        position: relative;
        margin-top: 20px;
        height: 200px;
        width: 200px;
        border-radius: 5px;
        &:hover {
          cursor: pointer;
          .mask {
            transform: scale(1);
            opacity: 1;
          }
          // .icon{
          //   transform: rotate(360deg);
          // }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
        .mask {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: scale(0.8);
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          transition-property: opacity, visibility, transform, -webkit-transform;
          transition-duration: 0.23s, 0.23s, 0.23s, 0.23s;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1),
            cubic-bezier(0, 0, 0.2, 1), cubic-bezier(0, 0, 0.2, 1),
            cubic-bezier(0, 0, 0.2, 1);
          transition-delay: 0s, 0s, 0s, 0s;
          .icon {
            width: 5em;
            height: 5em;
            // transition: rotate .8s ease-in-out 0;
          }
        }
      }
    }
  }
  .news {
    margin-top: 40px;
    .title {
      font-size: 16px;
      padding: 10px;
      border-bottom: 1px solid #18a058;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 700px;
      padding-top: 20px;
      .item {
        display: flex;
        margin-bottom: 20px;
        &:hover {
          cursor: pointer;
        }
        img {
          width: 100px;
          height: 100px;
        }
        .song-wrap {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 15px;
          margin-left: 5px;
          .song-name {
            font-size: 18px;
            & + div {
              font-size: 10px;
              text-indent: 2em;
            }
          }
        }
      }
    }
  }
  .nextMV {
    .title {
      font-size: 16px;
      padding: 10px;
      border-bottom: 1px solid #18a058;
    }
    .contents {
      display: flex;
      flex-wrap: wrap;
      padding-top: 40px;
      gap: 25px;
      .MVContent {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          position: absolute;
          top: 5%;
          right: 20%;
          width: 1.2em;
          height: 1.2em;
        }
        .count {
          position: absolute;
          top: 3%;
          right: 0;
          color: white;
        }
        img {
          width: 250px;
          height: 150px;
          border-radius: 5px;
        }
        .mvName {
          font-size: 16px;
          font-weight: 900;
        }
      }
    }
  }
}
</style>
