import React from 'react'
import InterviewStatus from '@/styles/status.module.css'
import Notes from './Notes'

export default function PastInterviews() {
  return (
    <div>
      <div className={InterviewStatus.interview}>
        <div>
            <p className={InterviewStatus.interviewText}>Interview Date and Time</p>
            <div>
               <span className={InterviewStatus.span}>Mar 30, 2024</span>
            </div>
            <div>
               <span className={InterviewStatus.span}>3:40PM - 4:00PM</span>
            </div>
           
       
        </div>
        <div>
            <p className={InterviewStatus.interviewText}>Interview Status</p>
            <button className={InterviewStatus.PastIntbtn} type='button'>Cancelled</button>
        </div>
        
      </div>

      <div className={InterviewStatus.interview}>
        <div>
            <p className={InterviewStatus.interviewText}>Interview Location:</p>
        <span className={InterviewStatus.span}>House 11, Road 17,Block k,Banani,Dhaka 1213</span>
        </div>
        <div>
            <p>Interviewers:</p>
            <div>
                <span className={InterviewStatus.span}>Olajide Oluwatoyin</span>
            </div>
            <div>
              <span className={InterviewStatus.span}>Segun Aluko</span>
            </div>
            <div>
              <span className={InterviewStatus.span}>Babajide Gbenga</span> 
            </div>
           
        </div>
        
      </div>

      <div className={InterviewStatus.interview}>
        <div>
            <p className={InterviewStatus.interviewText}>Interview Type:</p>
        <span className={InterviewStatus.span}>In Person</span>
        </div>

        <div>
        <p className={InterviewStatus.interviewText}>Outcome:</p>
        <button className={InterviewStatus.PastIntbtn} type='button'>Failed</button>
        </div>
        
      </div>

    {/* Notes  */}
      <div>
        <Notes />
      </div>
    </div>
  )
}
