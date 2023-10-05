"use client"; // This line doesn't seem to have any meaning. You might want to remove it.

import React from 'react'; // Import React if you're using JSX.

// Import the CustomButtonProps type from "@/types" if it's correctly defined in your project.
import { CustomButtonProps } from "@/types";
import Image from 'next/image';

// Define your CustomButton component.
const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image
                    src={rightIcon}
                    alt="arrow_left"
                    fill
                    className="object-contain"
                />
            </div>
        )}
    </button>
);

export default Button;
