import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody } from '@nextui-org/react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from '../firebase';

const provider = new GoogleAuthProvider();

function SignIn({ email, setEmail }: { email: string | null, setEmail: (x: string | null) => void }) {
    const navigate = useNavigate();

    const signIn = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setEmail(user!.email!);
                navigate('/');
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ...
            });
    };

    useEffect(() => {
        setEmail(null);
    }, [setEmail]);

    return <Card shadow='none' radius='none' className='bg-zinc-700 text-white'>
        <CardBody className='min-h-screen min-w-screen flex flex-col items-center gap-y-6'>
            <p className='text-3xl font-bold my-6'>Sign In</p>
            <Button color='primary' variant='shadow' onClick={signIn}>Sign In With Google</Button>
        </CardBody>
    </Card>
}

export default SignIn;