
import Balance from '../../component/balance/balance'
import Spend from '../../component/spend/spend'
import './home.css'
const Home = () => {
  return (
    <div className='home-wrapper'>
        <Balance/>
        <Spend/>
    </div>
  )
}

export default Home