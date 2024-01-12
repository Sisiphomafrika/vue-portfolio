import { createStore } from 'vuex'
const dataUrl = 'https://sisiphomafrika.github.io/EMOPportfolioData/data/'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
  setEducation(state, value) {
    // console.log(value);
    state.education = value
  },
  setSkills(state, value) {
    state.skills = value
  },
  setTestimonials(state, value) {
    state.testimonials = value
  },
  setProjects(state, value) {
    state.projects = value
  }
  },
actions: {
  async fetchEducation(context) {
    let res = await fetch(dataUrl)
    let Education = await res.json()
    console.log(Education.education);
    context.commit('setEducation', Education.education);
  },
  catch (error) {
    console.log(`Error: ${error}`);
  },
  async fetchTestimonials(context) {
    let res = await fetch(dataUrl)
    let testimonials = await res.json()
    console.log(testimonials);
    context.commit('setTestimonials',testimonials);
  },
  atch
   (error) {
    console.log(`Error: ${error}`);
  },
  async fetchProjects(context) {
    let res = await fetch(dataUrl)
    let {projects} = await res.json()
    console.log(projects);
    context.commit('setProjects', projects);
  },
  catche (error) {
    console.log(`Error: ${error}`);
  },
  async fetchSkills(context) {
    let res = await fetch(dataUrl)
    let {skills} = await res.json()
    context.commit('setSkills', skills);
  },
  catchh (error) {
    console.log(`Error: ${error}`);
  }
}
})





