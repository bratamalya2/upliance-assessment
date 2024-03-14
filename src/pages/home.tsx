import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

import Navbar from '../components/navbar';
import { IUserData } from '../types/types';

function Home({ emailAddress, isLogoutClicked, setIsLogoutClicked }: { emailAddress: string | null, isLogoutClicked: boolean, setIsLogoutClicked: (x: boolean) => void }) {
    const navigate = useNavigate();
    const [count, setCount] = useState<number | null>(null);
    const [editorText, setEditorText] = useState('');
    const [obj, setObj] = useState<IUserData | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [phoneNo, setPhoneNo] = useState<string | null>(null);
    const [id, setId] = useState<string>('');

    useEffect(() => {
        const x = localStorage.getItem('user data');
        if (x) {
            setObj(JSON.parse(x));
        }
        const y = localStorage.getItem('count');
        if (y) {
            setCount(parseInt(y));
        }
        const z = localStorage.getItem('editorText');
        if (z) {
            setEditorText(z);
        }
    }, []);

    useEffect(() => {
        if (obj) {
            setName(obj.name);
            setAddress(obj.address);
            setEmail(obj.email);
            setPhoneNo(obj.phoneNo);
            setId(obj.id);
        }
    }, [obj]);

    useEffect(() => {
        if (isLogoutClicked || !emailAddress) {
            navigate('/signin');
        }
    }, [isLogoutClicked, emailAddress, navigate]);

    return <>
        <Navbar setIsLogoutClicked={setIsLogoutClicked} />
        <Card shadow='none' radius='none' className='bg-zinc-700 text-white'>
            <CardHeader className='text-center justify-center font-bold text-2xl'>
                Data
            </CardHeader>
            <CardBody className='min-h-screen min-w-screen'>
                {count && <p className='w-fit mx-auto text-center my-12 text-3xl'>Count: {count}</p>}
                {obj && (
                    <Card className='w-[50%] mx-auto text-black my-12'>
                        <CardHeader className='text-center justify-center font-bold text-2xl'>
                            User Data
                        </CardHeader>
                        <CardBody>
                            {id && <p>Id: {id}</p>}
                            {name && <p>Name: {name}</p>}
                            {email && <p>Email: {email}</p>}
                            {address && <p>Address: {address}</p>}
                            {phoneNo && <p>Phone No: {phoneNo}</p>}
                        </CardBody>
                    </Card>
                )}
                {editorText.length > 0 && (
                    <Card className='w-[50%] mx-auto text-black my-12'>
                        <CardHeader className='text-center justify-center font-bold text-2xl'>
                            Editor Text
                        </CardHeader>
                        <CardBody>
                            <p dangerouslySetInnerHTML={{ __html: editorText }}></p>
                        </CardBody>
                    </Card>
                )}
            </CardBody>
        </Card>
    </>
}

export default Home;