import ResumeSummary from "../components/ResumeSummary";
import getUsers from "../services/getUsers";
import { useEffect } from "react";
function SearchEngine({ users, setUsers }) {
  useEffect(() => {
    (async () => {
      const data = await getUsers();

      for (let i = 0; i < data.length; i++) {
        data[i].resume = JSON.parse(data[i].resume);
      }

      console.log(data);
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      {users.map((current, index) => {
        return <ResumeSummary key={index} {...current} />;
      })}
    </div>
  );
}

export default SearchEngine;
