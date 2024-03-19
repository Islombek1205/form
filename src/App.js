import './App.css';
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set } from 'firebase/database'

function App() {

  const [user, setUser] = useState('');
  const [password, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyCTy5dI71KXQmQDHqU605n--SU9ciot77U",
    authDomain: "adddata-24184.firebaseapp.com",
    projectId: "adddata-24184",
    storageBucket: "adddata-24184.appspot.com",
    messagingSenderId: "223508275650",
    appId: "1:223508275650:web:2fab43422beed8dd6cf65b"
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase();

  function addData(e) {
    e.preventDefault();

    if(user && password && email != ""){
      set(ref(db, 'user/' + user),{
        user: user,
        password: password,
        email: email
      })
      .then(() => {
        alert('Success!')
      })
      .catch((error) => {
        alert('Error!')
        console.log(error);
      })
  
      setUser('');
      setPhone('');
      setEmail('');
    }
    else{
      alert("Barcha ma'lumotlarni to'ldiring")
    }

  }

  return (
    <div className="app">
      <form action="#">
        <h1>Log in</h1>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Email...' id="email" required minLength={5}/>
        <input value={password} onChange={(e)=> setPhone(e.target.value)} type="password" placeholder='Password...' id='password' required minLength={9}/>
        <input value={user} onChange={(e)=> setUser(e.target.value) } type="text"  placeholder='Username...' id='user' required minLength={3}/>
        <button onClick={addData} id='send'>Send</button>
      </form>
    </div>
  );
}

export default App;
