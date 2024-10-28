
import './App.css'
import Header from './components/header/header'
import Banner from './components/Banner/Banner';
import SwitchButton from './components/switchButton/SwitchButton'
import Cards from './components/Cards/Cards'
import Subcribe from './components/Subscribe/Subcribe'
import Footer from './components/Footer/Footer'
import Players from './components/Players/Players'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [money, setMoney] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [state, setSelectedState] = useState(true)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  const handleSetMoney = (value) => {
    setMoney(money + value);
    toast.success("Free Credit has been added successfully")
  }

  const handleSelectedPlayer = (price, player, playerId) => {
    // .some ar forloop same as in array er opor iterate kore check kore diyece
    const isPlayerSelected = selectedPlayer.some(selectedPlayer => selectedPlayer.playerId === playerId);
      if (isPlayerSelected) {
        toast.warning("Player already selected. Please select the player again")
        const remaining = selectedPlayer.filter((Player) => Player.playerId !== playerId);
        console.log(remaining)
        setSelectedPlayer(remaining); 
    }
    else{
      if (money >= price && selectedPlayer.length <= 5) {
        const newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
      }
      else if (selectedPlayer.length > 5) {
        toast.error("You can not add more than six players")
      }
      else {
        toast.warning("You don't have enough money");
      }
    }
  }

  const handleSelectedState = () => {
    setSelectedState(!state)
  }
  const Deleteplayer = (id) =>{
    const remaining = selectedPlayer.filter(player => player.playerId !== id);
    toast.success("Player removed successfully")
    setSelectedPlayer(remaining);
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      <Header money={money}></Header>
      <Banner handleSetMoney={handleSetMoney}></Banner>
      <SwitchButton selectedPlayer={selectedPlayer} handleSelectedState={handleSelectedState}></SwitchButton>
      {state ? <Cards players={players} handleSelectedPlayer={handleSelectedPlayer} ></Cards> : <Players selectedPlayer={selectedPlayer} Deleteplayer={Deleteplayer}></Players>}
      <Subcribe></Subcribe>
      <Footer></Footer>
    </>
  )
}

export default App
