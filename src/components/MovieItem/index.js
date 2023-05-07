import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
            className="close-btn"
          >
            <IoMdClose size="25" color="#231f20" className="close-icon" />
          </button>
          <ReactPlayer controls url={videoUrl} width="90%" />
        </>
      )}
    </Popup>
  )
}

export default MovieItem
