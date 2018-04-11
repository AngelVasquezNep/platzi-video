import React from 'react'
import './spineer.css'

function Spineer (props) {
  if(!props.loading) return null

  return (
    <div className="Spineer">
      
      <div className="Paw">
      
      <svg width="55px" height="55px" viewBox="0 0 551.062 551.062" fill="#72f7de">
        <path d="M465.19,453.459c14.749,67.688-58.752,82.375-91.127,73.562s-98.41-10.281-98.41-10.281s-66.218,1.469-98.593,10.281
		c-32.375,8.874-105.937-5.875-91.249-73.562s79.438-64.75,97.186-155.999c17.687-91.249,92.718-85.374,92.718-85.374
		s74.847-5.875,92.535,85.374C385.875,388.709,450.502,385.771,465.19,453.459z M343.586,206.15
		c39.841,11.505,83.844-19.951,98.349-70.258c14.504-50.245-5.998-100.307-45.839-111.812
		c-39.842-11.506-83.844,19.951-98.349,70.258C283.243,144.583,303.745,194.645,343.586,206.15z M508.703,187.852
		c-38.372-15.668-85.496,10.894-105.264,59.363c-19.768,48.471-4.712,100.43,33.66,116.035
		c38.372,15.606,85.496-10.894,105.264-59.364C562.131,255.416,547.076,203.519,508.703,187.852z M207.416,206.15
		c39.841-11.506,60.343-61.567,45.839-111.812s-58.568-81.702-98.349-70.196c-39.78,11.505-60.343,61.566-45.839,111.812
		C123.572,186.199,167.575,217.655,207.416,206.15z M113.963,363.25c38.373-15.667,53.428-67.626,33.66-116.035
		s-66.892-75.031-105.264-59.363C3.987,203.519-11.068,255.478,8.7,303.886C28.467,352.356,75.591,378.917,113.963,363.25z"/>
        </svg>

      </div>

      {/* <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div> */}
    </div>
  )
}

export default Spineer