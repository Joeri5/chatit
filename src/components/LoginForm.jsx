import {useState} from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "94131741-a9c4-4ae4-87ae-1900731768f3", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
        } catch (error) {

        }

        // username / password => chatengine => givemessages
        // works => logged in
        // error => try with new username...
    }

    return (
      <div className="wrapper">
          <div className="form">
              <h1 className="title">ChatIt</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                  <div align="center">
                      <button type="submit" className="button">
                          <span>Start Chatting</span>
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
}