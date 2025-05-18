"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import "./globals.css";
import useAuth from "@/Firebase/useAuth";
import { store } from "@/redux/app/store";

const Spinner = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full" />
  </div>
);

const LayoutContent = ({ children }) => {
  const { isAuthLoading } = useAuth();
  if (isAuthLoading) return <Spinner />;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <LayoutContent>{children}</LayoutContent>
        </Provider>
      </body>
    </html>
  );
}
