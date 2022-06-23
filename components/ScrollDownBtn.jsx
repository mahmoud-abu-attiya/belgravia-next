import styles from "../styles/ScrollBtn.module.css"
import { useEffect } from "react"
const ScrollDownBtn = () => {
  useEffect(()=>{
    let menu = document.getElementById("menu")
    let scrollBtn = document.getElementById("scrollBtn")
    scrollBtn.addEventListener("click", ()=>{
      menu.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    })
    return () => {
      scrollBtn.removeEventListener("click", ()=>{
        menu.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      })
    };
  })

  return (
    <div className={styles.scroll} id="scrollBtn">
      <i className="fas fa-angle-down"></i>
      <i className="fas fa-angle-down"></i>
      <i className="fas fa-angle-down"></i>
    </div>
  )
}

export default ScrollDownBtn