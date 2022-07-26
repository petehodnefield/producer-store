import React from 'react'

function ContactForm() {
    return (
        <div className='container '>
            <div class="container contact-container">
                <h2>Custom Loops</h2>
                <form className='contact-form'>
                    <input className='form-input' type="text" placeholder='Your Name' />
                    <input className='form-input' type="email" placeholder='Your Email' />
                    <input className='form-input' type="text" placeholder='Your Instagram' />
                    <div class="input-container">
                        <label for="request">Your request</label>
                        <textarea name='request'></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm