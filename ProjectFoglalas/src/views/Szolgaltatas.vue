<template>


  <div class="about">

    <h1>Foglalás: </h1>

    <form v-on:submit.prevent="save">
  <label >Full name: </label><br>
  <input  v-model="name"><br>


  <label  for="lname">Phone number: </label><br>
  <input v-model="phoneNumber" ><br>



  <select style="margin-top: 10px;">
    <option  v-for="i in szol.szolgaltatasokList" > 

      {{ i.name }}

    </option>



  </select>

  <button style="width: 30px; height: 20px;" >save</button>



</form >

    
  </div>


</template>



<script setup>
import { ref } from 'vue';
import { useSzolgaltatasok } from '@/stores/SzolgaltatasStore.js';

const szol = useSzolgaltatasok()


const name = ref("")
const phoneNumber = ref("")




const save = () =>{

  if(name === null && phoneNumber === nul)
{
  alert("Hiba! töltseki mindkettő adatot!")
}
else
{
  console.log("Név: ", name.value)
  console.log("Phone number: ", phoneNumber.value)

}

}




szol.szolgaltatasokGet()

console.log(szol.szolgaltatasokList)



</script>


