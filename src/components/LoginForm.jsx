import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(window.env.projectID, username, password);
        const authObj = {
            "Project-ID":window.env.projectID,
            "User-Name": username,
            "User-Secret":password,
        };
        try {
            await axios.get('https://api.chatengine.io/chats',{
                headers:authObj
            })
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        }
        catch(error) {
            setError('Username or Password not valid');
        }
    }
    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Login</h1>
                <form action="" onSubmit={submitHandler}>
                    <input type="text" value={username} onChange={usernameHandler} className="input" placeholder="Username" required  />
                    <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;