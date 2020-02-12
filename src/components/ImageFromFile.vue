<template>
  <img ref="img" src="" alt="">
</template>

<script>
export default {
  props: {
    file: {
      type: File,
      required: true
    }
  },
  mounted () {
    const reader  = new FileReader();
    const preview = this.$refs.img
    reader.addEventListener("load", function () {
      preview.src = reader.result
    }, false)

    if (this.file) {
      reader.readAsDataURL(this.file)
    }
  }
}
</script>

<style>

</style>