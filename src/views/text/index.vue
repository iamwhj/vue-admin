<template>
  <div>TX</div>
</template>

<script>
import getlist from '@/api/test';

export default {
  created() {
    getlist('daw');
  }
};
</script>

<style lang="scss">

</style>