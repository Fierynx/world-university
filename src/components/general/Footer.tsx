import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-textPrimary text-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">WorldUniversity</h2>
            <p className="mt-2">© 2024 WorldUniversity. All rights reserved.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link to="/" className="block hover:underline">Home</Link>
            <Link to="/about" className="block hover:underline">About</Link>
            <Link to="/country-filter-search" className="block hover:underline">Explore Countries</Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <Link to="https://facebook.com" target="_blank" className="block hover:underline">Facebook</Link>
            <Link to="https://twitter.com" target="_blank" className="block hover:underline">Twitter</Link>
            <Link to="https://instagram.com" target="_blank" className="block hover:underline">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;