import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Profile(){
  const [posts,setPosts]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/");
      return;
    }
    api.get("/posts/my")
      .then(res=>setPosts(res.data))
      .catch(err=>console.log(err));
  },[]);

  return(
    <div>
      <Navbar/>
      <div style={{maxWidth:600, margin:"auto"}}>
        <h2>My Profile</h2>
        {posts.map(p=>
          <div key={p.id} style={{border:"1px solid #ccc",padding:10,margin:'10px 0'}}>
            <p><b>{p.user?.name}</b></p>
            <p>{p.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile;
