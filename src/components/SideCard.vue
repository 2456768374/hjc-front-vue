<script setup></script>
<template>
  <div class="description">
    <div class="profile">
      <img src="../assets/profile.jpg" alt="" />
    </div>
    <div class="introduction">贺建朝</div>
    <div class="introductio-2">Java/JavaScript/C++</div>
    <div class="link">联系方式：QQ/微信</div>
  </div>
  <div class="category"></div>
  <div class="friend-link">
    <div class="title">友情链接</div>
    <div class="item">贺建朝</div>
  </div>
</template>
<style lang="scss" scoped>
.description {
  padding: 30px;
  padding-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.18);

  margin-bottom: 20px;
  font-weight: 400;
  font-size: 0.95rem;
  .profile {
    background-color: #ffcd44;
    width: 110px;
    height: 110px;
    /* 通过margin也可实现居中效果 */
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
    }
    img:hover {
      transform: scale(1.1);
    }
  }

  .introduction {
    color: #555555 !important;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
  }
  .introductio-2 {
    color: #555555 !important;
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }
  .link {
    margin-top: 20px;
    font-size: 0.75rem;
    text-align: center;
  }
}

.friend-link {
  padding: 30px;
  padding-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.18);

  margin-bottom: 20px;
  font-weight: 400;
  font-size: 0.95rem;
  .title {
  }
  .item {
  }
}
</style>
