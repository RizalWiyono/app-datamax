<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Number</router-link></b-nav-item>
        <b-nav-item><router-link to="/stopwatch">Stopwatch</router-link></b-nav-item>
        <b-nav-item><router-link to="/api">API</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
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
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-expand {
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  padding: 0 20px;

  margin-bottom: 20px;
}
</style>
