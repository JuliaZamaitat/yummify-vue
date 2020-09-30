<template>
    <div>
        <h1>Your Recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.id">
             <Recipe :recipe="recipe"></Recipe>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import Recipe from '@/components/Recipe.vue'
export default {
  components: {
    Recipe
  },
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
