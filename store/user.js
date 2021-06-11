import $cookies from "cookie-universal-nuxt"


export const state = () => ({
  name: ""
})

export const mutations = {
  setName(state, name) {
    state.name = name
  }
}

export const actions = {
  init({ commit }) {
    const name = this.$cookies.get("name")
    if (name) {
      commit("setName", name)
    }
  },
}

export const getters = {
  name: (state) => state.name
}
