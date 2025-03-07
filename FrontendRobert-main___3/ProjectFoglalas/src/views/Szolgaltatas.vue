<template>


  <div class="about">

    <h1>Foglalás: </h1>

    <form v-on:submit.prevent="save">
  <label >Full name: </label><br>
  <input  v-model="name"><br>


  <label  for="lname">Phone number: </label><br>
  <input v-model="phoneNumber" ><br>





  <button type="submit" >save</button>








</form >



<div class="card" v-for="i in szol.szolgaltatasokList">
    <div class="card-head">{{ i.name  }}</div>
    <div class="card-body">{{ i.idopont  }}</div>

    <div class="card-footer"><button @click="selectService(i)" class="d-inline-block">Book</button>

      <button @click="deleteService(i)" class="d-inline-block m-2">delete</button>
    
    </div>
  </div>



    
  </div>


</template>



<script setup>
import { ref } from 'vue';
import { useSzolgaltatasok } from '@/stores/SzolgaltatasStore.js';
import { useRoute } from 'vue-router';

const szol = useSzolgaltatasok()


const name = ref("")
const phoneNumber = ref("")

const route = useRoute()

const date = route.query?.date

console.log("Átpusholt date: ",date)

const save = () =>{

  if(name.value === '' || phoneNumber.value === '')
{
  alert("Hiba! töltseki mindkettő adatot!")
}
else
{
  console.log("Név: ", name.value)
  console.log("Phone number: ", phoneNumber.value)

}

}


const selectService = (i) =>{
  console.log(i.id)
  console.log(i.foglaloNev)
  console.log(i.foglaloTelefonszama)


  if(name === null && phoneNumber === null)
{
    alert("Please fill the form first!")

}
else{
  szol.IdopontPut(i.id,date,name,phoneNumber)
}



}


const deleteService = (i) =>{
  console.log(i.id)
  console.log(i.idopont.value)

  szol.IdopontDelete(i.id,i.idopont.value)



}








szol.szolgaltatasokGet()

console.log(szol.szolgaltatasokList)



</script>


<style>
.card{
  width: 200px;
  margin: 10px;


}


</style>