import { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { SnackbarProvider } from 'notistack';

import './App.css';

import Home from './pages/home';
import CounterPage from './pages/counterPage';
import EditorPage from './pages/editorPage';
import UserFormPage from './pages/userFormPage';
import SignIn from './pages/signIn';

function App() {
  const [email, setEmail] = useState<string | null>(null);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/signin' element={<SignIn email={email} setEmail={setEmail} />} />
        <Route path='/' element={<Home emailAddress={email} isLogoutClicked={isLogoutClicked} setIsLogoutClicked={setIsLogoutClicked} />} />
        <Route path='/counter' element={<CounterPage email={email} isLogoutClicked={isLogoutClicked} setIsLogoutClicked={setIsLogoutClicked} />} />
        <Route path='/editor' element={<EditorPage email={email} isLogoutClicked={isLogoutClicked} setIsLogoutClicked={setIsLogoutClicked} />} />
        <Route path='/userForm' element={<UserFormPage email={email} isLogoutClicked={isLogoutClicked} setIsLogoutClicked={setIsLogoutClicked} />} />
      </>
    )
  );

  useEffect(() => {
    if (isLogoutClicked) {
      setIsLogoutClicked(false);
    }
  }, [isLogoutClicked]);

  return (
    <NextUIProvider>
      <SnackbarProvider variant='error'>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </NextUIProvider>
  );
}

export default App;
