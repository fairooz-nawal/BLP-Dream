import PropTypes from 'prop-types';
import bg from '../../../assets/bg-shadow.png';
const Banner = ({handleSetMoney}) => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto relative text-center mb-10 bg-black">
                <img className="w-full h-full" src={bg} alt="" />
                <div className="w-3/4 mx-auto absolute top-1/4 left-0 right-0 text-center space-y-3 text-white">
                    <div className="w-1/4 mx-auto text-center"><img src="assets/banner-main.png" alt="" /></div>
                    <h1 className="text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-2xl">Beyond Boundaries Beyond Limits</p>
                    <div className="w-2/12 p-1 rounded-lg mx-auto border-2 border-yellow-200"><button onClick={()=>handleSetMoney(3000)} className="btn bg-yellow-300 text-gray-700">Claim Free Credit</button></div>
                </div>
            </div>
        </>
    );
};

Banner.propTypes = {
    handleSetMoney: PropTypes.func
  };
export default Banner;