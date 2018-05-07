import React from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import {postMassText} from '../store'


const MassAlert = (props) => {
  const {sendText} = props
  return (
    <div className="massAlertComponent">
      <form className="containerCol" id="massAlert" onSubmit={event => sendText(event)}>
        <textarea id="massAlertMessage" name="message" placeholder="Write your message..." />
        <button id="massAlertSendButton">Send</button>
        <NavLink to="addClient">
            <button id="addClientButton">Add Client</button>
        </NavLink>
      </form>
    </div>
  )
}


const mapDispatchToProps = function (dispatch) {
  return {
    sendText(event) {
      event.preventDefault();
      const form = document.getElementById('massAlert')
      const text = {
        message: event.target.message.value,
      }
      dispatch(postMassText(text))
      form.reset();
    },
  }
}

const MassAlertContainter = withRouter(connect(null, mapDispatchToProps)(MassAlert))
export default MassAlertContainter;
