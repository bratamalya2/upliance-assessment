import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardHeader, CardBody, Button, Input } from '@nextui-org/react';

function UserDataForm() {
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNo, setPhoneNo] = useState<string>('');
    let id = uuidv4();

    const submitForm = () => {
        if (name && address && email && phoneNo) {
            window.localStorage.setItem('user data', JSON.stringify({
                name,
                address,
                email,
                phoneNo,
                id
            }));
            setName('');
            setAddress('');
            setEmail('');
            setPhoneNo('');
            id = uuidv4();
        }
        else
            enqueueSnackbar('Incomplete Form!');
    };

    useEffect(() => {
        return () => {
            window.addEventListener('beforeunload', function (e) {
                var confirmationMessage = 'Browser closed!';

                if ((name.length || address.length || email.length || phoneNo.length)) {
                    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                    return confirmationMessage;                            //Webkit, Safari, Chrome
                }
            });
        };
    }, [name, address, email, phoneNo]);

    return <Card radius='none' className='w-screen h-screen bg-zinc-400 flex items-center'>
        <CardHeader className='text-center justify-center font-bold text-2xl h-[30%]'>
        </CardHeader>
        <CardBody>
            <div className='flex flex-col items-center flex-nowrap'>
                <Input type='text' label='Name' onChange={e => setName(e.target.value)} value={name} className='max-w-sm mb-4' />
                <Input type='text' label='Address' onChange={e => setAddress(e.target.value)} value={address} className='max-w-sm mb-4' />
                <Input type='email' label='Email' onChange={e => setEmail(e.target.value)} value={email} className='max-w-sm mb-4' />
                <Input type='text' label='Phone No' onChange={e => setPhoneNo(e.target.value)} value={phoneNo} className='max-w-sm mb-4' />
                <Input isReadOnly
                    type='text'
                    label='Id'
                    value={id}
                    className='max-w-sm'
                />
                <Button color='primary' variant='shadow' className='my-12' onClick={submitForm}>
                    Submit
                </Button>
            </div>
        </CardBody>
    </Card>
}

export default UserDataForm;