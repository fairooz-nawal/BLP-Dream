import PropTypes from 'prop-types';
const SwitchButton = ({handleSelectedState,selectedPlayer}) => {
    return (
        <div className="max-w-screen-xl mx-auto  grid grid-cols-3 text-center">
            <div className="text-left">
                <h1 className="text-lg">Available Player</h1>
            </div>
            <div className="">
                <button onClick={handleSelectedState} className="btn bg-yellow-300 text-gray-800">Available</button>
                <button onClick={handleSelectedState} className="btn">Selected({selectedPlayer.length})</button>
            </div>
        </div>
    );
};

SwitchButton.propTypes = {
    handleSelectedState: PropTypes.func.isRequired,
    selectedPlayer: PropTypes.array.isRequired,
};

export default SwitchButton;