import Image from "next/image";
import Navbar from "./components/Navbar";
import Hreo from "./components/Hreo";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
  <>
  <Navbar></Navbar>
  <Hreo></Hreo>
  <Main></Main>
  <Sidebar></Sidebar>
  </>
  );
}
