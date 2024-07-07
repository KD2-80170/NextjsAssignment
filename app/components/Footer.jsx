// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Nextcent</h2>
          <p className="text-sm">Noida Delhi Street, City, Country</p>
          <p className="text-sm">info@nextcent.com</p>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-sm hover:text-gray-400">Home</a>
          <a href="#" className="text-sm hover:text-gray-400">About</a>
          <a href="#" className="text-sm hover:text-gray-400">Services</a>
          <a href="#" className="text-sm hover:text-gray-400">Contact</a>
        </nav>
      </div>
      <div className="mt-4 border-t border-gray-800 max-w-6xl mx-auto px-4 pt-4 flex justify-between items-center text-sm">
        <p>&copy; 2024 Nextcent. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18V10H8v8h2zm2.61-8H14V6.74c0-.97.26-1.61 1.65-1.61h1.77V2.03C16.73 1.79 15.75 1.5 14.45 1.5c-2.15 0-3.63 1.31-3.63 3.72V10H8v8h3.82c.03 0 .05-.01.08-.01V10h1.71z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18.5 4.6v.4c0 5.1-3.9 11-11 11v-.4c4.7 0 8.6-3.8 8.9-8.6h-.4c-.3 1.3-1.2 2.4-2.4 3.1-.5-.1-1-.2-1.5-.3.5 1.5 1.9 2.6 3.5 2.7-1.3 1-3 1.6-4.7 1.6h-.8c1.7 1.1 3.7 1.7 5.9 1.7 7 0 10.8-5.8 10.8-10.8z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 2a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2H3zm5.75 12H6V7.51h2.75V14zm-1.38-7.45a1.64 1.64 0 110-3.28 1.64 1.64 0 010 3.28zm8.51 7.45h-2.75V10c0-.63-.01-1.44-.88-1.44-.88 0-1.01.69-1.01 1.4v3.53H9.62V7.51h2.63v.74h.04c.35-.66 1.2-1.36 2.59-1.36 2.77 0 3.28 1.82 3.28 4.18v4.78z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
