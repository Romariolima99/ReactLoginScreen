import { useState } from 'react';
import jpIMG from './assets/jp.svg'
import './styles.css'

function App() {
const [email, setEmail] = useState("")
const [passaword, setPassaword] = useState("")

  return (
  <div className="container">
    <div className="container-login">
     <div className="wrap-login"> 
     <form className="login-form"> 
     <span className="login-form-title">Bem vindo!</span>
     
     <span className="login-form-title">
      <img  src={jpIMG} alt='Jovem Programador'/>
     </span>

    <div className="wrap-input">
     <input className={email !== "" ? 'has-value input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
     <span className="focus-input"  data-placeholder="E-mail"> </span>
    </div>

    <div className="wrap-input">
     <input  className={passaword !== "" ? 'has-value input' : 'input'} type="password" value={passaword} onChange={e => setPassaword(e.target.value)}/>
     <span className="focus-input"  data-placeholder="Password"> </span>
   </div>

     <div className="container-login-form-btn">
       <button className="login-form-btn">Login</button>
    </div>

    <div className="text-center">
      <span className="txt">Não possui conta?</span>
      <a className="text2" href="#"> Criar Conta</a>
    </div>

    

     </form>
    </div>
   </div> 
  </div>
   
  );
}

export default App;
