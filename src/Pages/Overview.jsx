import React from "react";
import AdminDashboard from "../Roles/AdminDashboard";
import PartnersDashboard from "../Roles/PartnersDashboard";

function Overview() {
  const role = localStorage.getItem("role");

  return (
    <div>
      {role === "admin" && <AdminDashboard />}
      {role === "Partner" && <PartnersDashboard />}
    </div>
  );
}

export default Overview;
