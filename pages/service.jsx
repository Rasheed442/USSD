import AdminCard from "@/component/AdminCard";
import ClientService from "@/component/ClientService";

import React from "react";
import { Fragment } from "react";

function service() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;

  return (
    <div>
      {role === "admin" && <AdminCard />}
      {role === "client" && <ClientService />}
    </div>
  );
}

export default service;
