import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { IoIosStar } from "react-icons/io";

function NoticeBoard() {
  const Activities = [
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "Jennifa Lopez",
    },
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "Korede Bada",
    },
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "Rasheed Ransom",
    },
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "James karie",
    },
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "Daniel Wasiu",
    },
    {
      data: "16 May, 2017",
      title: "Sport Organisation Center",
      time: "5 min ago",
      content: "Greate School management dummy dmmy",
      name: "Jennifa Lopez",
    },
  ];
  return (
    <NoticeStyle>
      <div className="cont">
        <div className="overall">
          <div className="notice">
            <h2>Notice Board</h2>
            <p>Activities going within the school</p>
          </div>
          <div className="search">
            <AiOutlineSearch size={23} />
            <input type="text" placeholder="Search......." />
          </div>
        </div>
        <div className="all">
          {Activities.map((a) => {
            return (
              <div className="stamp">
                <IoIosStar size={15} />
                <div className="contents">
                  <p>{a?.data}</p>
                  <h3>
                    {a.name}
                    <span>{a.time}</span>
                  </h3>
                  <h2>{a.content}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NoticeStyle>
  );
}

export default NoticeBoard;
const NoticeStyle = styled.div`
  .stamp {
    display: flex;
    align-items: flex-start;
    padding: 20px 10px 5px 10px;
    gap: 10px;
  }
  .all {
    display: flex;
    flex-direction: column;
  }
  .contents {
    display: flex;
    flex-direction: column;
  }
  .contents p {
    font-size: 13px;
    line-height: 10px;
  }
  .contents h3 {
    display: flex;
    font-size: 13px;
    gap: 10px;
    line-height: 30px;
    color: purple;
  }
  .contents span {
    font-weight: 500;
    font-size: 11px;
    color: gray;
  }
  .contents h2 {
    font-size: 14px;
    text-transform: capitalize;
    width: 70%;
    line-height: 19px;
  }
  .overall {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 20px 10px;
    align-items: flex-end;
    border-bottom: 1px solid gainsboro;
    background-color: white;
  }
  .notice {
    display: flex;
    flex-direction: column;
  }
  .notice h2 {
    font-size: 20px;
    font-weight: 600;
  }
  .cont {
    background-color: white;
    margin: 20px;
    border-radius: 7px;
    align-items: center;
    height: 100%;
    max-height: 470px;
    overflow: hidden;
    position: relative;
    overflow: scroll;
    /* padding: 10px;  */
  }
  .search input {
    border: none;
    width: 100%;
    font-size: 14px;
    outline: none;
  }
  .search {
    padding: 6px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    width: 40%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
