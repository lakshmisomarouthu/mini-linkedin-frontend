import { useNavigate } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem("token");
    navigate("/");
  }

  return(
    <div style={{background:"#0a66c2", padding:"10px", color:"white", display:"flex", justifyContent:"space-between"}}>
      <div style={{cursor:"pointer"}} onClick={()=>navigate("/feed")}>
        MiniLinkedIn
      </div>
      <div>
        <span style={{marginRight:15, cursor:"pointer"}} onClick={()=>navigate("/profile")}>Profile</span>
        <span style={{cursor:"pointer"}} onClick={logout}>Logout</span>
      </div>
    </div>
  )
}
export default Navbar;
