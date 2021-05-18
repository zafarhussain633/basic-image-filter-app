import React, { useState } from "react";
import CardBody from "./CardBody";
import Menu from "./Menu";

function Cards() {
  const [data, setdata] = useState(Menu);

  const set = new Set(Menu.map((v) => v.category));
  let catg = ["All", ...Array.from(set)];

  function handlebtn(input) {
    if (input === "All") {
      setdata(Menu);
    } else {
      let updatedData = Menu.filter((value) => {
        return value.category === input;
      });
      setdata(updatedData);
    }
  }

  return (
    <>
      <div>
        <ul>
          {catg.map((value, i) => {
            return (
              <li key={i}>
                <button onClick={() => handlebtn(value)}>{value}</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="main">
        {data.map((value) => {
          let { image_url, id, text } = value;
          return <CardBody key={id} image_url={image_url} text={text} />;
        })}
      </div>
    </>
  );
}

export default Cards;
