import AdminCard from "@/component/AdminCard";

import React from "react";
import { Fragment } from "react";

function service() {
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : null;

  return (
    <div>
      <AdminCard />
    </div>
  );
}

export default service;
