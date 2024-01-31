<script setup>
import PostCard from "@/components/PostCard.vue";
import SideCard from "@/components/SideCard.vue";
</script>
<template>
  <div class="container">
    <div id="main-image" class="main-image">
      <img src="../assets/home.jpg" alt="首页主图" class="image" />
    </div>
    <div class="contents">
      <main class="main-contents">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </main>
      <div class="sidebar">
        <SideCard></SideCard>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  /* 主体内容flex主轴变为纵轴，从而实现居中效果 */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-image {
  .image {
    width: 100%;
    background-size: cover;
  }
}
/* todo:样式有问题 */
.contents {
  display: flex;
  margin-top: 30px;
  max-width: 1200px;
  .main-contents {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
  }
  .sidebar {
    width: 30%;
  }
}
</style>
