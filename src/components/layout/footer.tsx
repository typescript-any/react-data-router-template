const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              App Name
            </h3>
            <p className="text-gray-600 text-sm">
              A modern React application built with TypeScript, React Router,
              and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium text-gray-900 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/create-post"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Create Post
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-medium text-gray-900 mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} App Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
