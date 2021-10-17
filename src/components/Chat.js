import react from 'react';

const Chat = () => {
  return (
    <section id="chat-area">
      <div className="chat-area__messages">
        <header className="chat-area__messages-header">
          <div className="content">
            <h1 className="chat-area__messages-name">Sarah Dalton </h1>
            <h4 className="chat-area__messages-status">Active Now<p />
            </h4></div>
        </header>
      </div>
      <div className="messaging-area-container">
        <span onClick={() => console.log('xxxxxxxxxxxxxxxx')} className="chat-area_send_logo"><i className="far fa-paper-plane" /></span> 
        <textarea name="message" id="chat-area__input" defaultValue={""} />
      </div>
    </section>

  )
}

export default Chat;