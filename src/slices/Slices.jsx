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

// SLICE CONNECTION
const loginDb = [
    {email: 'test@hotmail.be', password: "0123"}, 
    {email: "ttt@hotmail.com" , password: '789'}
]

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        acces: false,
        denied: false,
        email: null
    },
    reducers: {
        submit: (state, action)=>{
            const {email , password} = action.payload;

            const hasUser = loginDb.some(user => user.email === email && user.password === password);
            if (hasUser) {
                return {acces: true, denied: false, email: email}
            } else {
                return {acces: false, denied: true}
            }         
        },
        logout: ()=>{
            return {acces: false, denied: false}
        }
    }
})

export const {submit,logout} = loginSlice.actions;
// export default loginSlice.reducer;

// export 
export const { add, delet } = achat.actions;


export const store = configureStore({
    reducer: {
        achat: achat.reducer,
        connection: loginSlice.reducer
    }
})