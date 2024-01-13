import JsonData from "../../data/datapkg.json";
import { Outlet, Link } from "react-router-dom";

export default function Education() {
  let i = 0;
  const profileData = JsonData.profile.map((j) => {
    return j;
  });

  return (
    <>
    <div>
      <div className="profile--container">
        {profileData.map((profile) => (
          <div key={i++} className="profile--card">
            <img key={i++} src={profile.Photo} alt="Jouni Riimala" />
            <table className="profile--table">
              <td className="row">{profile.Name}</td>
              <td className="row">{profile.BirthPlace}</td>
              <td className="row">{profile.Profession}</td>
              <td className="row">{profile.Familly}</td>
            </table>
          </div>
        ))}
      </div>
  
    </div>
        <nav className="host-nav">
        <Link to="why">Why to hire?</Link>
        <Link to="intrests">On my freme</Link>
      </nav>
      <Outlet />
      </>
  );
}
