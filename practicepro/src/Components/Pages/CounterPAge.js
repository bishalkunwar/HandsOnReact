// import { useState } from "react";
import { useReducer } from "react";
import Button from "../CustomNavigationAndRouting/Button"
// import useCounter from "../hooks/useCounter";
import Panel from "../CustomNavigationAndRouting/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const CHANGE_VALUE_TO_ADD = "change_value_to_add";


const reducer = (state, action) => {
   
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count+1,
            };
        case DECREMENT:
            return{
                ...state,
                count: state.count-1
            };

        case CHANGE_VALUE_TO_ADD:
            return{
                ...state,
                valueToAdd: action.payload
            }; 

        default:
            return state;
            // throw new Error('Unexpected action type: '+action.type);
    }
}


//     if(action.type === INCREMENT){
//         return{
//             ...state,
//             count: state.count+1,
//         };
//     };
    
//     if(action.type === DECREMENT){
//         return{
//             ...state,
//             count: state.count-1
//         };
//     };

//     if(action.type === CHANGE_VALUE_TO_ADD){
//         return{
//             ...state,
//             valueToAdd: action.payload
//         };
//     };

//     //    return{
//     //     ...state,
//     //     count: state.count + 1
//     //    };
   
//     // // Bad practice, coz we should not state the objects directly.
//     // state.count =  state.count+1,
//     // return state; // this type of state handle will cause mutate the object. 
// };

export default function CounterPage({initialCount}){
    const [state, dispatch] = useReducer(reducer, {count: initialCount, valueToAdd: 0});
    // const[count, setCount] = useState(initialCount)

    console.log(state);
   
    
    const decrement = () =>{
        dispatch({
            type: 'decrement' // this is the community convention , we can pass any strings.
        });
        // setCount(count-1);
    };

    const increment = () => {
        dispatch({
            type: 'increment'
        });
        // setCount(count+1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: 'change-value-to-add',
            payload: value  // Payload is optional.
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return(
        <Panel className="m-3">
            <h1 className="text-lg">Count is : {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>decrement </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add Me!...Number</label>
                <input onChange={handleChange} type="number" className="p-1 m-3 bg-gray border border-gray-300"/>
                <Button type="submit">Add Me</Button>
            </form>
        </Panel>
    );
}
