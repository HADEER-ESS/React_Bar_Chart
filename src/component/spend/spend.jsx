import chartData from '../../ChartData/data';
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip } from 'recharts';

import './spend.css'
const Spend = () => {

  console.log(chartData)
  return (
    <div className='spend-wrapper'>
    <BarChart width={600} height={200} data={chartData}>
      <Bar dataKey="amount" fill='#ec755d'/>
      <CartesianGrid stroke=''/>
      <XAxis dataKey='day'/>
      <Tooltip cursor={false}/>
    </BarChart>
    
    <hr/>
    <div className='item-wrapper'>
      <div className='left-item'>
        <h5>Total this month</h5>
        <h2> $ 478.33</h2>
      </div>
      <div className='right-item'>
        <h4> + 2.4 %</h4>
        <h5>for last month</h5>
      </div>
    </div>
    </div>
  )
}

export default Spend