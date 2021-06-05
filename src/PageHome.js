import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

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

  return `Hello world! API key: ${apiKey}`;
}

export default PageHome;
