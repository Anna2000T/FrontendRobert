
<template>

 
  <form v-on:submit.prevent="save">

    <h1 style="text-align: center;">Welcome to our datepicket website</h1>

<h3>Please pick a date: </h3>

<VueDatePicker style="width: 300px;" v-model="date" placeholder="Chooose a date" ></VueDatePicker>

<button type="submit">Send</button>
  

</form>

</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import router from '@/router';


const date = ref(new Date(null))

const save = () =>{


  if(date.value === null)
{
  alert('Please select a date!')
}
else
{
  console.log(date.value)
  router.push(  {path:"/szolgaltatas",  query:  {date : date.value}})

}
  
  
}











</script>
