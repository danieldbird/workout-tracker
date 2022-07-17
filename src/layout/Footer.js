import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 px-4">
      <p className="container mx-auto text-center py-2 text-sm">
        Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
