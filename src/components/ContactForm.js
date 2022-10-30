import React from "react"
import {
    ThemeProvider, TextField, Button, AlertTitle, Alert, MenuItem, Grid, Select, FormControl, InputLabel
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import axios from "axios"

const theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        type: "light",
        primary: {
            main: "#fff",
            darker: "#64748B",
        },
        neutral: {
            main: "#0971f1",
            contrastText: "#053e85",
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
        value: "Projects / Collaborations",
        label: "Projects / Collaborations"
    },
    {
        value: "Exchange",
        label: "Exchange"
    },
    {
        value: "Others",
        label: "Others"
    },
    {
        value: "",
        label: ""
    }
];


class EmailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IsValidEmail: false,
            Email: "",
            EmailSent: false,
            Sender: "",
            Message: "",
            Subject: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.isValidEmail = this._isValidEmail.bind(this);
    }

    handleSubjectChange(event) {
        let subject = event.target.value;
        this.setState({ Subject: subject });
    }

    handleSenderChange(event) {
        let sender = event.target.value;
        if (sender.length > 2) {
            this.setState({ Sender: sender });
        }
    }

    handleMessageChange(event) {

        let message = event.target.value;

        if (message != "") {
            this.setState({ Message: message });
        }
    }

    handleEmailChange(event) {

        this.setState({ IsValidEmail: false });

        let email = event.target.value;
        if (this._isValidEmail(email)) {
            this.setState({ Email: email, IsValidEmail: true });
        }
    }

    _isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }

    handleSubmit(event) {

        this.setState({ EmailSent: true });

        axios({
            method: "post",
            url: `${process.env.GATSBY_CONTACT_SERVICE_URL}`,
            data: JSON.stringify({
                "sender": `${process.env.GATSBY_CONTACT_SERVICE_SENDER}`,
                "recipient": this.state.Email,
                "subject": this.state.Subject,
                "message": this.state.Message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => console.log(response.statusCode)).catch((err) => console.log(err));

        event.preventDefault();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <FormControl fullWidth >
                    <Grid container direction={"column"} spacing={2.5} style={{ color: "white", padding: "10px" }}>
                        <Grid item>
                            <TextField label="Full Name / Company" fullWidth required onChange={(e) => this.handleSenderChange(e)} />
                        </Grid>
                        <Grid item>
                            <TextField label="Email" fullWidth required onChange={(e) => this.handleEmailChange(e)} helperText={!this.state.IsValidEmail ? "Please enter a valid email" : "Email is valid"} />
                        </Grid>
                    </Grid>
                </FormControl>
                <FormControl fullWidth>
                    <Grid container direction={"column"} spacing={2.5} style={{ color: "white", padding: "10px" }}>
                        <Grid item>
                            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                fullWidth
                                variant="outlined"
                                label="Subject"
                                onChange={(e) => this.handleSubjectChange(e)}>{subjects.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid >
                        <Grid item>
                            <TextField label="Message" required fullWidth multiline rows={5} onChange={(e) => this.handleMessageChange(e)} /></Grid>
                        </Grid>
                        <Grid item>
                            {this.state.Sender != "" && this.state.IsValidEmail && !this.state.EmailSent === true ?
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                    Submit
                                </Button>
                                : <Button variant="contained" color="primary" disabled>
                                    Submit
                                </Button>}
                        </Grid>
                        <Grid item>
                            {this.state.EmailSent === true ?
                                <Alert severity="success" variant="filled">
                                    <AlertTitle>Email Sent</AlertTitle>
                                    Thank your for your message. In short, you will receive a confirmation.
                                    Your email will be responded as soon as possible.
                                </Alert> : <div></div>
                            }
                        </Grid>
                </FormControl>
            </ThemeProvider >
        );
    }
}

// The header has container with a navigation bar
const ContactForm = () => (
    <div>
        <section className="comboPurple">
            <div className="container">
                <div className="index-block">
                    <div container>
                        <div className="blog-post-content">
                            <h1>Leave your message</h1>
                            <p>Write me for sharing ideas, booking an appointment <Emoji symbol="🗓" />, interesing collaborations <Emoji symbol="📦" /> or projects <Emoji symbol="🔨" />.</p>
                            <p>I will get back to you as soon as possible</p>
                            <br />
                            <EmailForm />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="social-logo">
                        </div>
                    </div>
                </div>
            </div>
        </section><div className="containerCurve"></div>
    </div>
)

export default ContactForm
