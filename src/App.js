import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
/* import contentRoutes from "./routes/contentRoutes";
import Login from './components/login/Login';
import { LinearProgress } from '@mui/material'; */
import {
  LoginSocialFacebook,
  LoginSocialGoogle
} from 'reactjs-social-login'

import * as Tesseract from "tesseract.js";

// CUSTOMIZE ANY UI BUTTON
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons'
import { Counter } from './features/counter/Counter';

/* import { ThemeProvider, createTheme } from '@mui/material/styles'; */
function progressUpdate(packet) {
  var log = document.getElementById('log');

  if (log.firstChild && log.firstChild.status === packet.status) {
    if ('progress' in packet) {
      var progress = log.firstChild.querySelector('progress')
      progress.value = packet.progress
    }
  } else {
    var line = document.createElement('div');
    line.status = packet.status;
    var status = document.createElement('div')
    status.className = 'status'
    status.appendChild(document.createTextNode(packet.status))
    line.appendChild(status)

    if ('progress' in packet) {
      var progress = document.createElement('progress')
      progress.value = packet.progress
      progress.max = 1
      line.appendChild(progress)
    }


    if (packet.status == 'done') {
      log.innerHTML = ''
      var pre = document.createElement('pre')
      pre.appendChild(document.createTextNode(packet.data.text.replace(/\n\s*\n/g, '\n')))
      line.innerHTML = ''
      line.appendChild(pre)
      /* $(".fas").removeClass('fa-spinner fa-spin')
      $(".fas").addClass('fa-check') */
    }

    log.insertBefore(line, log.firstChild)
  }
}

const TestSocial = () => {

  const [provider, setProvider] = React.useState('')
  const [profile, setProfile] = React.useState()

  const onLoginStart = React.useCallback((e) => {
    alert('login start')
    console.log('{ provider, data }', { provider, profile })
  }, [])

  /* const onLogoutSuccess = React.useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, []) */

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
}

const Image = () => {



  React.useEffect(() => {
    
  }, []);

  const first = () => { 
    

    Tesseract.recognize(
      document.getElementById("file-1").files[0],
      'eng',
      { logger: m => console.log(m) }
    ).then((response) => {
      console.log(response);
    })
   }

  return (
    <>
      <select id="langsel" style={{ position: "absolute", zIndex: 9999999 }}>
        <option value='eng' selected> English </option>
      </select>
      <input type="file" id="file-1" class="inputfile" />
      <img id="selected-image" src="" />
      <div id="log">
        <span id="startPre" onClick={first}>
          <a id="startLink" href="#">Click here to recognize text</a> or choose your own image
        </span>
      </div>
    </>
  )
}

function App() {

  return <Image />;
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<TestSocial />} />
      <Route path="/redux" element={<Counter />} />
      <Route path="/image" element={<Image />} />
      <Route path="/" element={<Layout />} >
        {/* {contentRoutes.map((c) => {
          return <Route
            key={c.path}
            path={c.path}
            element={<Suspense fallback={<LinearProgress color="primary" />}>{c.element}</Suspense>} >
            {c.children && (
              c.children.map((t) => {
                return <Route
                  key={t.path}
                  path={t.path}
                  element={<Suspense fallback={<LinearProgress color="primary" />}>
                    <ErrorBoundary>
                      {t.element}
                    </ErrorBoundary>
                  </Suspense>}
                />
              })
            )}
          </Route>

        })} */}
      </Route>
    </Routes>
  );
}

export default App;
