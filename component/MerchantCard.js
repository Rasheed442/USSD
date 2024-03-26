import DashbaordLayout from "@/Layouts/DashbaordLayout";
import React, { useState, useEffect } from "react";
import style from "../styles/PagesStyle/card.module.css";
import styles from "../styles/ComponentStyle/tokenize.module.css";
import { tokenizecards } from "@/TableComponent/TokenizeTable";
import { TiArrowUnsorted } from "react-icons/ti";
import { FiMoreVertical } from "react-icons/fi";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { menu, dashbar } from "@/public/Image";
import Image from "next/image";
import MerchantHeader from "./MerchantHeader";
function MerchantCard() {
  const [tokenized, setTokenized] = useState(true);
  const [detokenized, setDeTokenized] = useState(false);
  const [deletedtokenz, setDeletedTokenz] = useState(false);
  const [tokenizelength, setTokenizeLength] = useState();

  useEffect(() => {
    setTokenizeLength(tokenizecards.length);
  }, []);
  return (
    <DashbaordLayout>
      <MerchantHeader title="Cards" />
      <div className={style.header}>
        <h1>Cards Mer</h1>
        <p>
          This page allows tou to manage tokenized, de-tokenized and deleted
          cards
        </p>
      </div>
      <div className={style.white}>
        <div className={style.token}>
          <div
            className={style.tokenized}
            onClick={() => {
              setTokenized(true);
              setDeTokenized(false);
              setDeletedTokenz(false);
            }}
            style={{
              color: tokenized ? " #5E5ADB" : "",
              borderBottom: tokenized ? "2px solid #5E5ADB" : "",
            }}
          >
            <p>Tokenized</p>
            <span
              style={{
                backgroundColor: tokenized ? "#5E5ADB1A" : "",
                color: tokenized ? "#5E5ADB" : "",
              }}
            >
              {tokenizelength}
            </span>
          </div>

          <div
            className={style.tokenized}
            onClick={() => {
              setDeTokenized(true);
              setTokenized(false);
              setDeletedTokenz(false);
            }}
            style={{
              color: detokenized ? "#5E5ADB" : "",
              borderBottom: detokenized ? "2px solid #5E5ADB" : "",
            }}
          >
            <p>De-tokenized</p>
            <span
              style={{
                backgroundColor: detokenized ? "#5E5ADB1A" : "",
                color: detokenized ? "#5E5ADB" : "",
              }}
            >
              {tokenizelength}
            </span>
          </div>

          <div
            className={style.tokenized}
            onClick={() => {
              setDeTokenized(false);
              setTokenized(false);
              setDeletedTokenz(true);
            }}
            style={{
              color: deletedtokenz ? " #5E5ADB" : "",
              borderBottom: deletedtokenz ? "2px solid #5E5ADB" : "",
            }}
          >
            <p>Deleted Tokens</p>
            <span
              style={{
                backgroundColor: deletedtokenz ? "#5E5ADB1A" : "",
                color: deletedtokenz ? "#5E5ADB" : "",
              }}
            >
              {tokenizelength}
            </span>
          </div>
        </div>

        {tokenized && (
          <>
            <div className={styles.container}>
              <div className={styles.search}>
                <AiOutlineSearch size={20} />
                <input placeholder="Search" />
              </div>
              <div className={styles.sort}>
                <p>
                  <span>sort:</span>Date created <AiOutlineDown size={13} />
                </p>
                <Image src={dashbar} width={25} height={25} alt="" />
                <Image src={menu} width={30} height={30} alt="" />
              </div>
            </div>
            <div className={styles.tablecontent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ display: "flex" }}>
                      <input type="checkbox" /> &nbsp; CUSTOMER&apos;&nbsp;S
                      NAME
                      <TiArrowUnsorted />
                    </th>
                    <th>EMAIL ADDRESS</th>
                    <th>TOKENIZED NO</th>
                    <th>TYPE</th>
                    {/* <th>STATUS</th> */}
                    <th>
                      DATE
                      <TiArrowUnsorted />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tokenizecards.map((t) => {
                    return (
                      <tr>
                        <td>
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                          <Image
                            src={t.icon}
                            width={30}
                            height={30}
                            style={{
                              marginBottom: "-8px",
                              marginRight: "10px",
                            }}
                          />
                          {t.customer_name}
                        </td>

                        <td>{t.email_address}</td>

                        <td>{t.tokenize_number}</td>

                        <td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Image src={t.icon2} width={40} height={40} />
                          <p>
                            {t.type}
                            <br />
                            <span>{t.expiry}</span>
                          </p>
                        </td>

                        <td>{t.date}</td>

                        <td>
                          <FiMoreVertical size={20} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={styles.row}>
                <span>Showing 1-5 of entries</span>
                <div className={styles.pagins}>
                  <p>Rows per page:</p>
                  <select>
                    <option>5</option>
                  </select>
                  <div className={styles.arrow}>
                    <button>
                      <AiOutlineLeft />
                    </button>
                    <button>1</button>
                    <button>
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {detokenized && (
          <>
            <div className={styles.container}>
              <div className={styles.search}>
                <AiOutlineSearch size={20} />
                <input placeholder="Search" />
              </div>
              <div className={styles.sort}>
                <p>
                  <span>sort:</span>Date created <AiOutlineDown size={13} />
                </p>
                <Image src={dashbar} width={25} height={25} alt="" />
                <Image src={menu} width={30} height={30} alt="" />
              </div>
            </div>
            <div className={styles.tablecontent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ display: "flex" }}>
                      <input type="checkbox" /> &nbsp; CUSTOMER&apos;&nbsp;S
                      NAME
                      <TiArrowUnsorted />
                    </th>
                    <th>EMAIL ADDRESS</th>
                    <th>TOKENIZED NO</th>
                    <th>TYPE</th>
                    {/* <th>STATUS</th> */}
                    <th>
                      DATE
                      <TiArrowUnsorted />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tokenizecards.map((t) => {
                    return (
                      <tr>
                        <td>
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                          <Image
                            src={t.icon}
                            width={30}
                            height={30}
                            style={{
                              marginBottom: "-8px",
                              marginRight: "10px",
                            }}
                          />
                          {t.customer_name}
                        </td>

                        <td>{t.email_address}</td>

                        <td>{t.tokenize_number}</td>

                        <td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Image src={t.icon2} width={40} height={40} />
                          <p>
                            {t.type}
                            <br />
                            <span>{t.expiry}</span>
                          </p>
                        </td>

                        <td>{t.date}</td>

                        <td>
                          <FiMoreVertical size={20} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={styles.row}>
                <span>Showing 1-5 of entries</span>
                <div className={styles.pagins}>
                  <p>Rows per page:</p>
                  <select>
                    <option>5</option>
                  </select>
                  <div className={styles.arrow}>
                    <button>
                      <AiOutlineLeft />
                    </button>
                    <button>1</button>
                    <button>
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {deletedtokenz && (
          <>
            <div className={styles.container}>
              <div className={styles.search}>
                <AiOutlineSearch size={20} />
                <input placeholder="Search" />
              </div>
              <div className={styles.sort}>
                <p>
                  <span>sort:</span>Date created <AiOutlineDown size={13} />
                </p>
                <Image src={dashbar} width={25} height={25} alt="" />
                <Image src={menu} width={30} height={30} alt="" />
              </div>
            </div>
            <div className={styles.tablecontent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ display: "flex" }}>
                      <input type="checkbox" /> &nbsp; CUSTOMER&apos;&nbsp;S
                      NAME
                      <TiArrowUnsorted />
                    </th>
                    <th>EMAIL ADDRESS</th>
                    <th>TOKENIZED NO</th>
                    <th>TYPE</th>
                    {/* <th>STATUS</th> */}
                    <th>
                      DATE
                      <TiArrowUnsorted />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tokenizecards.map((t) => {
                    return (
                      <tr>
                        <td>
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                          <Image
                            src={t.icon}
                            width={30}
                            height={30}
                            style={{
                              marginBottom: "-8px",
                              marginRight: "10px",
                            }}
                          />
                          {t.customer_name}
                        </td>

                        <td>{t.email_address}</td>

                        <td>{t.tokenize_number}</td>

                        <td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Image src={t.icon2} width={40} height={40} />
                          <p>
                            {t.type}
                            <br />
                            <span>{t.expiry}</span>
                          </p>
                        </td>

                        <td>{t.date}</td>

                        <td>
                          <FiMoreVertical size={20} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={styles.row}>
                <span>Showing 1-5 of entries</span>
                <div className={styles.pagins}>
                  <p>Rows per page:</p>
                  <select>
                    <option>5</option>
                  </select>
                  <div className={styles.arrow}>
                    <button>
                      <AiOutlineLeft />
                    </button>
                    <button>1</button>
                    <button>
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </DashbaordLayout>
  );
}

export default MerchantCard;
