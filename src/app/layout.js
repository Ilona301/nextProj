
import "./globals.css";
import Header from "@/components/Header";
import {ThemeProvider} from "@/Providers/ThemeContext";



export default function RootLayout({ children }) {
  return (
      <ThemeProvider>
          <html lang="en">
          <body>
          <Header />
          {children}
          </body>
          </html>
      </ThemeProvider>

  );
}
