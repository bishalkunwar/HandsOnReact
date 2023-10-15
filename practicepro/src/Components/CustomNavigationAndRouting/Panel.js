import classNames from "classnames"

export default function Panel({children, classNames, ...rest}){

    const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full'); 
    return(
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
};