import React, { useRef, useEffect, useState } from 'react'
import '../styles/switch.css'

/**
 * Los hooks son funciones que vienen en react, e inician con la palabra 'use'
 */

const Switch = () => {

  const ref = useRef(null)
  const [checked, setChecked] = useState(false)

  function handleChange(event) {
    // console.log(event.target)
    let estate = ref.current.checked
    setChecked(estate)
    // console.log(estate)
    document.body.classList.toggle('is-dark-mode', estate)
    document.body.classList.toggle('is-light-mode', !estate)
  }

  function changeMedia(mq) {
    // console.log(mq)
    setChecked(mq.matches)
  }

  useEffect(() => {

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addListener(changeMedia)
    setChecked(mq.matches)
  }, [])

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange={handleChange} checked={checked} className="checkbox" type="checkbox" name="" id="checkbox" />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  )
}

export default Switch