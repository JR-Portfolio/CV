import JsonData from "../../data/datapkg.json";
//import remover from "../utils/common";
//import { Outlet, NavLink } from "react-router-dom";

export default function Work() {
  let i = 0;
  const issueData = JsonData.workhistory.map((j) => {
    return j;
  });

  return (
    <>
    <hr></hr>
      {issueData?.map((t) => (
        <>
          <div key={i++} className="work--general">
            {t?.Company}
          </div>
          <div key={i++} className="work--table">
            <div key={i++} className="row">
              <div key={i++} className="cell">
                {t?.Duration}
              </div>
              <div key={i++} className="cell">
                {t?.Roles.map((r) => (
                  <tr key={i++}>{r}</tr>
                ))}
              </div>
              <div key={i++} className="cell">
                {t?.Locations.map((l) => (
                  <tr key={i++}>{l}</tr>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}

    </>
  );
}