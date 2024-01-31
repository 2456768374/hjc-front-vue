<script setup></script>
<template>
  <div class="container">
    <div id="main-image" class="main-image">
      <img src="../assets/home.jpg" alt="首页主图" class="image" />
    </div>
    <div class="contents">
      <main class="main-contents">
        <div class="content">
          <a href="">
            <div class="content-image">
              <img src="../assets/content-image.jpg" alt="" />
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
        <div class="content">
          <a href="" class="content-a">
            <div class="content-image">
              <img src="../assets/content-image.jpg" alt="" />
            </div>
            <div class="content-desc">【P站精选】动漫电脑壁纸 Vol. 394</div>
            <div class="content-time">2024年1月30日</div>
            <div class="content-meta">P站美图</div>
          </a>
        </div>
        <div class="content">
          <a href="">
            <div class="content-image">
              <img src="../assets/content-image.jpg" alt="" />
            </div>
            <div class="content-desc">【P站精选】动漫电脑壁纸 Vol. 394</div>
            <div class="content-time">2024年1月30日</div>
            <div class="content-meta">P站美图</div>
          </a>
        </div>
        <div class="content">
          <a href="">
            <div class="content-image">
              <img src="../assets/content-image.jpg" alt="" />
            </div>
            <div class="content-desc">【P站精选】动漫电脑壁纸 Vol. 394</div>
            <div class="content-time">2024年1月30日</div>
            <div class="content-meta">P站美图</div>
          </a>
        </div>
      </main>
      <div class="sidebar">
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
    .content {
      box-sizing: border-box;
      width: 45%;
      margin: 10px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      position: relative;

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
  }
  .sidebar {
    width: 30%;
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
  }
}
</style>
