import { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button } from '@nextui-org/react';
import 'react-quill/dist/quill.snow.css';

function EditorElement() {
    const [value, setValue] = useState('');

    const saveData = () => {
        if (value.length > 0) {
            localStorage.setItem('editorText', value);
            setValue('');
        }
    };

    return <div className='flex flex-col items-center flex-nowrap'>
        <div className='bg-white w-screen h-[82vh]'>
            <ReactQuill theme='snow' value={value} onChange={setValue} style={{ height: '100%' }} />
        </div>
        <Button color='warning' variant='shadow' onClick={saveData}>Save</Button>
    </div>
}

export default EditorElement;