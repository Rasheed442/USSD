import React from "react";
import style from "../styles/PagesStyle/system.module.css";
import DashbaordLayout from "@/Layouts/DashbaordLayout";
import AdminHeader from "@/component/AdminHeader";
function SystemMonitor() {
  return (
    <DashbaordLayout>
      <AdminHeader title="Administration" />
      <div className={style.top}>
        <h2>System Monitor</h2>
        <span>Manage all system and monitor them.</span>
      </div>
      <div className={style.white}>
        <div>
          <div className={style.server}>
            <h2>Server Status</h2>
          </div>
          <div className={style.gridoutside}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>SERVER NAME</th>
                  <th>CONNECTION STATUS</th>
                  <th>CONNECTION TYPE</th>
                  <th>CONNECTION TIME</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tr>
                <td>Server A</td>
                <td style={{ fontWeight: "600", color: "#50B848" }}>
                  REGISTERED
                </td>
                <td>SIP</td>
                <td>10H 5M</td>
                <td>
                  <div
                    className={style.status}
                    style={{
                      backgroundColor: "#ECFDF3",
                      border: "1px solid #039855",
                    }}
                  >
                    <div
                      className={style.line}
                      style={{ backgroundColor: "#039855" }}
                    ></div>
                    <p>Online</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Server A</td>
                <td
                  style={{
                    fontWeight: "600",
                    color: "#D92D20",
                  }}
                >
                  UNREGISTERED
                </td>
                <td>SIP</td>
                <td>10H 5M</td>
                <td>
                  <div
                    className={style.status}
                    style={{
                      border: "1px solid #D92D20",
                      backgroundColor: "#FEF3F2",
                    }}
                  >
                    <div
                      className={style.line}
                      style={{ backgroundColor: "#D92D20" }}
                    ></div>
                    <p>Offline</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Server A</td>
                <td style={{ fontWeight: "600", color: "#D92D20" }}>
                  UNREGISTERED
                </td>
                <td>SIP</td>
                <td>10H 5M</td>
                <td>
                  <div
                    className={style.status}
                    style={{
                      border: "1px solid #D92D20",
                      backgroundColor: "#FEF3F2",
                    }}
                  >
                    <div
                      className={style.line}
                      style={{ backgroundColor: "#D92D20" }}
                    ></div>
                    <p>Offline</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className={style.server}>
            <h2>USSD Traffic</h2>
          </div>
          <div className={style.gridoutside}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>DIRECTION</th>
                  <th>PUSH USSD</th>
                  <th>PULL USSD</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tr>
                <td>Total Session</td>
                <td>30</td>
                <td>12</td>
                <td>450 min</td>
              </tr>
              <tr>
                <td>Total Session</td>
                <td>30</td>
                <td>12</td>
                <td>450 min</td>
              </tr>
              <tr>
                <td>Total Session</td>
                <td>30</td>
                <td>12</td>
                <td>450 min</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className={style.server}>
            <h2>Resource Uilization</h2>
          </div>
          <div className={style.gridoutside}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>SERVER NAME</th>
                  <th>CPU USAGE </th>
                  <th>MEMORY USAGE</th>
                  <th>DISK</th>
                </tr>
              </thead>
              <tr>
                <td>Server A</td>
                <td>30%</td>
                <td>10GN / 16GB</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>Server B</td>
                <td>30%</td>
                <td>10GN / 16GB</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>Server C</td>
                <td>30%</td>
                <td>10GN / 16GB</td>
                <td>80%</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={style.server2}>
          <h2>System Alerts</h2>
        </div>
        <div className={style.servers}>
          <p>Server A: Disk Space Low</p>
          <p>Server B: SIP Connection Failure</p>
          <p>Server C: High CPU Usage</p>
        </div>
      </div>
    </DashbaordLayout>
  );
}

export default SystemMonitor;
