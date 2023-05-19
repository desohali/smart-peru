import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Counter } from './features/counter/Counter';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import CursosOnline from './components/CursosOnline';
import Seminarios from './components/Seminarios';
import ForoEnIA from './components/ForoEnIA';
import Convencion from './components/Convencion';
import RegistroDeParticiante from './components/RegistroDeParticiante';

/* import {
  LoginSocialFacebook,
  LoginSocialGoogle
} from 'reactjs-social-login'
// CUSTOMIZE ANY UI BUTTON
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons' */


/* const TestSocial = () => {

  const [provider, setProvider] = React.useState('')
  const [profile, setProfile] = React.useState()

  const onLoginStart = React.useCallback((e) => {
    alert('login start')
    console.log('{ provider, data }', { provider, profile })
  }, [])

  return (
    <div className={`App ${provider && profile ? 'hide' : ''}`}>
      <h1 className='title'>ReactJS Social Login</h1>
      <LoginSocialFacebook
        appId="1234448480683686"
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          console.log('{ provider, data }', { provider, data })
          setProvider(provider)
          setProfile(data)
        }}
        onReject={(err) => {
          console.log(err)
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
      <LoginSocialGoogle
        client_id="396063285189-tl39s9q7qe9t2bk6mqqoqplt77ifb9cp.apps.googleusercontent.com"
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          console.log('{ provider, data }', { provider, data })
          setProvider(provider)
          setProfile(data)
        }}
        onReject={(err) => {
          console.log(err)
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  )
} */

function App() {
  return (
    <Routes>
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/cursos-online" element={<CursosOnline />} />
      <Route path="/seminarios" element={<Seminarios />} />
      <Route path="/foro-en-ia" element={<ForoEnIA />} />
      <Route path="/registro-de-participante" element={<RegistroDeParticiante />} />
      <Route path="/convencion" element={<Convencion />} />

      <Route path="/" element={<Home />} >
      </Route>
    </Routes>
  );
}

export default App;
