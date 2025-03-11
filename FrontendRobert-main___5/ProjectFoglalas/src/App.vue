<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">


      <nav>
        <RouterLink class="link m-3" to="/">Foglalás</RouterLink>
        <RouterLink class="link" to="/szolgaltatas">Szolgáltatások</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

nav{
  display: flex;
  align-items: center;
  background-color: grey;
  height: 40px;
  
}

.link{
  text-decoration: none;
  color: black;
  
}




</style>
