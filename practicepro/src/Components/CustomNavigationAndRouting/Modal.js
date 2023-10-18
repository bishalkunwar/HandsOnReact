import ReactDOM from 'react-dom';

export  default function Modal({onClose, actionBar, children}){

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose } className="absolute inset-0 bg-gray-300 opacity-80"></div>
            
            <div className="absolute inset-40 p-10 bg-white">
<<<<<<< HEAD
                <div className='flex flex-col justify-between h-full'>
                    {children} 
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
=======
                {children} 
                {actionBar}
>>>>>>> 562e577c6d9d35006c49774662e58943653dad31
            </div>
        </div>,
        document.querySelector('.model-container')
    );
};