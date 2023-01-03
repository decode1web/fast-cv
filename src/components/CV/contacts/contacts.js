import React from 'react'
import { FaPlus } from 'react-icons/fa'

const con = [{type: 'instagram', link: '@firdavs.g0'}, {type: 'facebook', link: 'Firdavs Gadoev'}]

export const Contacts = () => {
  return (
    <fieldset>
        <legend>Контакты</legend>
        <div className='contacts'>
            <div className='input-group'>
                <label id='job'>Электронная почта</label>
                <input type='text' className='input-group_item' htmlFor='job' placeholder='address@site.ru'/>
            </div>
            <div className='input-group'>
                <label id='job'>Телефон</label>
                <input type='number' className='input-group_item' htmlFor='job' placeholder='+992 001 01 41 43'/>
            </div>
        </div>
        <div className='social-contacts'>
            {con.map((item, idx) => (
                <div className='social-contacts_item' key={idx}>
                    <div className='social-contacts_item-content'>
                        <div className='social-content_left'>{item.type} {item.link}</div>
                        <div className='social-content_right'></div>
                    </div>
                </div>
            ))}
        </div>
        <button className='add-contacts'><FaPlus />Добавить социальную сеть</button>
    </fieldset>
  )
}