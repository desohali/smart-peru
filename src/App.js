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
import Contactanos from './components/Contactanos';
import AsesoriaEmpresarial from './components/AsesoriaEmpresarial';
import ConsultoriaDeNegocios from './components/ConsultoriaDeNegocios';
import Administracion from './components/Administracion';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice, { increment } from './features/counter/counterSlice';
import Certificaciones from './components/Certificaciones';
import CertificacionesUpload from './components/CertificacionesUpload';

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
/* const first = (number) => {
  return (dispatch, getState) => {
    console.log('d', getState());
    dispatch(increment(number));
  }
} */

function App() {
  /*   const value = useSelector((state) => state.counter.value);
    console.log('value', value);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
      dispatch(first(3));
      console.log('counterSlice.getInitialstate', Object.keys(counterSlice))
    }, []) */


  return (
    <Routes>
      <Route path="/administracion/:password" element={<Administracion />} ></Route>
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/cursos-online" element={<CursosOnline />} />
      <Route path="/foro-en-ia" element={<ForoEnIA />} />
      <Route path="/seminarios" element={<Seminarios />} />
      <Route path="/contactanos" element={<Contactanos />} />
      <Route path="/certificaciones" element={<Certificaciones />} />

      <Route path="/registro-de-participante/:evento" element={<RegistroDeParticiante />} />
      <Route path="/convencion" element={<Convencion />} />

      <Route path="/asesoria-empresarial" element={<AsesoriaEmpresarial />} />
      <Route path="/consultoria-de-negocios" element={<ConsultoriaDeNegocios />} />
      <Route path="/certificaciones/:clave" element={<CertificacionesUpload />} />

      <Route path="/" element={<Home />} >
      </Route>
    </Routes>
  );
}

export default App;
