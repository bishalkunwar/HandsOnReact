import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addDog } from "../store";


export default function DogForm(){
    
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state)=> {
        return{
            name: state.form.name,
            cost: state.form.cost,
        }
    })

    const handleNameChange = (event) => {
       dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
       const dogCost = parseInt(event.target.value) || 0;
       dispatch(changeCost(dogCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addDog({name: name, cost: cost}));
        dispatch(changeName(''));
        dispatch(changeCost(0));
    }

    return(
        <div className="dog-form panel">
        <h4 className="subtitle is-3">Add a Dog</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" value={name} onChange={handleNameChange} />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" value={cost || 0} onChange={handleCostChange}/>
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
        </div>
    );
};