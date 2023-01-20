import iconSvg from '../mainIcons/sprite.svg';

function Player() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <PlayerControls
                list={[
                  `${iconSvg}#icon-prev`,
                  `${iconSvg}#icon-play`,
                  `${iconSvg}#icon-next`,
                  `${iconSvg}#icon-repeat`,
                  `${iconSvg}#icon-shuffle`,
                ]}
              />
            </div>
            <div className="player__track-play track-play">
              <TrackPlay authorLink="Ты та..." albumLink="Баста" />
            </div>

            <div className="track-play__like-dis">
              <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg" alt="like">
                  <use xlinkHref={`${iconSvg}#icon-like`} />
                </svg>
              </div>
              <div className="track-play__dislike _btn-icon">
                <svg className="track-play__dislike-svg" alt="dislike">
                  <use xlinkHref={`${iconSvg}#icon-dislike`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <svg className="volume__svg" alt="volume">
                <use xlinkHref={`${iconSvg}#icon-volume`} />
              </svg>
            </div>
            <div className="volume__progress _btn">
              <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
function PlayerControls(props) {
  const content = [];
  const { list } = props;
  for (let index = 0; index < list.length; index++) {
    content.push(
      <div key={index.toString()} className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <use xlinkHref={list[index]} />
        </svg>
      </div>
    );
  }
  return content;
}
function TrackPlay(props) {
  return (
    <>
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref={`${iconSvg}#icon-note`} />
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          {props.authorLink}
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          {props.albumLink}
        </a>
      </div>
    </>
  );
}
