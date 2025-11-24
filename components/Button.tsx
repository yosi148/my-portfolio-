import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#0f111a]";
  
  const variants = {
    primary: "bg-yellow-400 text-slate-900 hover:bg-yellow-300",
    outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10",
    text: "text-slate-100 hover:text-yellow-400 px-4",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;