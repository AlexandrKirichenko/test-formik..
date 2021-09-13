import React, {forwardRef, useEffect, useState} from 'react'
import "./Input.module.scss";
import style from "./Input.module.scss";
import classnames from 'classnames';


//
//
// const Input: React.FC<InputProps> = ({type="email",errorcolor,size="large",inputError,inputWasChanged="false", value, id, name, setInputValue, errorMessage,autoComplete="off"}) => {
//
//     const [internalValue, setInternalValue] = useState<string>(value);
//
//     const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setInternalValue(value);
//     }
//
//     useEffect(()=>{
//         if(setInputValue) {
//             setInputValue(internalValue);
//         }
//
//     }, [internalValue]);
//     return (
//         <div className={style.wrap}>
//             <label className={style.label} htmlFor={name}>
//                 {name}
//             </label>
//             <input
//                 type={type}
//                 id={id}
//                 // className={classnames(style.input,{inputError} ? style[errorcolor]: null )}
//                 className={classnames(style.input, style[size])}
//                 value={value}
//                 name={name}
//                 placeholder={`Enter your ${name.toLowerCase()}`}
//                 onChange={handleChangeValue}
//                 autoComplete={autoComplete}
//                 // onBlur={e => handleBlur}
//             />
//             {(inputWasChanged && inputError) && <div style={{color: 'orangered'}} className={style.errorMessage}>{errorMessage}</div>}
//         </div>
//     )
// }
//
// export default Input;
//
// import React, {useEffect, forwardRef} from "react";
// import "./Input.module.scss";
// import style from "./Input.module.scss";
// import classnames from 'classnames';

// const {register, handleSubmit, errors} = useForm({
//     mode: "onBlur"
// })

// interface InputProps {
//     type: "email" | "text" | "password";
//     value: string;
//     id: string;
//     name: string;
//     size?: "small" | "large";
//     errorMessage?: string;
//     setInputValue?: (value: string) => void;
//     autoComplete: "on" | "off";
//     errorcolor?: any;
//     inputError: string;
//     inputWasChanged?: boolean;
// }

export const Input = forwardRef((props,ref) => {
    // const [internalValue, setInternalValue] = useState<string>(value);
    //
    // const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setInternalValue(value);
    // }
    //
    // useEffect(()=>{
    //     if(setInputValue) {
    //         setInputValue(internalValue);
    //     }
    //
    // }, [internalValue]);
  
    return (
        <div className={style.wrap}>
           
            <input
              inputRef={ref}
              {...props}
            />
        </div>
    )
}