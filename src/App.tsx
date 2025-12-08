import React, { useEffect } from 'react'
import './App.css'
import hamburgerImage from './assets/hamburger.png'

function App() {
  useEffect(() => {
    // Initialize particles.js with configuration
    if ((window as any).particlesJS) { // window is the browsers global window object
      (window as any).particlesJS('particles-js', { // this tells typescript to treat window as any, bypassing type checking (since particlesJS isnt a standard property on window)
        particles: {
          // Number of hamburger particles displayed on screen
          number: {
            value: 50
          },
          // Use hamburger.png image instead of default shapes
          shape: {
            type: 'image',
            image: {
              src: hamburgerImage,
              width: 100,
              height: 100
            }
          },
          // Size of each hamburger particle
          size: {
            value: 20,
            random: true  // Randomizes sizes for visual variety
          },
          // Lines connecting nearby particles
          line_linked: {
            enable: true,
            distance: 150,  // Maximum distance for lines to appear between particles
            color: '#000000',
            opacity: 0.4,
            width: 1
          },
          // Animation settings - this is what makes the hamburgers float/move
          move: {
            enable: true,
            speed: 2,  // Movement speed of particles
            direction: 'none',  // No specific direction - particles move randomly
            random: false,
            straight: false,
            out_mode: 'out',  // Particles can move outside canvas boundaries
            bounce: false  // Particles don't bounce off edges
          }
        },
        // Mouse interactivity settings - this makes the particles respond to mouse movement
        interactivity: {
          detect_on: 'canvas',  // Detect mouse interactions on the canvas
          events: {
            // When hovering over the canvas, particles react
            onhover: {
              enable: true,
              mode: 'repulse'  // Particles are pushed away from mouse cursor
            }
          },
          modes: {
            // Configuration for the repulse effect
            repulse: {
              distance: 100,  // How far particles are pushed away from cursor
              duration: 0.4   // How long the repulsion effect lasts
            }
          }
        }
      });
    }
  }, []);

  return (
    // Canvas container where particles.js will render the animated hamburgers
    <div id="particles-js"></div>
  )
}

export default App
