const initialState ={
    tasks :[]
};


function taskreducer(state = initialState ,action){
   
  switch(action.type){
        case 'ADD_USER':
          return{
            ...state,
            tasks: [...state.tasks , action.payload]
          };

        case 'DELETE_USER':
            return{
            ...state,
            tasks: state.data.filter(tasks =>tasks.id !==action.payload)
            };

        default:
            return state;

    }
};

export default taskreducer;


