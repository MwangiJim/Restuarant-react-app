const initialState = {
    order:[
       
    ],
    User:'',
    username:''
}

export const orderReducer = (state = initialState,action) =>{
    console.log(action)
    switch (action.type) {
        case 'ADDTOORDER':
              return {
                 ...state,
                 order:[...state.order,action.payload]
             };
        case 'REMOVEFROMCART':
            let index = state.order.indexOf((basketIndex)=>{
                basketIndex=index
            })
            console.log(index)
            let newOrder = [...state.order];
            if(index <= 0){
                newOrder.splice(index,1)
            }
            return {
                ...state,
                order:newOrder
            }
        case 'SETUSER':
            return {
                ...state,
                User:action.payload
            }
        case 'SETUSERNAME':
            return {
                ...state,
                username:action.payload
            }
        default:
            return state;
    }
}