import React from 'react'

const ContactMe = () => {
    return (
        <form action="https://formspree.io/brockohamann@gmail.com" method="POST" class="navDirect" id="navContactMe">
            <h1>Contact Me!</h1>
            <div class="headingLine"></div>
            <div class="form form-email">
                <input type="text" name="email" class="email" autocomplete="off" required />
                <label for="email" class="label-type">
                    <span class="content-name">Email</span>
                </label>
            </div>
            <div class="form form-name">
                <input type="text" name="subject" class="subject" autocomplete="off" required />
                <label for="subject" class="label-type">
                    <span class="content-name">Subject</span>
                </label>
            </div>
            <div class="form-message">
                <textarea rows="10" cols="30" type="text" name="message" class="message" autocomplete="off" placeholder="Message"></textarea>
            </div>
            <button type="submit" id="submitButton" value="send">submit</button>
            </form>
    )
}

export default ContactMe
