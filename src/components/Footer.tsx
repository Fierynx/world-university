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
            <a href="/" className="block hover:underline">Home</a>
            <a href="/country-search" className="block hover:underline">Country Search</a>
            <a href="/country-filter" className="block hover:underline">Country Filter</a>
            <a href="/about" className="block hover:underline">About</a>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <a href="https://facebook.com" className="block hover:underline">Facebook</a>
            <a href="https://twitter.com" className="block hover:underline">Twitter</a>
            <a href="https://instagram.com" className="block hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;