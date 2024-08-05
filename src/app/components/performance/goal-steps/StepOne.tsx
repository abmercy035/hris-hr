import { Braces, Building, Globe, UserCheck, UserCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Image from 'next/image';

export default function StepOne() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('Laura Miller');
  const [profileImage, setProfileImage] = useState('');
  const defaultProfileImage = '/path/to/default/profile/image.jpg';
  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        },
        placeholder: 'Enter your text here...'
      });
    }
    // return () => {
    // quill.disable();
    // };
  }, []);

  const handleRemove = () => {
    setName('');
    setProfileImage('');
  };

  const handleAddMyself = () => {
    setProfileImage(defaultProfileImage);
  };

  return (
    <div>
      <h2 className='font-semibold'>Owner(s)</h2>
      <div className='py-4 flex items-center'>
        <div className='relative w-8/12 flex items-center bg-gray-200 rounded p-2'>
          {profileImage && (
            <Image src={profileImage} alt='Profile' className='w-8 h-8 rounded-full mr-2' />
          )}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-gray-200 text-black w-full outline-none'
            placeholder='Search for a person'
          />
          {(profileImage || name) && (
            <button
              type='button'
              onClick={handleRemove}
              className='text-black hover:text-red-600 px-2 py-2 text-lg rounded-full absolute right-0 mr-2'
            >
              &times;
            </button>
          )}
        </div>
        <button
          type='button'
          onClick={handleAddMyself}
          className='text-black hover:bg-gray-300 px-2 py-2 ms-3 rounded font-semibold'
        >
          Add Myself
        </button>
      </div>

      <div>
        <h2 className='font-semibold'>Type</h2>
        <div className='py-2'>
          <div className='flex items-center gap-1'>
            <button className='flex items-center text-start text-xs border-2 border-gray-500 px-2 h-11 rounded' type='button'>
              <UserCheck className='w-5 h-5 me-1' /> Self Development Goals
            </button>
            <button className='flex items-center border-2 text-start text-xs border-gray-500 px-2 h-11 rounded' type='button'>
              <UserCircle className='w-5 h-5 me-1' /> Individual Goals
            </button>
            <button className='flex items-center border-2 text-start text-xs border-gray-500 px-2 h-11 rounded' type='button'>
              <Braces className='w-5 h-5 me-1' /> Department
            </button>
            <button className='flex items-center border-2 text-start text-xs border-gray-500 px-2 h-11 rounded' type='button'>
              <Globe className='w-5 h-5 me-1' /> Country
            </button>
            <button className='flex items-center border-2 text-start text-xs border-gray-500 px-2 h-11 rounded' type='button'>
              <Building className='w-5 h-5 me-1' /> Company Goals
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className='font-semibold pt-2'>Title</h2>
        <div className='py-2'>
          <input type='text' className='bg-gray-200 rounded text-black w-full p-2' />
        </div>
      </div>

      <div className='py-4'>
        <h2 className='font-semibold pt-2'>Description (Optional)</h2>
        <div ref={editorRef} style={{ minHeight: '150px' }}
          className='bg-gray-200 rounded text-black w-full p-2'>
          <div />
        </div>
      </div>
    </div>
  );
}
