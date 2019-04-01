<template>
  <div>
    <button @click='aaa()'>aaaaaaaaaaaaaaaaa</button>
    <span v-text='bbb'></span>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      bbb: '',
      ccc: 0
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    menus: gql`query {
      menus{
        hiMenuId
        menuId
        menuNm
      }
    }`,
  },
  methods: {
    aaa: function () {

      var str = '';
      for (var i = 0; i < this.menus.length; i++) {
        if (this.ccc === 0) {
          str += '<h1>' + this.menus[i].menuNm + '</h1><br/>'
        } else if (this.ccc === 1) {
          str += '<h1>' + this.menus[i].menuId + '</h1><br/>'
        } else if (this.ccc === 2) {
          str += '<h1>' + this.menus[i].hiMenuId + '</h1><br/>'
        } else {
          alert('메롱')
          return false
        }
      }

      this.bbb = str
      this.ccc++
    }
  },
}
</script>
