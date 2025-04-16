import React from 'react'
import './features.css'
import feature from './features.json'


const Features = () => {
  return (
    <section id='features' className='scroll-m-24'>
      <h3 class="pricing-heading text-xl text-center">Features</h3>
      <p class="pricing-subheading text-sm text-center">All Features of SomChat. No hidden feature.</p>
      <div class="feature-grid">
        {feature.map((card) => (
          <div class="feature">
            <img src={card.img} alt="Image 1" />
            <h3>{card.name}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features