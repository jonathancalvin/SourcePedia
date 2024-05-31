import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useBackend } from '../Custom Hooks/useBackend'
import { useLocalStorage } from '../Custom Hooks/useLocalStorage'


const loginSchema = z.object({
    // name: z.string().min(5, "Must be atleast 5 characters"),
    email: z.string().email("Must be an email"),
    password: z.string().min(3, "Must be atleast 3 characters"),
});


export const Login = () =>{

    const { UseLogin } = useBackend();
    const { setItem } = useLocalStorage("UserCredential");

    const navs = useNavigate();

    type loginSchemaType = z.infer<typeof loginSchema>

    const onSubmit = async(data: loginSchemaType) =>{
        try {
            const res = await UseLogin({email:data.email, password: data.password});  
            setItem({
                userID: res.userID,
                userName: res.userName
            })
        } catch (error) {
            alert("Wrong Username or Password");
            return;
        }
        reset();
        navs("/");
    }
    const {register, handleSubmit, formState : {isValid, isSubmitted, isSubmitting, errors}, reset} = useForm<loginSchemaType>({resolver:zodResolver(loginSchema)});

    return (
        <div className="login">
            <div className="sign-in-container">
                <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='login-greeting'>
                        <h1>Welcome Back</h1>
                        <p>Log in to access your account</p>
                    </div>
                    {/* <div className="login-form-field">
                        <input className='login-input' type="text" placeholder="Name" required {...register("name", {required:"Name must be filled"})}/>
                        {errors.name && (<p>{`${errors.name.message}`}</p>)}
                    </div> */}
                    <div className="login-form-field">
                        <input className='login-input' type="email" placeholder="Email" required {...register("email", {required:"Email must be filled"})}/>
                        {errors.email && (<p>{`${errors.email.message}`}</p>)}
                    </div>
                    <div className="login-form-field">
                        <input className='login-input' type="password" placeholder="Password" required  {...register("password", {required:"Password must be filled"})}/>
                        {errors.password && (<p>{`${errors.password.message}`}</p>)}
                    </div>
                    <div className='button-borders'>
                        <button className="sign-in-button" type="submit" disabled={isSubmitting}><p className='text'>Log in</p></button>
                    </div>
                </form>
            </div>
        </div>
    )
}