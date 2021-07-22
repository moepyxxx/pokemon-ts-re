const Ball = () => {
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="12" fill="#E6001A" stroke="black" strokeWidth="2"/>
      <line x1="1" y1="13" x2="25" y2="13" stroke="black" strokeWidth="2"/>
      <line x1="1" y1="15" x2="25" y2="15" stroke="white" strokeWidth="2"/>
      <line x1="1" y1="17" x2="25" y2="17" stroke="white" strokeWidth="2"/>
      <line x1="3" y1="19" x2="24" y2="19" stroke="white" strokeWidth="2"/>
      <line x1="4" y1="21" x2="22" y2="21" stroke="white" strokeWidth="2"/>
      <line x1="6" y1="23" x2="20" y2="23" stroke="white" strokeWidth="2"/>
      <circle cx="13" cy="13" r="12" stroke="black" strokeWidth="2"/>
      <circle cx="13" cy="13" r="4" fill="white" stroke="black" strokeWidth="2"/>
      <circle cx="13" cy="13" r="2" fill="black"/>
    </svg>
  )
}
export default Ball;