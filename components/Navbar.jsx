import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-lg">React + Tailwind App</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
