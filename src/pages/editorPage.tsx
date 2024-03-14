import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/navbar';
import EditorElement from '../components/editor';

function EditorPage({ email, isLogoutClicked, setIsLogoutClicked }: { email: string | null, isLogoutClicked: boolean, setIsLogoutClicked: (x: boolean) => void }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogoutClicked || !email) {
            navigate('/signin');
        }
    }, [isLogoutClicked, email, navigate]);

    return <>
        <Navbar setIsLogoutClicked={setIsLogoutClicked} />
        <EditorElement />
    </>
}

export default EditorPage;