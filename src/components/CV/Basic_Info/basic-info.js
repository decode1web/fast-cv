import React from 'react'
import { useState } from 'react'
import { MdPhoto } from 'react-icons/md'
import { Select } from 'antd'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { Checkbox } from 'antd'
import 'antd/dist/antd'

const month = [{value: 'Яварь'}, {value: 'Февраль'}, {value: 'Март'}, {value: 'Апрель'}, {value: 'Май'}, {value: 'Июнь'}, {value: 'Июль'}, {value: 'Август'}, {value: 'Сентябрь'}, {value: 'Октябрь'}, {value: 'Ноябрь'}, {value: 'Декабрь'}]
const year = [{value: 1940}, {value: 1941}, {value: 1942}, {value: 1943}, {value: 1944}, {value: 1945}, {value: 1946}, {value: 1947}, {value: 1948}, {value: 1949}, {value: 1950}, {value: 1951}, {value: 1952}, {value: 1953}, {value: 1954}, {value: 1955}, {value: 1956}, {value: 1957}, {value: 1958}, {value: 1959}, {value: 1960}, {value: 1961}, {value: 1962}, {value: 1963}, {value: 1964}, {value: 1965}, {value: 1966}, {value: 1967}, {value: 1968}, {value: 1969}, {value: 1970}, {value: 1971}, {value: 1972}, {value: 1973}, {value: 1974}, {value: 1975}, {value: 1976}, {value: 1977}, {value: 1978}, {value: 1979}, {value: 1980}, {value: 1981}, {value: 1982}, {value: 1983}, {value: 1984}, {value: 1985}, {value: 1986}, {value: 1987}, {value: 1988}, {value: 1989}, {value: 1990}, {value: 1991}, {value: 1992}, {value: 1993}, {value: 1994}, {value: 1995}, {value: 1996}, {value: 1997}, {value: 1998}, {value: 1999}, {value: 2000}, {value: 2001}, {value: 2002}, {value: 2003}, {value: 2004}, {value: 2005}, {value: 2006}, {value: 2007}, {value: 2008}, {value: 2009}, {value: 2010}]
const day = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}, {value: 11}, {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, {value: 17}, {value: 18}, {value: 19}, {value: 20}, {value: 21}, {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}, {value: 27}, {value: 28}, {value: 29}, {value: 30}, {value: 31},]
const employment = [{value: 'Полная занятность'}, {value: 'Частичная занятность'}, {value: 'Проектная работа'}, {value: 'Волонтёрство'}, {value: 'Стажировка'},]
const moving = [{value: 'невозможен'}, {value: 'возможен'}, {value: 'желателен'},]
const schedule = [{value: 'Полный день'}, {value: 'Сменный график'}, {value: 'Гибкий график'}, {value: 'Удалённая работа'}, {value: 'Вахтовый метод'}]

export const BasicInfo = () => {
    const [photo, setPhoto] = useState(null)
    const [click, setClick] = useState(true)

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleChange = (valu) => {
        console.log(`selected ${valu}`)
    }

    const photoSelectHandler = async (ev) => {
        const file = ev.target.files[0]
        const base64 = await convertBase64(file)
        setPhoto(base64)
    }

    const inputFileHandler = () => {
        const element = document.getElementById('photo_down')
        element.click()
    }

    const onChangeCheckBox = e => {
        console.log(`checked = ${e.target.checked}`)
    }
  return (
    <>
        <fieldset className='basic-info'>
            <legend>Основная информация</legend>
            <div className='job-photo'>
                <div className='input-group'>
                    <label id='job'>Желаемая должность</label>
                    <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите название должности'/>
                </div>
                    {photo == null ? <div className='down-photo' onClick={()=> inputFileHandler()}>
                        <MdPhoto />
                        <input type='file' id='photo_down' onChange={photoSelectHandler}/>
                    </div> : <div className='down-photo'> <img src={photo} className='style-down_photo' alt='avatar'/></div>}
            </div>
            <div className='fio'>
                <div className='input-group'>
                    <label id='job'>Фамилия</label>
                    <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите фамилию'/>
                </div>
                <div className='input-group'>
                    <label id='job'>Имя</label>
                    <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите имя'/>
                </div>
                <div className='input-group'>
                    <label id='job'>Отчество</label>
                    <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите отчество'/>
                </div>
            </div>
            <div className='date-of-birth'>
                <div className='input-group'>
                    <label id='job'>Дата рождения</label>
                    <Select
                        onChange={handleChange}
                        defaultValue=''
                        style={{
                            width: '200px'
                        }}
                        options={day}
                    />
                </div>
                <div className='input-group'>
                    <Select
                        onChange={handleChange}
                        className='m-top-1'
                        defaultValue=''
                        style={{
                            width: '200px'
                        }}
                        options={month}
                    />
                </div>
                <div className='input-group'>
                    <Select
                        onChange={handleChange}
                        className='m-top-1'
                        defaultValue=''
                        style={{
                            width: '200px'
                        }}
                        options={year}
                    />
                </div>
            </div>
            <div className={click ? 'display-none' : 'dop-info'}>
                <div className='dop-info_left'>
                    <div className='input-group'>
                        <label id='job'>Желаемая зарплата</label>
                        <input type='number' className='input-group_item' htmlFor='job' placeholder='Введите зарплату'/>
                    </div>
                    <div className='input-group'>
                        <label id='job'>Занятность</label>
                        <Select
                            onChange={handleChange}
                            defaultValue=''
                            style={{
                                width: '100%',
                                color: '#497174'
                            }}
                            options={employment}
                        />
                    </div>
                    <div className='input-group'>
                        <label id='job'>Переезд</label>
                        <Select
                            onChange={handleChange}
                            defaultValue=''
                            style={{
                                width: '100%',
                                color: '#497174'
                            }}
                            options={moving}
                        />
                    </div>
                    <div className='input-group'>
                        <label id='job'>Права категории</label>
                        <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите категорию прав'/>
                    </div>
                    <div className='input-group'>
                        <label id='job'>Семейное положение</label>
                        <input type='text' className='input-group_item' htmlFor='job' placeholder='Введите семейное положение'/>
                    </div>
                </div>
                <div className='dop-info_right'>
                    <div className='input-group'>
                        <label id='job'>Гражданство</label>
                        <input type='number' className='input-group_item' htmlFor='job' placeholder='Введите гражданство'/>
                    </div>
                    <div className='input-group'>
                        <label id='job'>График работы</label>
                        <Select
                            onChange={handleChange}
                            defaultValue=''
                            style={{
                                width: '100%',
                                color: '#497174'
                            }}
                            options={schedule}
                        />
                    </div>
                    <div className='check-group'>
                        <label>Готовность к командировкам</label>
                        <Checkbox onChange={onChangeCheckBox}/>
                    </div>
                    <div className='check-group'>
                        <label>Есть личный автомобиль</label>
                        <Checkbox onChange={onChangeCheckBox}/>
                    </div>
                    <div className='check-group'>
                        <label>Есть дети</label>
                        <Checkbox onChange={onChangeCheckBox}/>
                    </div>
                </div>
            </div>
            <button className='add-more-info' onClick={() => setClick(!click)}>Дополнительная информация {click ? <BiChevronUp /> : <BiChevronDown />}</button>
        </fieldset>
    </>
  )
}