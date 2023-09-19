import {Metadata} from "next";
import styles from './page.module.css'
import Dashboard from "@/app/dashboard/page";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Kicks !',
}
export default function Home() {
  return (
      <div>
          <h1>Home</h1>
      </div>

  )
}
