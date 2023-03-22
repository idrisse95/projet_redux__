import { configureStore, createSlice } from "@reduxjs/toolkit";



export const achat = createSlice(
    {
        name: 'achat',
        initialState:
        {
            panier: [],
        },
        reducers: {
            add: (state, action) => {
                state.panier.push(action.payload)
                console.log(state.panier);
                console.log('bonjour');
            },
            delet: (state, action) => {
                state.panier = state.panier.filter(item => item.id !== action.payload.id);
                console.log('oui');
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