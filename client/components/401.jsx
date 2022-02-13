import React from "react";
import ALink from "./ALink";
export default function Forbidden() {
  return (
    <div
      style={{
        height: "500px",
        textAlign: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <h1>401 Error</h1>
        <p>Opps! Looks Like You Are Not Logged In!</p>
        <ALink href="/auth/login">Click Here To Login</ALink>
      </div>
    </div>
  );
}
