"use client"
import { useEffect, useState } from "react"

function ThemeSwitcher() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const savedtheme = localStorage.getItem("theme");
    if (savedtheme == "dark-mode") {
      setDark(true);
    }
  },[]);
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
        localStorage.setItem('theme','');
    }else{
        document.body.classList.remove('dark-mode');
    }
  })

  return (
    <button id='theme-switcher'className="theme-switcher" onClick={()=>setDark(!dark)}>Dark Mode</button>
  )
}

export default ThemeSwitcher