import React from 'react';
import './styles.css';

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      render() {
        return (
            <div id="contact" className="contact">
                Contact Me

                <form>
                    <div className="form-container">
                    <div className="form-header">
                        Name:
                    </div>
                    <textarea
                        className="form-box"
                        name="test-mailing"
                        onChange={this.handleNameChange}
                        placeholder="Enter your name"
                        required
                        value={this.state.name}
                    />
                    </div>
                    <div className="form-container">
                    <div className="form-header">
                        Email:
                    </div>
                    <textarea
                        className="form-box"
                        name="test-mailing"
                        onChange={this.handleEmailChange}
                        placeholder="Enter your email"
                        required
                        value={this.state.email}
                    />
                    </div>
                    <div className="form-container">
                    <div className="form-header">
                        Message:
                    </div>
                    <textarea
                        className="form-message"
                        name="test-mailing"
                        onChange={this.handleFeedbackChange}
                        placeholder="Enter your message"
                        required
                        value={this.state.feedback}
                    />
                    </div>
                    <input type="button" value="Send" className="submit-button" onClick={this.handleSubmit} />
                </form>
            </div>
        )
      }
    
      handleFeedbackChange(event) {
        this.setState({feedback: event.target.value})
      }

      handleNameChange(event) {
        this.setState({name: event.target.value})
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      handleSubmit (event) {
        const templateId = "template_TYH844bZ";
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }

      sendFeedback (templateId, variables) {
        if(variables.from_name === '' || variables.reply_to === '' || variables.message_html === '') {
            alert('You left one of the fields blank');
        }
        else {
            window.emailjs.send(
                'gmail', templateId,
                variables
                ).then(res => {
                  console.log('Email successfully sent!');
                  this.setState({name: ''});
                  this.setState({email: ''});
                  this.setState({feedback: ''});
                })
                // Handle errors here however you like, or use a React error boundary
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        }
      }
    }
export default ContactForm;