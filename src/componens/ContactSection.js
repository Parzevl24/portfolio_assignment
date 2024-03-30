import './style.css'
import emailImage from './assets/email.png'
import linkedinImage from './assets/linkedin.png'
import data from "./data.json"
function ContactSection(){
    return <div>
        <section id='contact'>
            <p className='section__text__p1' style={{marginTop: "10px"}}>Get in Touch</p>
            <h1 className='title'>Contact Me</h1>
            <div className='contact-info-upper-container'>
                <div className='contact-info-container'>
                    <img src={emailImage} alt="EMail icon" className='icon contact-icon email-icon'></img>
                    <p><a href='mailto:portfolio3@gmail.com'>{data.user.about.contactEmail}</a></p>
                </div>
                <div className='contact-info-container'>
                    <img src={linkedinImage} alt="linkedin icon" className='icon contact-icon'></img>
                    <p><a href='https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp'>Linkedin</a></p>
                </div>
            </div>

        </section>
    </div>
}

export default ContactSection