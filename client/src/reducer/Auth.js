const initialState = {
user:null
}

const authReducer = (state = initialState , action)=>{
    switch (action.type) {
        case "AUTH":
            return { ...state, user: action?.data };
            
        default:
            return state;  
    }
}
export default authReducer;
