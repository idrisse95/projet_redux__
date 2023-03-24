import { configureStore, createSlice } from "@reduxjs/toolkit";



export const achat = createSlice(
    {
        name: 'achat',
        initialState:
        {
            panier: [],
            zer:'scale-0'
        },
        reducers: {
            add: (state, action) => {
                state.panier.push(action.payload)
                if (state.panier.length > 0) {
                    state.zer="scale-1"
                }
                else{
                    state.zer="scale-0"
                }
               
            },
            delet: (state, action) => {
                state.panier = state.panier.filter(item => item.id !== action.payload.id); 
               
                return state
            }


        }
    }
)

// export 
export const { add, delet } = achat.actions;


export const store = configureStore({
    reducer: {
        achat: achat.reducer
    }
})