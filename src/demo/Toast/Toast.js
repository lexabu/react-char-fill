// Toast.tsx
import React from 'react';
import './Toast.css';
const Toast = ({ message, show }) => {
    return React.createElement("div", { className: `toast ${show ? 'show' : 'hide'}` }, message);
};
export default Toast;
