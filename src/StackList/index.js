import React from "react";
import Flex from "@react-css/flex";
import "./index.css";

export const StackList = () => {
  return (
    <ul className="listMain">
      <h2 className="listHeader">SKILLS:</h2>
      <Flex flexWrap="wrap" className="listTotal">
        <Flex flexDirection="column" className="list">
          <li>• JavaScript ES6 </li>
          <li>• Typescript </li>
          <li>• React </li>
          <li>• Redux </li>
        </Flex>
        <Flex flexDirection="column" className="list">
          <li>• AWS Services </li>
          <li>• GSP </li>
          <li>• Typesense </li>
        </Flex>
        <Flex flexDirection="column" className="list">
          <li>• Node.js </li>
          <li>• Express </li>
          <li>• GraphQl </li>
          <li>• PostgresSQL </li>
        </Flex>
        <Flex flexDirection="column" className="list">
          <li>• NPM </li>
          <li>• PNPM </li>
          <li>• Lerna </li>
          <li>• Serverless </li>
        </Flex>
        <Flex flexDirection="column" className="list">
          <li>• Responsive Design </li>
          <li>• MUI </li>
          <li>• Jest </li>
          <li>• React Testing Library </li>
        </Flex>
      </Flex>
    </ul>
  );
};
