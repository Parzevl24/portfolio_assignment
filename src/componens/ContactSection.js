import './style.css'
import emailImage from './assets/email.png'
import linkedinImage from './assets/linkedin.png'
function ContactSection(){
    return <div>
        <section id='contact'>
            <p className='section__text__p1'>Get in Touch</p>
            <h1 className='title'>Contact Me</h1>
            <div className='contact-info-upper-container'>
                <div className='contact-info-container'>
                    <img src={emailImage} alt="EMail icon" className='icon contact-icon email-icon'></img>
                    <p><a href='mailto:examplemail@gmail.com'>Priyansu@gmail.com</a></p>
                </div>
                <div className='contact-info-container'>
                    <img src={linkedinImage} alt="linkedin icon" className='icon contact-icon'></img>
                    <p><a href='https://www.linkedin.com'>Linkedin</a></p>
                </div>
            </div>

        </section>
    </div>
}

export default ContactSection