import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useBackend } from '../Custom Hooks/useBackend'

const loginSchema = z.object({
    name: z.string().min(5, "Must be atleast 5 characters"),
    email: z.string().email("Must be an email"),
    password: z.string().min(3, "Must be atleast 5 characters"),
    confirmsPassword: z.string().min(3, "Must be atleast 5 characters"),
}).refine(data => data.password === data.confirmsPassword, {
    message:"Passwords must match",
    path: ["confirmsPassword"],
});

export const Register = () =>{

    const navs = useNavigate();

    const { UseRegister } = useBackend();

    type loginSchemaType = z.infer<typeof loginSchema>

    const onSubmit = async(data: loginSchemaType) =>{
        try {
            const res = await UseRegister({name:data.name, email:data.email, password: data.password});  
        } catch (error) {
            alert("Something went wrong");
            return;
        }
        reset();
        navs("/login");
    }

    const {register, handleSubmit, formState : {isValid, isSubmitted, isSubmitting, errors}, reset} = useForm<loginSchemaType>({resolver:zodResolver(loginSchema)});

    return (
        <div className="login">
            <div className="sign-in-container">
                <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='login-greeting'>
                        <h1>Hello There</h1>
                        <p>Register to make your account</p>
                    </div>
                    <div className="login-form-field">
                        <input className='login-input' type="text" placeholder="Name" required {...register("name")}/>
                        {errors.name && (<p>{`${errors.name.message}`}</p>)}
                    </div>
                    <div className="login-form-field">
                        <input className='login-input' type="email" placeholder="Email" required {...register("email")}/>
                        {errors.email && (<p>{`${errors.email.message}`}</p>)}
                    </div>
                    <div className="login-form-field">
                        <input className='login-input' type="password" placeholder="Password" required  {...register("password")}/>
                        {errors.password && (<p>{`${errors.password.message}`}</p>)}
                    </div>
                    <div className="login-form-field">
                        <input className='login-input' type="password" placeholder="Confirm Password" required  {...register("confirmsPassword")}/>
                        {errors.confirmsPassword && (<p>{`${errors.confirmsPassword.message}`}</p>)}
                    </div>

                    <div className='button-borders'>
                        <button className="sign-in-button" type="submit" disabled={isSubmitting}><p className='text'>Sign Up</p></button>
                    </div>
                </form>
            </div>
        </div>
    )
}