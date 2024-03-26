import React from "react";
import style from "../styles/UserManagementComp/routesetting.module.css";
import Image from "next/image";
function RouteSetting() {
  return (
    <>
      <div className={style.route}>
        <p>Route Assignments</p>
        <span>
          Check and uncheck the box in front of Route to Assign or Remove route
          from User Account
        </span>
      </div>
      <div className={style.btnn}>
        <p>Test Route</p>
        <Image src="/switch.svg" width={30} height={30} />
      </div>
      <div className={style.top}>
        <div className={style.delievery}>
          <span>Delivery Percentage</span>
          <div className={style.percentage}>
            <input type="text" placeholder="100" />
            <button>%</button>
          </div>
        </div>
        <div className={style.delievery}>
          <span>Card Details</span>
          <table className={style.table}>
            <tbody>
              <tr>
                <td>Total Credits</td>
                <td>₦100,000</td>
              </tr>
              <tr>
                <td>Average USSD Price</td>
                <td>₦1.6 per USSD</td>
              </tr>
              <tr>
                <td>MTN Cost/USSD</td>
                <td>₦2.6 per USSD</td>
              </tr>
              <tr>
                <td>Airtel Cost/USSD</td>
                <td>₦2.5 per USSD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{" "}
      <div className={style.line}>
        <div className={style.btnn}>
          <p>Route 2</p>
          <Image src="/switch.svg" width={30} height={30} />
        </div>
        <div className={style.btn}>
          <button>Save Changes</button>
        </div>
      </div>
    </>
  );
}

export default RouteSetting;
