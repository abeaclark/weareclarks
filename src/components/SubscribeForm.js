import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { rhythm } from '../utils/typography'

const styles = {
  outer: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // give it a little boost up
    paddingBottom: rhythm(3),
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    borderRadius: '5%',
    color: 'white',
    padding: rhythm(1/2),
    fontSize: rhythm(3/4),
    marginTop: rhythm(1/2),
  },
  input: {
    width: '100%',
    padding: rhythm(1/4),
    fontSize: rhythm(3/4),
    textAlign: 'center',
  }
}

const SubscribeForm = ({ url, status, message, onValidated, ...otherProps }) => {
  let email
  const submit = () => {
    email && email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })
  }

  let display = <div/>
  if (status === 'error') {
    if (message === "Error: Timeout") {
      display = <div css={styles.statusText}>There was an error subscribing. Please try again later.</div>
    } else {
      display = <div css={styles.statusText}>You're already subscrbied. Invite a friend to subscribe!</div>
    }
  }

  if (status === 'sending') {
    display = <div css={styles.statusText}>Adding you to the list...</div>
  }

  if (status === 'success') {
    // display = <div css={styles.statusText}>Got it! Thanks for signing up</div>
    return (
      <div css={styles.outer}>
        <h1>Thank You</h1>
      </div>
    )
  }

  return (
    <div css={styles.outer}>
      {display}
      <input
        style={styles.input}
        ref={node => (email = node)}
        type="email"
        placeholder="your@email.here"
        autoFocus
      />
      <input
        style={{ display: 'none' }}
        type="text"
        name="SIGNUP"
        id="SIGNUP"
        value="*|SIGNUP|*"
      />
      <br />
      <button
        style={styles.button}
        onClick={submit}
        disabled={status === 'sending'}
      >
        Subscribe
      </button>
    </div>
  )
}

const SubscribeElement = ({ url, ...otherProps }) => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <SubscribeForm
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
        {...otherProps}
      />
    )}
  />
)

export default SubscribeElement