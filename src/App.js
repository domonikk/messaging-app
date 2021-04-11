import {ChatEngine} from 'react-chat-engine'; 
import './App.css';  
import ChatFeed from './components/ChatFeed.jsx'; 
import LoginForm from './components/LoginForm.jsx';

const App = ()=>{ 
    if (!localStorage.getItem('username')) return <LoginForm/>
    return( 
        <ChatEngine 
            height="100vh"  
            projectID="" 
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps }/>}
        />

    )
} 

export default App; 