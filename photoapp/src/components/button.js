// import PropTypes from 'prop-types';
import className from 'classnames';
import {GoSync} from "react-icons/go";

export default function Button({children, primary, secondary, success, warning, danger, outline, rounded, loading, ...rest }){

    const classes = className( ' flex items-center px-3 py-1.5 border mb-5 h-8', {
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-500 bg-gray-500 text-white':secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full':rounded,
        'border-teal-400':outline,
        'opacity-80': loading,

    });

    return(
        <button className={classes} disabled={loading} {...rest}>
            {loading ? <GoSync className='animate-spin'/>: children}
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