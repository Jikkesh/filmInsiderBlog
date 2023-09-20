const initialState = {
    blogs: [],
    blog:[]
}

const blogReducer = (state = initialState , action)=>{

switch (action.type) 
{
    case "ADD_BLOG":
        
    return {...state , data: action?.data};

    case "GOT_BLOG":
        return {...state, blogs: action?.data};     

    case "DELETE_BLOG-SUCCESS":
        return {...state, blogs: action?.data};
    
        case "EDIT_SUCCESS":
        return {...state, blogs: action?.data};

        case "COMMENT_ADDED":
            return {...state};

            case "GOT_THE_DATA":
                return {...state , blog: action?.data};
        
        default:
    return state;
}

}
export default blogReducer;
   
        




