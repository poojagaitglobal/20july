
export const addUser= (text)=>{

  return{
        type: 'ADD_USER',
        payload:{
           id: new Date().getTime(),
           text: text,
            
        
    },
   }
 }
   export const  deleteUser = (id)=>{
        return {
        type: 'DELETE_USER',
        payload: id ,
        };
        
   };
  
  


