import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSzolgaltatasok = defineStore('Szolgáltatások', () => {
  const szolgaltatasokList = ref([])
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

  const szolgaltatasokPatch = async (id,idopont) =>{   

    try{
    const response = await axios.patch(`http://localhost:3000/szolgaltatasok${id}`,{idopont});
    console.log(response.data)
    
    }

    catch(err)
    {
      console.log(err)
    }

  }




  return { szolgaltatasokGet, szolgaltatasokList,szolgaltatasokPatch}
})
