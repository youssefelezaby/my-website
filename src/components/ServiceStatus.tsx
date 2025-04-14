import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceStatus: React.FC = () => {
  const [status, setStatus] = useState("");
  const apiServiceStatusURL = import.meta.env.VITE_API_SERVICESTATUS_URL || "";

  const statusColor = () => {
    if (status === "operational") {
      return "!text-green-500";
    } else if (status === "downtime") {
      return "!text-yellow-500";
    } else if (status === "degraded") {
      return "!text-red-500";
    }
  };

  useEffect(() => {
    async function getStatusData() {
      try {
        const response = await axios.get(apiServiceStatusURL);
        setStatus(response.data.heartbeatResponse.serviceStatus);
      } catch (error) {
        console.error("Failed to get status from backend:", error);
      }
    }

    getStatusData();
  }, [apiServiceStatusURL]); // Add apiServiceStatusURL to dependency array

  return (
    <div>
      <p>
        {" "}
        <span className={statusColor()}>{status || ""}</span>
      </p>
    </div>
  );
};

export default ServiceStatus;
