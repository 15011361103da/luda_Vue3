<template>
    <div>
      <button>
        <router-link to="/hello">hello</router-link>
      </button>
    </div>
</template>

<script>
    export default {
        name: "router-href"
    }
</script>

<style>
  a{text-decoraction:none;}
  .router-link-active {
    text-decoration: none;
  }
</style>
