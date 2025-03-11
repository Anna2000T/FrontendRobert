<template>


  <div class="container">

    <h1>Foglalás: </h1>

    <form v-on:submit.prevent="save">
  <label >Full name: </label><br>
  <input  v-model="name"><br>


  <label  for="lname">Phone number: </label><br>
  <input v-model="phoneNumber" ><br>





  <button type="submit" >save</button>








</form >

<div class="container">

  <h3>Lefoglalható időpontok:</h3>

<div class="card" v-for="i in szol.szolgaltatasokList.filter(i=> i.idopont === '')">
    <div class="card-head">{{ i.name  }}</div>
    <div class="card-body">
      {{ i.idopont  }} <br>
    {{ i.foglaloNev }} <br>
   {{ i.foglaloTelefonszama }}


    </div>


    <div class="card-footer"><button @click="selectService(i)" class="d-inline-block">Book</button>

      <button @click="deleteService(i)" class="d-inline-block m-2">delete</button>
    
    </div>
  </div>


</div>




<div class="container">

  <h3>Lefoglalat időpontok:</h3>

<div class="card" v-for="i in szol.szolgaltatasokList.filter(i=>i.idopont !== '')">
    <div class="card-head">{{ i.name  }}</div>
    <div class="card-body">
      {{ i.idopont  }} <br>
    {{ i.foglaloNev }} <br>
   {{ i.foglaloTelefonszama }}


    </div>


    <div class="card-footer"><button @click="selectService(i)" class="d-inline-block">Book</button>

      <button @click="deleteService(i)" class="d-inline-block m-2">delete</button>
    
    </div>
  </div>


</div>


    
  </div>


</template>



<script setup>
import { ref } from 'vue';
import { useSzolgaltatasok } from '@/stores/SzolgaltatasStore.js';
import { useRoute, useRouter } from 'vue-router';

const szol = useSzolgaltatasok()


const name = ref("")
const phoneNumber = ref("")

const router = useRouter()



console.log("Átpusholt date: ",szol.dateAdat)

const save = () =>{

  if(name.value === '' || phoneNumber.value === '')
{
  alert("Hiba! töltseki mindkettő adatot!")
}
else
{
  alert(`Adatok sikeresen elmentve  név:${name.value} telefonszám: ${phoneNumber.value}  foglalatidőpont: ${szol.dateAdat}`)
  console.log("Név: ", name.value)
  console.log("Phone number: ", phoneNumber.value)

}

}


const selectService = (i) =>{
  console.log(i.id)
  console.log("Átkelladat:", szol.dateAdat)
  console.log(i.foglaloTelefonszama)


  if(i.idopont !== "")
{
  alert('Its already Booked!')
}
else{

  if(name.value === '' && phoneNumber.value === '')
{
    alert("Please fill the form first!")

}
else if(szol.dateAdat === ''){

  alert('Nem választot időpontot!!')
  router.push("/")


}
else{
  szol.IdopontPut(i.id,szol.dateAdat,name.value,phoneNumber.value)
  szol.dateAdat = ''
  name.value = ''
  phoneNumber.value = ''

}


}

}


const deleteService = (i) =>{

  if(i.idopont === "" && i.foglaloNev  === "" && i.foglaloTelefonszama === "")
{
  alert('Its alreay empty.... why would you want to delete it?')

}
else
{
  console.log(i.id)
  console.log(i.idopont.value)

  szol.IdopontDelete(i.id)


}
 


}








szol.szolgaltatasokGet()

console.log(szol.szolgaltatasokList)



</script>


<style>
.card{
  width: 60vh;
  margin: 10px;

}

.card-body{
  padding: 5px;
}
.card-head{
  padding: 5px;
}

button{
  border-radius: 20px;
  border-color: rgb(231, 222, 222);
  margin: 10px;

}

.container{
  padding: 30px;
}




</style>