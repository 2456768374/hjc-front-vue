<script setup>
import { reactive } from "vue";
const name = "Header";
const menus = reactive([
  {
    level1: {
      name: "menu1",
      path: "/menu1",
    },
    level2: [
      {
        name: "item1",
        path: "/menu1/item1",
      },
      {
        name: "item2",
        path: "/menu1/item2",
      },
      {
        name: "item3",
        path: "/menu1/item3",
      },
    ],
  },
  {
    level1: {
      name: "menu2",
      path: "/menu2",
    },
    level2: [
      {
        name: "item1",
        path: "/menu2/item1",
      },
      {
        name: "item2",
        path: "/menu2/item2",
      },
      {
        name: "item3",
        path: "/menu2/item3",
      },
    ],
  },
  {
    level1: {
      name: "menu3",
      path: "/menu3",
    },
    level2: [
      {
        name: "item1",
        path: "/menu3/item1",
      },
      {
        name: "item2",
        path: "/menu3/item2",
      },
      {
        name: "item3",
        path: "/menu3/item3",
      },
    ],
  },
]);
</script>

<template>
  <header>
    <div class="logo">Logo</div>
    <div class="menu">
      <ul>
        <!-- 一级菜单 -->
        <li v-for="(menu, index) in menus" :key="index">
          <!-- <a :href="menu.level1.name.path">{{ menu.level1.name }}</a> -->
          <router-link to="/path">{{ menu.level1.name }}</router-link>
          <ul>
            <!-- 二级菜单 -->
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="search">
      <button>搜索</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  background-color: #3b4675;
  color: #f4f4f4;
  .logo {
    width: 128px;
    height: 60px;
    line-height: 60px;
    padding: 0 12px 0 32px;
    font-size: 21px;
  }
  .menu {
    margin-left: auto;
    ul {
      display: flex;
      li {
        padding: 3px 15px;
        font-size: $max-font-size;
        a {
          color: #f4f4f4;
        }
      }
    }
  }
}
</style>
