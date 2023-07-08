import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc,collection,serverTimestamp } from "firebase/firestore";

const SendMessage = ({scroll}) => {

  const [message,setMessage] = useState();

  const handleMessage = (event)=>{
    const value = event.target.value
    setMessage(value)
  }

  const sendMessage = async (event)=>{
    event.preventDefault() 
    if(message.trim() === "" )return alert("Enter valid message!")
    let { uid,displayName,photoURL,email } = auth.currentUser;
    await addDoc(collection(db,'messages'),{
      text:message,
      name:displayName === null ? displayName =  email : displayName,
      // name:displayName,
      avatar:photoURL,
      createAt:serverTimestamp(),
      uid,
    })
    setMessage("")
  }

  return (
    <form className="send-message" onSubmit={sendMessage}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        onChange={handleMessage}
        value={message}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;