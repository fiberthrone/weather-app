import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Weather from "./Weather";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function useApiKey() {
  const query = useQuery();
  if (query.has("api-key")) {
    const apiKey = query.get("api-key");
    document.cookie = `api-key=${apiKey}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    return apiKey;
  } else {
    const match = document.cookie.match(/\bapi-key=([0-9a-f]+)/);
    return match?.[1] || undefined;
  }
}

function PageHome() {
  const location = useLocation();
  const query = useQuery();
  const apiKey = useApiKey();
  const history = useHistory();

  useEffect(() => {
    if (!apiKey) {
      history.replace("/not-found");
    } else if (query.has("api-key")) {
      query.delete("api-key");
      history.replace(`${location.pathname}?${query.toString()}`);
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
