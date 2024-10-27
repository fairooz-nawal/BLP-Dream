import Card from "../Card/Card";
import PropTypes from 'prop-types';
const Cards = ({players, handleSelectedPlayer}) => {
    return (
        <div className="max-w-screen-xl mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mb-[100px] ">
            {
                players.map((player,idx) => <Card key={idx} player={player} handleSelectedPlayer={handleSelectedPlayer}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleSelectedPlayer: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
};

export default Cards;