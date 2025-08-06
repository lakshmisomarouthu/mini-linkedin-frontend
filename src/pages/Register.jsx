import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try{
      await api.post("/api/register",{name,email,password});
      navigate("/");
    }catch(err){ 
      console.log(err);
      setError("Registration failed");
    }
  }

  return(
    <div style={{display:"flex",flexDirection:"column",maxWidth:300,margin:"auto",marginTop:80}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/><br/>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <button>Register</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}
export default Register;
