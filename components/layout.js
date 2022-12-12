import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="ml-1 mr-1">{children}</main>
    </>
  );
}
