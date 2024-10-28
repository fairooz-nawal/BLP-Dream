import Player from "../Player/Player";
import PropTypes from 'prop-types';
const Selectedplayer = ({selectedPlayer,Deleteplayer}) => {
    
    return (
        <div className="max-w-screen-xl mx-auto" >
            {
                selectedPlayer.map((player, idx) => <Player key={idx} player={player} Deleteplayer={Deleteplayer}></Player>)
            }
        </div>
    );
};

Selectedplayer.propTypes = {
    selectedPlayer: PropTypes.array,
    Deleteplayer: PropTypes.function, 
  };

export default Selectedplayer;