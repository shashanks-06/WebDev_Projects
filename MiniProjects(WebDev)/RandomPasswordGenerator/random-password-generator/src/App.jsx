import "./App.css";
import { FaRegCopy } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [password, setPassword] = useState("");

  const passwordGenerator = (length) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+|=-{}[]:;<>~/?";
    const allChars = lowerCase + upperCase + numbers + symbol;

    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password;
  };

  const passwordHandler = () => {
    const newPassword = passwordGenerator(15);
    setPassword(newPassword);
    toast.success("Password Generated!");
  };

  const copyPassword = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Password Copied Successfully!");
      })
      .catch((err) => {
        toast.error("Not Able to Copy Password!");
        console.error("Failed to Copy: ", err);
      });
  };

  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          <span>Random Password</span>
        </h1>
        <div className="display">
          <input
            type="text"
            value={password}
            placeholder="Password"
            id="password"
            readOnly
          />
          <CopyToClipboard text={password} onCopy={copyPassword}>
            <button id="copy-icon">
              <FaRegCopy />
            </button>
          </CopyToClipboard>
        </div>
        <button onClick={passwordHandler}>
          <BsLightningChargeFill id="generate-icon" /> Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
