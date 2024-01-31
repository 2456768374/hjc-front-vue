<script setup>
defineProps(["title", "time", "tag", "imgUrl"]);
</script>
<template>
  <div class="content">
    <a href="">
      <div class="content-image">
        <img
          src="https://www.manqushe.com/wp-content/uploads/2023/02/1677060100-8d7bbac723a17d0-e1677060115547.jpg"
          alt=""
        />
      </div>
      <div class="content-desc">
        【P站精选】动漫电脑壁纸 Vol. 394 【P站精选】动漫电脑壁纸 Vol. 394
        【P站精选】动漫电脑壁纸 Vol. 394 【P站精选】动漫电脑壁纸 Vol. 394
        【P站精选】动漫电脑壁纸 Vol. 394 【P站精选】动漫电脑壁纸 Vol. 394
      </div>
      <div class="content-time">2024年1月30日</div>
      <div class="content-meta">P站美图</div>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  width: 45%;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
  .content-image {
    height: 200px;
    overflow: hidden;
  }
  img {
    width: 100%;
    background-size: cover;
  }
  .content-desc {
    font-size: $max-font-size;
    margin: 15px 17px;
    /* 设置最大、小高度为两行的高度，加上一些额外空间 */
    max-height: 2.5em;
    min-height: 2.5em;
    overflow: hidden; /* 隐藏超出部分 */
    color: #555555 !important;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .content-time {
    font-size: 0.75rem; /* 小型字体使用rem */
    letter-spacing: 2px;
    font-feature-settings: "palt";
    padding: 10px 15px;
    text-align: right;
  }
  .content-meta {
    position: absolute;
    top: 11px;
    left: 11px;
    color: #fff !important;
    background-color: #ffcd44 !important;
    font-size: 0.65rem;
    padding: 5px 12px;
    font-weight: 400;
    border-radius: 20px;
  }
}
.content:hover {
  transform: scale(1.005);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
