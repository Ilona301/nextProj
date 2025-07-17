"use client"


import "./globals.css";
import Header from "@/components/Header";
import {ThemeProvider} from "@/Providers/ThemeContext";
import {Provider} from "react-redux";
import store_redux from "../../Redux/store";




export default function RootLayout({ children }) {
  return (

          <Provider store={store_redux}>
              <ThemeProvider>
              <html lang="en">
              <body>
              <Header />
              {children}
              </body>
              </html>
              </ThemeProvider>

          </Provider>


  );
}
