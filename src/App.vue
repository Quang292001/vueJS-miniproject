<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link class="p-2 text-dark" to="/">Vue Mini Project</router-link>
    
     </h5>
    <nav class="my-2 my-md-0 mr-md-3">

      <router-link class="p-2 text-dark" to="/product">Product management</router-link>
      <router-link class="p-2 text-dark" to="/user">User management</router-link>
    </nav>
    <router-link class="btn btn-outline-primary" to="/cart">Administrator</router-link>
  </div>

  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
