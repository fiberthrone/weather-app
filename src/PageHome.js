import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Weather from "./Weather";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageHome() {
  const query = useQuery();
  const history = useHistory();

  const apiKey = query.get("api-key");

  useEffect(() => {
    if (!apiKey) {
      history.replace("/not-found");
    }
  }, [apiKey]);

  if (!apiKey) {
    return null;
  }

  return (
    <>
      <Weather apiKey={apiKey} lat={55.751244} lon={37.618423} />
    </>
  );
}

export default PageHome;
