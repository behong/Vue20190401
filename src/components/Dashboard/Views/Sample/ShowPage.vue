<template>
  <div>
    <h1>상세 </h1>

  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/${id}`)
    .then((response) => {
      this.movie = response.data
    })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>
