import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'



export const useSzolgaltatasok = defineStore('Szolgáltatások', () => {
  const szolgaltatasokList = ref([])
  const dateAdat = ref("")




  const szolgaltatasokGet = async () =>{   

    try{
    const response = await axios.get('http://localhost:3000/szolgaltatasok');
    szolgaltatasokList.value = response.data
    
    }

    catch(err)
    {
      console.log(err)
    }

  }

  const IdopontPut = async (id,idopont,foglaloNev,foglaloTelefonszama) =>{   

    try{
    const response = await axios.patch(`http://localhost:3000/szolgaltatasok/${id}`,{
      idopont : idopont,
      foglaloNev : foglaloNev,
      foglaloTelefonszama

    }
  )

    console.log(response.data)

    if(response.status === 404)
    {
      alert('Please choose a date before you choose a service')
    }
    
    }

    catch(err)
    {
      console.log(err)
    }

  }

  const IdopontDelete = async (id,idopont) =>{   

    try{
    const response = await axios.patch(`http://localhost:3000/szolgaltatasok/${id}`,{
      idopont : idopont
    }

  )


    console.log(response.data)

    if(response.status === 404)
    {
      alert('you dont have any date :(')
    }
    
    }

    catch(err)
    {
      console.log(err)
    }

  }




  const adatbevetel = (adat) =>{

    dateAdat.value = adat


  }




  return { szolgaltatasokGet, szolgaltatasokList,IdopontPut,IdopontDelete, adatbevetel,dateAdat}
}
)
