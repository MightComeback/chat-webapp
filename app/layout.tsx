import "../styles/globals.css";
import Header from "./components/Header";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Provider>
          <main className="center">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
