export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col bg-radial from-gray-900 to-gray-950 text-white">
        {children}
      </div>
    );
  }
  