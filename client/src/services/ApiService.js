import axios from 'axios'
const url = 'http://localhost:3000/api/'

export default {
  getRecipes () {
    return axios.get(url + 'recipes')
      .then((recipes) => {
        return recipes.data
      }).catch(e => console.log(e))
  }
}
