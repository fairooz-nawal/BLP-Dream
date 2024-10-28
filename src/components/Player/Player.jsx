import PropTypes from 'prop-types';
const Player = ({player,Deleteplayer}) => {
    const {playerId, image, name, expertise } = player
    return (
        <div>
            <div role="alert" className="alert shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="grid grid-cols-2 w-1/3 gap-3">
                    <div className="">
                        <img className="rounded-lg w-full h-full" src={image} alt="" />
                    </div>
                    <div >
                        <h3 className="font-bold">{name}</h3>
                        <div className="text-xs">{expertise}</div>
                    </div>
                </div>

                <button onClick={()=> Deleteplayer(playerId)}  className="btn btn-sm">Delete</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    Deleteplayer: PropTypes.function,
  };

export default Player;