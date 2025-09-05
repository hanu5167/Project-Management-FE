import React, { useRef } from "react";

function Otp() {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6); // take only first 6 digits
    pasteData.split("").forEach((char, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = char;
      }
    });

    // focus next empty box if available
    const nextIndex = pasteData.length < 6 ? pasteData.length : 5;
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleValidate = () => {
    const otp = inputRefs.current.map((input) => input.value).join("");
    alert("Entered OTP: " + otp);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "550px",
        padding: "20px",
      }}
    >
      <div className="card p-4 text-center w-100">
        <h6>Please enter the one time password to verify your account</h6>

        <div
          className="inputs d-flex flex-row justify-content-center mt-3"
          onPaste={handlePaste}
        >
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              className="m-2 text-center form-control rounded"
              type="text"
              maxLength="1"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              style={{ width: "50px", height: "50px", fontSize: "20px" }}
            />
          ))}
        </div>

        <div className="mt-4">
          <button className="btn btn-outline-primary px-4 mx-2">
            Resend Otp
          </button>
          <button
            className="btn btn-primary px-4 validate"
            onClick={handleValidate}
          >
            Validate Otp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
