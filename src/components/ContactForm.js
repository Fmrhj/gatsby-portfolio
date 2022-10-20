import React from "react"
import {
    FormControl, FormHelperText, ThemeProvider,
    TextField, Button, AlertTitle, Alert, MenuItem, Grid
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { red } from "@material-ui/core/colors";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
            darker: '#64748B',
        },
        neutral: {
            main: '#0971f1',
            contrastText: '#053e85',
        },
    },
});

const Emoji = (props) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>);

const subjects = [
    {
        value: 'Projects / Collaborations',
        label: 'Projects / Collaborations',
    },
    {
        value: 'Exchange',
        label: 'Exchange',
    },
    {
        value: 'Others',
        label: 'Others',
    },
];

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            IsValidEmail: false,
            Email: '',
            EmailSent: false,
            Sender: '',
            Message: '',
            Subject: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.isValidEmail = this._isValidEmail.bind(this);
    }

    handleSubjectChange(event) {
        let subject = event.target.value;
        this.setState({Subject: subject});
    }

    handleSenderChange(event) {
        let sender = event.target.value;
        if (sender.length > 2) {
            console.log("Sender is valid")
            this.setState({ Sender: sender });
        }
    }

    handleMessageChange(event) {
        let message = event.target.value;
        if (message != '') {
            console.log("Message is valid")
            this.setState({ Message: message });
        }
    }

    handleEmailChange(event) {
        this.setState({ IsValidEmail: false });
        let email = event.target.value;
        if (this._isValidEmail(email)) {
            console.log("Email is valid")
            this.setState({ Email: email, IsValidEmail: true });
        }
    }

    _isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ EmailSent: true });
        console.log("Email: " + this.state.Email);
        console.log("Sender: " + this.state.Sender);
        console.log("Subject: " + this.state.Subject);
        console.log("Message: " + this.state.Message);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <form >
                    <Grid container direction={"column"} spacing={2} style={{ color: 'white', padding: '10px'}}>
                        <Grid item>
                            <TextField label="Full Name / Company" required fullWidth autocomplete="none" onChange={(e) => this.handleSenderChange(e)} />
                        </Grid>
                        <Grid item>
                            <TextField label="Email" required fullWidth onChange={(e) => this.handleEmailChange(e)} autocomplete="none" helperText={!this.state.IsValidEmail? 'Please enter a valid email': 'Email is valid'}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Subject" required fullWidth select onChange={(e) => this.handleSubjectChange(e)} >
                                {subjects.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField></Grid >
                        <Grid item>
                            <TextField label="Message" required fullWidth multiline rows={5} autocomplete="none" onChange={(e) => this.handleMessageChange(e)}/></Grid>

                        <Grid item>

                            {this.state.Sender != '' && this.state.IsValidEmail && !this.state.EmailSent === true ?
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                    Submit
                                </Button>
                                : <Button variant="contained" color="primary" disabled>
                                    Submit
                                </Button>}
                        </Grid>

                        <Grid item>
                            {this.state.EmailSent === true ?
                                <Alert severity="success" variant='filled'>
                                    <AlertTitle>Email Sent</AlertTitle>
                                    Thank your for your message. In short, you will receive a confirmation.
                                    Your email will be responded as soon as possible.
                                </Alert> : <div></div>
                            }
                        </Grid>

                    </Grid>
                </form>
            </ThemeProvider >
        );
    }
}

// The header has container with a navigation bar
const ContactForm = () => (
    <div>
        <section class="comboPurple">
            <div className="container">
                <div className="index-block">
                    <div container>
                        <div className="blog-post-content">
                            <h1><Emoji symbol="✉️" /> Leave a message</h1>
                            <p>Write me for sharing ideas, booking an appointment <Emoji symbol="🗓" />, interesing collaborations <Emoji symbol="📦" /> or projects <Emoji symbol="🔨" />.</p>
                            <p>I will get back to you as soon as possible</p>
                            <br />
                            <EmailForm />
                        </div>
                        <div className="social-logo">
                        </div>
                    </div>
                </div>
            </div>
        </section><div class="containerCurve"></div>
    </div>
)

export default ContactForm
