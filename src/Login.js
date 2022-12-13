import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        })
        .catch((error)=> alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Por favor insira seu nome!")
        } 
        console.log(profilePic)

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        )
                    })
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='login'>
            <img src='https://i.pinimg.com/564x/21/38/af/2138af395d8fa547ca18a96ebbdf82b7.jpg' alt='Logo da ProgramaIara' />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Digite seu nome completo' type="text" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Insira a url da sua foto aqui(Opcional)' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='e-mail@servidor.com' type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Digite sua senha' type="password" />

                <button type='submit' onClick={loginToApp}>Entrar</button>
            </form>

            <p>Ainda não tem cadastro?
                <span className='login__register' onClick={register}> Registre-se!</span>
            </p>
        </div>
    )
}

export default Login