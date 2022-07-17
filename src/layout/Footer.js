import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <p className="container mx-auto text-center text-sm  px-4 py-2">
        Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
