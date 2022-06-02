import React from 'react'
import './Trend.css';

import { TrendData } from '../../Data/TrendData';
const Trend = () => {
  return (
    <div className='Trend'>
        <h3>Trends for you</h3>
        {TrendData.map((trend) => {
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                    </div>
            )
        })}
        Trend</div>
  )
}

export default Trend