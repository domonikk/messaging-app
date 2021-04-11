import {useState}  from 'react'; 
import axios from 'axios';

const projectId=""


const LoginForm =()=>{
    const [username, setUsername] = useState (''); 
    const [password, setPassword] =useState ('');  
    const [error, setError] = useState ('');

    const handleSubmit= async (event)=>{ 
        event.preventDefault(); 

        const authObject= {'Project-ID':projectId, 'User-Name': username, 'User-Secret': password };

        try{ 
            //request for username and password from chat engine 
            await axios.get('https://api.chatengine.io/chats',{headers: authObject}); 
         

           //if credentials are correct set username and password into local storage
           localStorage.setItem('username', username);  
           localStorage.setItem('password', password);  

           //reload page 
           window.location.reload() 
           setError ('');
        }  catch (error){ 
           setError('Incorrect Credentials');
        }

    };

    return (
        <div className="wrapper"> 
           <div className="form">  
             <h1 className="title"> Chat Application </h1>  
             <form onSubmit={handleSubmit}> 
                <input type="text" value= {username} onChange ={(e)=> setUsername(e.target.value)} className="input" placeholder ="Username" required/> 
                <input type="password" value= {password} onChange ={(e)=> setPassword(e.target.value)} className="input" placeholder ="Password" required/> 
                <div align="center">  
                    <button type="submit" className="button"> 
                       <span> Start Chatting </span>
                    </button> 
                </div>
             </form> 
               <h1>{error}</h1>
           </div>
        </div>
    );
} 

export default LoginForm;