import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from '../../../JSX/do_homework/src/reportWebVitals';

// Sử dụng JSX
let name = 'Khuong';
const style = {textAlign:'center'};
// khởi tạo component Hello trả về phần tử JSX <h1>
function Hello(props) {
  return <h1 style={props.style}>Hello, {props.name}</h1>
}
// tạo root bằng cách sử dụng ReactDOM.createRoot và truyền vào phần tử DOM có id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
// truyền component vào phần tử DOM đã chọn
root.render(<Hello name={name} style={style} />);

// Sử dụng React.createElement
name = 'Hello, Khuong';
root.render(
  React.createElement("h1",{ style:style },name)
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
