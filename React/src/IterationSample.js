import React from "react";

const IterationSample = () => {
  //   return (
  //     <ul>
  //       <li>눈사람</li>
  //       <li>얼음</li>
  //       <li>눈</li>
  //       <li>바람</li>
  //     </ul>
  //   );

  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
