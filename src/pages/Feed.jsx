import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Feed(){
  const [content,setContent]=useState("");
  const [posts,setPosts]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/");
      return;
    }
    api.get("/posts")
      .then(res=>setPosts(res.data))
      .catch(err=>console.log(err));
  },[]);

  async function handleSubmit(e){
    e.preventDefault();
    const token=localStorage.getItem("token");
    if(!token){
      navigate("/");
      return;
    }
    try{
      const res= await api.post("/posts",{content});
      setPosts([res.data,...posts]);
      setContent("");
    }catch(err){console.log(err);}
  }

  return(
    <>
    <Navbar /> 
    <div style={{maxWidth:600,margin:"auto"}}>
      <h2>Feed</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="What's on your mind?" style={{width:'100%',height:80}}/>
        <button>Post</button>
      </form>
      <hr/>
      {posts.map(p=>
        <div key={p.id} style={{border:'1px solid #ccc',padding:10, margin:'10px 0'}}>
          <b>{p.user?.name}</b>
          <p>{p.content}</p>
        </div>
      )}
    </div>
    </>
  )
}
export default Feed;
