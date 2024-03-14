import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Counter from '../components/counter';
import Navbar from '../components/navbar';

function CounterPage({ email, isLogoutClicked, setIsLogoutClicked }: { email: string | null, isLogoutClicked: boolean, setIsLogoutClicked: (x: boolean) => void }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogoutClicked || !email) {
            navigate('/signin');
        }
    }, [isLogoutClicked, email, navigate]);

    return <>
        <Navbar setIsLogoutClicked={setIsLogoutClicked} />
        <Counter />
    </>
}

export default CounterPage;