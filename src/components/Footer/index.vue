<template>
  <footer class="nai-footer">
    <div class="contact">
      <n-popover trigger="hover">
        <template #trigger>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use></svg
            >联系作者
          </span>
        </template>
        <span
          ><img
            src="./images/weixin.png"
            alt=""
            style="width: 200px; height: 200px"
        /></span>
      </n-popover>
    </div>
    <div class="tip">
      <n-popover trigger="hover">
        <template #trigger>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-_tishi"></use></svg
            >免责说明
          </span>
        </template>
        <span>此网站只用于学习,采用了vue3.2+pinia+naiveUI</span>
      </n-popover>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.nai-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top: 40px;
  gap: 80px;
  div:hover{
      color: #180;
      cursor: pointer;
  }
}
</style>
