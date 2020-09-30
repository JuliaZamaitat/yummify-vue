<template>
    <div>
        <h1>Your Recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.id">
            <h2>{{recipe.title}}</h2>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
export default {
  data () {
    return {
      recipes: []
    }
  },
  created () {
      this.getRecipes()
  },
  methods: {
    async getRecipes () {
      this.recipes = await ApiService.getRecipes()
      console.log("finished")
    }
  }
}
</script>

<style scoped>

</style>
