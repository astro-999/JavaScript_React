import { useState } from "react";
import "../css/AgeCalculator.css"

function UserAge() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const today = new Date();
    const birthDate = new Date(dob);

    if (!dob || birthDate > today) {
      alert("Please enter a valid DOB");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += lastMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" align="center" >
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-4 text-primary" >
          Age Calculator
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Enter your Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Calculate Age
          </button>
        </form>

        {age && (
          <div className="alert alert-success mt-4 text-center">
            <strong>
              {age.years} Years, {age.months} Months, {age.days} Days
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAge;