import React from 'react'
import '../Plans/Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import { plansData } from '../../data/plansData'

export default function Plans() {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>

            <div className='programs-header' style={{ gap: 'rem' }}>
                <span className='stroke-text'>READY TO START
                </span>
                <span>YOUR JOURNEY
                </span>
                <span className='stroke-text'>NOW WITHUS
                </span>
            </div>

            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, i) => {
                    return <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => {
                                return <div className='feature' key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            })}
                        </div>

                        <div><span>See more benefits ->
                        </span></div>
                        <button className='btn'>join now</button>

                    </div>
                })}
            </div>

        </div>
    )
}
