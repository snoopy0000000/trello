<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <issue-detail></issue-detail>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    IssueDetail: () => import('@/components/main/IssueDetail.vue'),
  },
};
</script>
