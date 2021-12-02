import {CREATE_POST,EDIT_POST,DELETE_POST} from "../Actions/actionTypes";

const initialState = {
    posts: [
      {
        "id": 1,
        "name": "Adam",
        "address":"chennai",
        "contact": 646464631
      },
      {
        "id": 2,
        "name": "Eve",
        "address":"chennai",
        "contact": 435667829
      }
    ],
    currentPost: null,
  };
  
  const addReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case CREATE_POST:
        return {
          ...state,
          posts:state.posts.concat(action.payload),
          currentPost: null,
        };

        case EDIT_POST:
          // debugger 
          // let data = state.posts.map(data => (data.id === action.payload.id ? action.payload : data));
          // console.log("HHHHHHHHHHHHH...:", {data})
            return {
              ...state,
              posts: state.posts.map(data => (data.id === action.payload.id ? action.payload : data)),
              currentPost: null,
            };
    
        // case EDIT_POST:
        //   return {
        //     ...state,
        //     posts: state.posts.map((content, i) =>
        //       content.id === action.payload.id
        //         ? {
        //             ...content,
        //             name: action.payload.name,
        //             contact: action.payload.contact,
        //             address:action.payload.address,
        //           }
        //         : content
        //     )
        //   };



            case DELETE_POST:
              
                return {
                  ...state,
                  posts:  state.posts.filter((post) => post.id !== action.payload.id),
                  currentPost: null,
                };
        




      default:
        return {
          ...state,
        };
    }
  };
  
  export default addReducer;