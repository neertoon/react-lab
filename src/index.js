import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello World</h1>;

//To co znajduje siê tutaj to element znajduj¹cy siê w Virtual DOM
console.log(element);

// A teraz wyl¹duije na stronie
ReactDom.render(element, document.getElementById('root'));