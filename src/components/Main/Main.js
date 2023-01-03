import React from 'react'
import download from '../../assets/download.png'
import resume from '../../assets/media.png'
import work from '../../assets/12345.png'
import user from '../../assets/user.jpg'
import { FaStar, FaStarHalfAlt, FaFacebook } from 'react-icons/fa'
import abubakr from '../../assets/abubakr.jpg'
import { AiFillInstagram } from 'react-icons/ai'
import { IoMail, IoLanguage } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
    const history = useNavigate()

    const getLocation = () => {
        history('/cv-page')
    }
  return (
    <div className='main'>
        <section className='home' id='home'>
            <div className='container'>
                <div className='home-box1'>
                    <div className='home-box1_title'>Составляйте резюме быстро и по готовым шаблонам</div>
                    <div className='home-box1_subtitle'>
                        <img src={download} className='home-box1_subtitle-icon' alt='icon' />
                        <div className='home-box1_subtitle-text'>Скачивайте резюме</div>
                    </div>
                    <div className='home-box1_description'>Заполните пустые поля, выберите шаблон и скачайте готовое резюме — и все это за несколько минут.</div>
                    <a href='/cv-page' className='home-box1_createcv'>Составить резюме</a>
                </div>
                <div className='home-box2'>
                    <img src={resume} className='home-box2_img' alt='resume' />
                </div>
            </div>
        </section>
        <section className='how-work' id='how-work'>
            <div className='container'>
                <div className='how-work_title'>Как это работает</div>
                <div className='how-work_subtitle'>
                    <div className='how-work_subtitle-card'>
                        <div className='how-work_subtitle-title'>
                            <div className='how-work_subtitle-title_num'>1</div>
                            <div className='how-work_subtitle-title_text'>Заполните пустые поля</div>
                        </div>
                        <div className='how-work_subtitle-text'>Сначала внесите необходимую для вашего резюме информацию.</div>
                    </div>
                    <div className='how-work_subtitle-card'>
                        <div className='how-work_subtitle-title'>
                            <div className='how-work_subtitle-title_num'>2</div>
                            <div className='how-work_subtitle-title_text'>Скачайте готовое резюме</div>
                        </div>
                        <div className='how-work_subtitle-text'>Просто скачайте готовое резюме и редактируйте его по мере необходимости.</div>
                    </div>
                </div>
                <img src={work} className='how-work_img' alt='work'/>
            </div>
        </section>
        <section className='reviews' id='reviews'>
            <div className='container'>
                <div className='reviews-title'>Отзывы</div>
                <div className='reviews-marks'>4,4 <span className='reviews-marks_num'>/ 5</span> <span className='reviews-marks_icon'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span></div>
                <div className='reviews-cards'>
                    <div className='reviews-card'>
                        <img src='https://scontent.fdyu4-1.fna.fbcdn.net/v/t39.30808-6/307529521_886896648946343_3094904906529491206_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6ckxDCgKQhgAX8tyNgR&_nc_ht=scontent.fdyu4-1.fna&oh=00_AfCFf7PCO4QGmDrcWzO231yGfx2UQS7GDVNumgtK2Rm0lA&oe=63B16291' className='reviews-img' alt='avatar'/>
                        <div className='reviews-name'>Далер</div>
                        <div className='reviews-job'>Frontend developer</div>
                        <div className='reviews-comment'>Незаменимый ресурс для составления профессиональных резюме и сопроводительных писем, которые способны произвести впечатление на работодателей.</div>
                    </div>
                    <div className='reviews-card'>
                        <img src={abubakr} className='reviews-img' alt='avatar'/>
                        <div className='reviews-name'>Абубакр</div>
                        <div className='reviews-job'>Frontend developer</div>
                        <div className='reviews-comment'>Отличный сайт с полезными инструментами для тех, кто ищет новую работу. Рекомендую его друзьям и родным!</div>
                    </div>
                    <div className='reviews-card'>
                        <img src={user} className='reviews-img' alt='avatar'/>
                        <div className='reviews-name'>Фирдавс</div>
                        <div className='reviews-job'>Frontend developer</div>
                        <div className='reviews-comment'>Простая в использовании платформа со всем необходимым для создания первоклассных резюме, которые будут выделяться на общем фоне.</div>
                    </div>
                </div>
            </div>
        </section>
        <section className='creating' id='creating'>
            <div className='container'>
                <div className='creating-tittle'>Создайте резюме, которое произведет впечатление на работодателей</div>
                <div className='creating-subtitle'>Пошаговое руководство по созданию профессионального резюме за несколько минут.</div>
                <a href='/cv-page' className='creating-btn'>Создать резюме</a>
            </div>
        </section>
        <footer className='footer'>
            <div className='container'>
                <div className='footer-cards'>
                    <div className='footer-card'>
                        <div className='footer-card_title'>Меню</div>
                        <a href='#home' className='footer-card_link footer-link'>Главная</a>
                        <a href='#how-work' className='footer-card_link footer-link'>Как это работает</a>
                        <a href='#reviews' className='footer-card_link footer-link'>Отзывы</a>
                    </div>
                    <div className='footer-card'>
                        <div className='footer-card_title'>Контакты</div>
                        <a href='#home' className='footer-card_link footer-link'><AiFillInstagram /> Instagram</a>
                        <a href='#how-work' className='footer-card_link footer-link'><FaFacebook /> Facebook</a>
                        <a href='#reviews' className='footer-card_link footer-link'><IoMail /> decode1web@mail.ru</a>
                    </div>
                    <div className='footer-card'>
                        <a href='/cv-page' className='footer-createCV'>Создать резюме</a>
                        <button className='footer-language'><IoLanguage /> Русский</button>
                    </div>
                </div>
            </div>
            <div className='footer-concept'>© 2023 Fast CV</div>
        </footer>
    </div>
  )
}