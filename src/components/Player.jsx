import React, { useRef, useState, useEffect } from 'react'
// import Pause from '../icons/Pause.astro'
// import Play from '../icons/Play.astro'
import { MdPlayArrow, MdPause } from 'react-icons/md';

const Pause = () => (
  <svg>
    <path d="M7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
)

const Play = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607L10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
)

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current.src = `/music/1/01.mp3`
    }, [])

    const handleClick =  () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
            audioRef.current.volume = 0.3
        }

        setIsPlaying(!isPlaying)
    }

  return (
    <div className='flex flex-row justify-between w-full px-4 z-50'>
        <div>
            CurrentSong...
        </div>

        {/* <div className='grid place-content-center gap-4 flex-1'>
            <div className='flex justify-center'>
                <button 
                    className='bg-white rounded-full p-3 shadow-md hover:scale-105 active:scale-95 transition-transform' 
                    onClick={handleClick}
                    // aria-label={isPlaying ? "Pausa" : "Reproducir"}
                >
                    {isPlaying ? (
                        // Icono de Pausa: se usa font-bold para que las barras se vean firmes
                        <span className='text-black text-xl font-bold block leading-none'>❚❚</span>
                    ) : (
                        // Icono de Play: sin font-bold para mantener el triángulo perfecto, y un pequeño padding izquierdo para centrarlo
                        <span className='text-black text-xl block leading-none pl-0.5'>▶</span>
                    )}
                </button>
            </div>
        </div> */}

        <div className='grid place-content-center gap-4 flex-1'>
            <div className='flex justify-center'>
                <button
                    className='bg-white text-black rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95'
                    onClick={handleClick}
                    aria-label={isPlaying ? "Pausa" : "Reproducir"}
                    // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                    // onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                    {isPlaying ? (
                        <span className="text-sm font-bold tracking-tight select-none">❚❚</span>
                    ) : (
                        <span className="text-lg pl-0.5 select-none">▶</span>
                    )}
                </button>
            </div>
        </div>


        <div className=''>
            Volumen
        </div>

        <audio 
            ref={audioRef} 
            // NOSE SI SERIA  MEJOR  USAR CONTORLS PARAPONER LOS BOTONES  Y DEMAS
            // className="hidden"
            // preload="auto"
        />
    </div>
  )
}

export default Player