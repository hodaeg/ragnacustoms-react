import react from 'react'
import { useForm } from 'react-hook-form';
import Footer from './Components/Footer'
import rclogo from './rclogo.png'

export default function Login () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <div className="angry-grid">
                <div id="item-0">&nbsp;</div>
                <div id="item-1">
                    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder="E-Mail" {...register("E-Mail", { required: true })} />
                        <input type="password" placeholder="Password" {...register("Password", { required: true, min: 8 })} />
                        <input className="button" type="submit" />
                    </form>
                </div>
                <div id="item-2">
                    <h1>Sign In</h1>
                    <img src={rclogo} />
                </div>
            </div>
        </div>
    )
}