/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { message } from "antd";

export function LoginPage() {
  const [isToggled, setIsToggled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Bienvenido!");
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="wrapper">
      <div className="switch">
        <input
          type="checkbox"
          className="toggle"
          id="toggle-switch"
          checked={isToggled}
          onChange={handleToggle}
        />
        <label htmlFor="toggle-switch" className="slider"></label>
        <div className="card-side"></div>
      </div>

      <div className={`flip-card__inner ${isToggled ? "flipped" : ""}`}>
        <div className="flip-card__front">
          <h2 className="title">Log in</h2>
          <form className="flip-card__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="example@email.com"
              className="flip-card__input"
            />
            <input
              type="password"
              placeholder="****"
              className="flip-card__input"
            />
            <button className="flip-card__btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="flip-card__back">
          <h2 className="title">Sign up</h2>
          <form className="flip-card__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="example@email.com"
              className="flip-card__input"
            />
            <input
              type="password"
              placeholder="****"
              className="flip-card__input"
            />
            <button className="flip-card__btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
