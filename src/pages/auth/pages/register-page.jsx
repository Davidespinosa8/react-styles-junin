import React from "react";
import { message } from "antd";

export function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Registrado!");
  };

  return (
    <div className="wrapper">
      {/* Flip card for registration */}
      <div className="flip-card__inner">
        {/* Front (Sign up) */}
        <div className="flip-card__front">
          <h2 className="title">Sign up</h2>
          <form className="flip-card__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your email"
              className="flip-card__input"
            />
            <input
              type="password"
              placeholder="Password"
              className="flip-card__input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flip-card__input"
            />
            <button className="flip-card__btn" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
