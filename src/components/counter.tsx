import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';

function Counter() {
    const [count, setCount] = useState<number | null>(null);

    const generateRandomColor = () => {
        let letters = "0123456789ABCDEF";

        // HTML color code starts with # 
        let color = '#';

        // Generating 6 times as HTML color code  
        // consist of 6 letter or digits 
        for (let i = 0; i < 6; i++)
            color += letters[(Math.floor(Math.random() * 16))];

        return color;
    };

    useEffect(() => {
        const x = localStorage.getItem('count');
        if (x) {
            setCount(parseInt(x));
        }
        else
            setCount(0);
    }, []);

    useEffect(() => {
        if (count === null)
            return;
        let styleSheet = document.createElement("style");
        let styles = '.random-gradient{ background-image: linear-gradient(to right, blue';
        if (count > 0) {
            const n = count + 1;
            for (let i = 0; i < n; i++) {
                let p = ((i + 1) / n) * 100;
                let c = generateRandomColor();
                styles += `, ${c} ${p}%`;
            }
            styles += '); }';
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);
        }
        localStorage.setItem('count', count.toString());
    }, [count]);

    if (count === null)
        return null;

    return count <= 0 ? (
        <Card radius='none' className='w-screen h-screen bg-zinc-400 flex items-center'>
            <CardHeader className='text-center justify-center font-bold text-2xl h-[30%]'>
                {count}
            </CardHeader>
            <CardBody>
                <div className='flex justify-around items-center flex-nowrap'>
                    <Button color='danger' size='sm' variant='ghost' onClick={() => setCount(curr => curr! - 1)}>-</Button>
                    <Button color='secondary' size='sm' variant='ghost' onClick={() => setCount(0)}>Reset</Button>
                    <Button color='primary' size='sm' variant='ghost' onClick={() => setCount(curr => curr! + 1)}>+</Button>
                </div>
            </CardBody>
        </Card>
    ) : (
        <Card radius='none' className='text-white w-screen h-screen random-gradient'>
            <CardHeader className='text-center justify-center font-bold text-2xl h-[30%]'>
                {count}
            </CardHeader>
            <CardBody>
                <div className='flex justify-around items-center flex-nowrap'>
                    <Button color='danger' size='sm' variant='ghost' onClick={() => setCount(curr => curr! - 1)}>-</Button>
                    <Button color='secondary' size='sm' variant='ghost' onClick={() => setCount(0)}>Reset</Button>
                    <Button color='primary' size='sm' variant='ghost' onClick={() => setCount(curr => curr! + 1)}>+</Button>
                </div>
            </CardBody>
        </Card>
    )

}

export default Counter;