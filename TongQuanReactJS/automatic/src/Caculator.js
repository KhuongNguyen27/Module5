import React from 'react';
import { createRoot } from 'react-dom/client';


const process = (opera) => {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = parseInt(document.getElementById('secondNumber').value);
    let result = "";
    let error1 = !firstNumber ? "Please insert value" : '';
    let error2 = !secondNumber && typeof(secondNumber)==='number'? "Please insert value" : '';
    if (error1) {
        let error = createRoot(document.getElementById('error1'));
        error.render(error1);
        return;
    }
    if (error2) {
        let error = createRoot(document.getElementById('error2'));
        error.render(error2);
        return;
    }
    switch (opera) {
        case "+":
            result = <h2>Total : {firstNumber+secondNumber}</h2>;
            break;
        case "-":
            result = <h2>Difference : {firstNumber-secondNumber}</h2>;
            break;
        case "*":
            result = <h2>Bigger Number : {firstNumber*secondNumber}</h2>;
            break;
        case "/":
            result = <h2>Smaller number : {firstNumber/secondNumber}</h2>;
            break;  
    }
    const element = createRoot(document.getElementById('result'));
    element.render(result);
}

function Caculator(props) {
    return (
        <div>
            <div className='rows d-flex justify-content-center'>
                <form>
                    <h1 className='m-5'>Caculator</h1>
                    <div className='mb-3'>
                        <input type="number" id="firstNumber" className='form-control'/>
                        <div id="error1"></div>
                    </div>
                    <div className='mb-3'>
                        <input type="text" id="secondNumber" className='form-control'/>
                        <div id="error2"></div>
                    </div>
                    <a className="btn btn-info m-3" onClick={()=>process('+')}>+</a>
                    <a className="btn btn-info m-3" onClick={()=>process('-')}>-</a>
                    <a className="btn btn-info m-3" onClick={()=>process('*')}>*</a>
                    <a className="btn btn-info m-3" onClick={()=>process('/')}>/</a>
                </form>
            </div>
            <div id="result" className='text-center mt-3'/>
        </div>
    );
}


export default Caculator;