// import PropTypes from 'prop-types';
export default function Button({children, primary, secondary, success, warning, danger, outline, rounded }){

    return(
        <button className="px-3 py-1.5 border border-blue-600 bg-blue-400 text-white" onClick={()=>{alert("Hello button");}}>
            {children}
        </button>
    );
};

// Button.propTypes = {
//     checkVariationValue: ({primary, secondary, success, warning, danger})=>{
//         const count = Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger)

//         if(count>1){
//             return new Error(' Only one of Primary, Secondary, Success, Warning, Danger can be true');
//         }
//     },
// };