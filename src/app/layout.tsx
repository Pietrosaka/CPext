// src/app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'NASA Image of the Day',
  description: 'Explore a new image from NASA every day!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="text-4xl font-bold text-indigo-600">NASA Image of the Day</h1>
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
