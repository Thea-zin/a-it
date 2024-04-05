"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function IsAuth(Component) {
  return function IsAuth(props) {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      let tauth = false;
      if (token != "" && token != null) {
        setAuth(true);
        tauth = true;
      }
    //   console.log(tauth);
      if (!tauth) {
        redirect("/");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
