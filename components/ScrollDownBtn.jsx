import styles from "../styles/ScrollBtn.module.css"
import { useEffect } from "react"
const ScrollDownBtn = (props) => {
  useEffect(()=>{
    let scrollTarget = document.getElementById(props.target)
    let scrollBtn = document.getElementById("scrollBtn")
    scrollBtn.addEventListener("click", ()=>{
      scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    })
    return () => {
      scrollBtn.removeEventListener("click", ()=>{
        scrollTarget.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      })
    };
  }, [])

  return (
    <div className={styles.scroll} id="scrollBtn">
      <i className="fas fa-angle-down"></i>
      <i className="fas fa-angle-down"></i>
      <i className="fas fa-angle-down"></i>
    </div>
  )
}

export default ScrollDownBtn