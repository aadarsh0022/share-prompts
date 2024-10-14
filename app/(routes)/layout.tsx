import '@/styles/globals.css';
import Nav from '../_components/Nav';
import Provider from '../_components/Provider';

export const metadata = {
  title: 'AIPrompts',
  description: 'Share prompts with the community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
