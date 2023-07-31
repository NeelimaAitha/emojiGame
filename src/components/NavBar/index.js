// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img src="" className="emoji-logo" alt="emoji logo" />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div className="scores-container">
            <p className="score">Score:{currentScore} </p>
            <p className="score">TopScore: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
