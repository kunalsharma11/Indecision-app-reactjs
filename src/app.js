
//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/Indecisionapp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//stateless functional component



const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax{
//     constructor(){
//         this.name = 'Kunal';
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);


// class NewSyntax{
//     name = 'rohan';

// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax);