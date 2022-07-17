import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="">
        <Link to="/">Workout Tracker</Link>
      </h1>
      <ul className="flex">
        <li className="pr-4">
          <Link to="/exercises">Exercises</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
      </ul>
    </nav>
  );
}
