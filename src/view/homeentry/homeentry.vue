<template>
  <div>
    <div>
      <!-- vuex使用 -->
      <h1 class="VueView">vue基础架构测试(vuex使用)</h1>
      <h3 class="h3style">
        <button @click="changeData">Action修改数据</button>
        {{ this.$store.state.data }}
      </h3>
      <h3 class="h3style">getters计算：{{ this.$store.getters.doubleGet }}</h3>
      <!-- axios使用 -->
      <h1 class="VueView">vue基础架构测试(axios使用)</h1>
      <h3 class="h3style"></h3>
      <h1 class="VueView">过滤器的使用</h1>
      <h3 class="h3style">{{ price | myprice }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 10,
    }
  },
  filters: {
    myprice: function (price) {
      return '$' + price
    },
  },
  created() {},
  mounted() {
    //vuex
    this.$store.commit('CHANGEDATAMUT', 100) //出发mutations
  },
  methods: {
    //vuex
    changeData() {
      // 通过dispatch 触发 action 并传参,同时提交mutations方法
      this.$store.dispatch('changeDataAct', 200) //此时data就变成200啦
    },
  },
}
</script>

<style  scoped>
.VueView {
  background-color: beige;
  padding: 10px 0;
  text-align: center;
}
.h3style:nth-child(even) {
  background-color: green;
  padding: 10px 0;
  text-align: center;
}
.h3style:nth-child(odd) {
  background-color: #08c;
  padding: 10px 0;
  text-align: center;
}
</style>>