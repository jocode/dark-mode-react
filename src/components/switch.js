import React from 'react'
import '../styles/switch.css'

const Switch = () => (
  <div className="dark-mode">
    <p className="dark-mode-title">Dark Mode</p>
    <input className="checkbox" type="checkbox" name="" id="checkbox" />
    <label className="switch" htmlFor="checkbox"></label>
  </div>
)

export default Switch