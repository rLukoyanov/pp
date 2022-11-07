import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/common/Input/Input";

export default function LoginPage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Input />
      <Input />
    </div>
  );
}
