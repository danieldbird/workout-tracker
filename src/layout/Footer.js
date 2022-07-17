import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 px-4 py-2 ">
      <p className="container mx-auto text-center text-sm">Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}
