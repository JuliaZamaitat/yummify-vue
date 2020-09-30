<template>
    <div>
        <div class="card small-card shadow-sm">
        <div class="card-header text-right p-0">
            <a class="btn delete-button" @click="deleteRecipe">
            <font-awesome-icon icon="trash" />
            </a>
        </div>
        <div class="card-body pb-0">
            <div class="recipe-text" contenteditable="true" @blur="updateRecipe" >{{ recipe.title }}</div>
        </div>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/ApiService.js'
export default {
  props: ['recipe'],
  methods: {
    updateRecipe (e) {
    //   AuthService.updateNote(this.id, e.target.innerText)
    },
    async deleteRecipe () {
    //   await AuthService.deleteNote(this.id)
    //   this.$parent.getNotes()
    }
  }
}
</script>

<style scoped>
.small-card.card {
  background-color: rgba(246, 204, 118, 0.35);
  border: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2) !important;
}
</style>