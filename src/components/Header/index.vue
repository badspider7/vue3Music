<template>
  <header class="header">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wangyiyunyinle"></use>
      </svg>
      <span><a href="#">网易云</a></span>
    </div>
    <div class="search">
      <n-input round placeholder="搜索">
        <template #suffix>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </template>
      </n-input>
    </div>
    <div class="table">
      <n-tabs type="line">
        <n-tab name="find">
          <router-link to="/">发现音乐</router-link>
        </n-tab>
        <n-tab name="recommend">
          <router-link to="/recommend">推荐歌单</router-link>
        </n-tab>
        <n-tab name="news">
          <router-link to="/news">最新音乐</router-link>
        </n-tab>
        <n-tab name="movie">
          <router-link to="/MV">最新MV</router-link>
        </n-tab>
      </n-tabs>
    </div>
    <div class="login">
      <div>登录/注册</div>
    </div>
  </header>
</template>

<script setup>
import { onMounted,nextTick,ref } from 'vue';

onMounted(()=>{
  const tabsInstRef = ref('news');
 nextTick(() => tabsInstRef?.syncBarPosition());
 console.log(tabsInstRef.value);
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  // border-bottom: 1px solid #ccc;
  box-shadow: 0px 3px 4px 2px #ccc;
  background-color: #fff;
  z-index: 99;
  .logo {
    font-size: 18px;
    &:hover {
      cursor: pointer;
      a {
        color: #18a058;
      }
    }
  }
  .search {
    margin-left: 200px;
  }
}
</style>

