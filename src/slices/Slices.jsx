import { configureStore, createSlice } from "@reduxjs/toolkit";



export const achat = createSlice(
    {
        name: 'achat',
        initialState: 
               {
                panier:[],
               },
        reducers: {
            add: (state, action) => {
               state.panier.push(action.payload)
               console.log(state.panier);
            },
            

        }
    }
)

// export 
export const { add } = achat.actions;


export const store = configureStore({
    reducer: {
        achat: achat.reducer
    }
})