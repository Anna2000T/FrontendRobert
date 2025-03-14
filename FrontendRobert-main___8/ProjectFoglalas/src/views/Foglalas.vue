
<template>

 
  <form v-on:submit.prevent="save">

    <h2  class="m-4">Welcome to our datepicket website</h2>

<h3 class="m-3">Please pick a date: </h3>

<VueDatePicker  v-model="date" inline showWeek class="w-full sm:w-[30rem] naptar" :min-date="new Date()"  :year-range="[2025, 2026]" :disabled-week-days="[6, 0]" :min-time="{ hours: 9, minutes: 30 }" :max-time="{ hours: 19, minutes: 30 }"></VueDatePicker>

<button type="submit">Send</button>


  

</form>

</template>

<script setup>


import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import router from '@/router';
import { useSzolgaltatasok } from '@/stores/SzolgaltatasStore.js';




const adat = useSzolgaltatasok()
const date = ref(new Date(2025, 1));


const save = () =>{



  if(date.value === null)
{
  alert('Please select a date!')
}

else
{
  
  console.log(date.value)
  adat.adatbevetel(date.value)
  adat.dateAdat
  console.log(adat.dateAdat)
  router.push("szolgaltatas")
 
}





  
}











</script>

<style scoped>

button{
  border-radius: 20px;
  border-color: rgb(231, 222, 222);
  display: block;
  margin: auto ;
  width: 10vh;
  

}

h2 , h3{
  text-align: center;
}
.naptar{
  margin: auto;
  display: block;
  width: 500px;
  

}


</style>