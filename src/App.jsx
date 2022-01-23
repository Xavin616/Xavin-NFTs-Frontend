import { useState } from 'react'
import twitterLogo from './assets/download.svg'
import './App.css'
import { render } from 'react-dom'

const twitterHandle = "@JaceOlamide"
const twitterLink = "https://twitter.com/JaceOlamide"

function App() {
  const renderButton = () => (
    <button className='connect'>Connect Wallet</button>
  )

  return (
    <div className="App">
      <div className="container">
        <h1 className='header'>Xavin's</h1>
        <p className='subHeader'>NFT Collection</p>
        <p className='words'>Mine your own Unique and Epic NFTs.</p>
        {renderButton()}
      </div>
      <div className="footer">
        <div className="logo">
        <img className='logoImage' src={twitterLogo} alt="Twitter Logo" />
        </div>
        <span>Built by <a href={twitterLink} target={'_blank'} rel="noopener noreferrer">{twitterHandle}</a></span>
      </div>
    </div>
  )
}

export default App
