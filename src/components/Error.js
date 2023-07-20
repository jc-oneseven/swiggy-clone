import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>
        Opps!, {err.status} - {err.statusText}
      </h1>
      <p> {err?.error?.message} </p>
    </div>
  );
};

export default Error;
