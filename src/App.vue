<template>
  <div class="box">1</div>
  <router-view></router-view>
  <!-- ctrl + i 提示 -->
  <van-button type="primary">点击</van-button>
  <van-button type="success">带年纪</van-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref, reactive, toRefs } from 'vue'

const router = useRouter()
const route = useRoute()
</script>

<style lang="scss" scoped></style>
