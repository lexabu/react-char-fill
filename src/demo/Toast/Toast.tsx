// Toast.tsx
import React from 'react';
import './Toast.css';

interface ToastProps {
  message: string;
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, show }) => {
  return <div className={`toast ${show ? 'show' : 'hide'}`}>{message}</div>;
};

export default Toast;
