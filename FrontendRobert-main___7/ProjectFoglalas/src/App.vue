<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">


      <nav>
        <RouterLink class="link" to="/">Foglalás</RouterLink>
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
  background-color: rgb(136, 136, 136);
  height: 40px;
  
}

.link{
  text-decoration: none;
  color: black;
  margin-left: 26px;
  
}
.link:hover{
  font-weight: bold;
}





</style>
