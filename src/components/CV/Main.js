import React from 'react'
import { RiFilePaperFill } from 'react-icons/ri'
import { BasicInfo } from './Basic_Info/basic-info'
import { Contacts } from './contacts/contacts'

export const MainCv = () => {
  return (
    <>
      <div className='nav-cv'>
        <div className='container'>
          <div className='nav-cv_icon'><RiFilePaperFill /></div>
        </div>
      </div>
      <div className='main-cv'>
        <section className='cv-input'>
          <BasicInfo />
          <Contacts />
        </section>
        <section className='cv-output'></section>
      </div>
    </>
  )
}