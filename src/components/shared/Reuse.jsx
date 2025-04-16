import React from 'react'


export const Button = ({ children, className, ...props }) => {
    return <button className={`text-[14px] p-3 font-[500] ${className}`}>{children}</button>
}
