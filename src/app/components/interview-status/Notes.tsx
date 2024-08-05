import { CirclePlus } from 'lucide-react'
import NoteStyles from '@/styles/notes.module.css'
import Image from 'next/image'
import React from 'react'

export default function Notes() {
  return (
    <div>
      <div className={NoteStyles.container}>
        <p className={NoteStyles.text}>Notes</p>
        
        <button className={NoteStyles.button}><CirclePlus className={NoteStyles.icon} />Add Notes</button>
      </div>

      <div className={NoteStyles.border}>
        {/* COMMNENT 1 */}
        <div className={NoteStyles.notes}>
            <div className='flex items-center'> 
              <Image className={NoteStyles.image} src='/images/image.JPG' alt='profile image' height={50} width={50} />
            <p className={NoteStyles.userName}>Olajide oluwatoyin</p>     
            </div>
              
            <p className={NoteStyles.date}>10 July, 2024 - 11:30AM</p>

           
        </div>
        {/* COMMNENT 2 */}
         <div className='ms-16'>
                <p className={NoteStyles.comment}>Pls do an interview stage Immediately. This design division need more employee now</p>
                <span className={NoteStyles.replies}>2 replies</span>
            </div>

            <div className={NoteStyles.notes}>
            <div className='flex items-center'> 
              <Image className={NoteStyles.image} src='/images/image.JPG' alt='profile image' height={50} width={50} />
            <p className={NoteStyles.userName}>Olajide oluwatoyin</p>     
            </div>
              
            <p className={NoteStyles.date}>10 July, 2024 - 11:30AM</p>

           
        </div>
        {/* COMMNENT 3 */}
         <div className='ms-16'>
                <p className={NoteStyles.comment}>Pls do an interview stage Immediately. This design division need more employee now</p>
                <span className={NoteStyles.replies}>2 replies</span>
            </div>

            <div className={NoteStyles.notes}>
            <div className='flex items-center'> 
              <Image className={NoteStyles.image} src='/images/image.JPG' alt='profile image' height={50} width={50} />
            <p className={NoteStyles.userName}>Olajide oluwatoyin</p>     
            </div>
              
            <p className={NoteStyles.date}>10 July, 2024 - 11:30AM</p>

           
        </div>
        {/* COMMNENT 4 */}
         <div className='ms-16'>
                <p className={NoteStyles.comment}>Pls do an interview stage Immediately. This design division need more employee now</p>
                <span className={NoteStyles.replies}>2 replies</span>
            </div>

            <div className={NoteStyles.notes}>
            <div className='flex items-center'> 
              <Image className={NoteStyles.image} src='/images/image.JPG' alt='profile image' height={50} width={50} />
            <p className={NoteStyles.userName}>Olajide oluwatoyin</p>     
            </div>
              
            <p className={NoteStyles.date}>10 July, 2024 - 11:30AM</p>

           
        </div>
         <div className='ms-16'>
                <p className={NoteStyles.comment}>Pls do an interview stage Immediately. This design division need more employee now</p>
                <span className={NoteStyles.replies}>2 replies</span>
            </div>
      </div>

      
    </div>
  )
}
