import ResumeSummary from "../components/ResumeSummary";
import getUsers from "../services/getUsers";
import { useEffect } from "react";
function SearchEngine({ users, setUsers }) {
  useEffect(() => {
    (async () => {
      const data = await getUsers();

      setUsers(data);
    })();
  }, []);

  return (
    <div>
      {users.map((current) => {
        return <ResumeSummary {...current} />;
      })}
    </div>
  );
}

export default SearchEngine;
