// import React from 'react';
// import begin from './begin.m4a';
// import { useRef, useEffect } from 'react';

// const PlayBegin = () => {
    
//     const audio = new Audio(begin);

//     useEffect(() => {
//     audio.play(); // Play the sound when the component mounts
//     // return () => {
//     //   audio.pause();
//     //   audio.currentTime = 0; // Reset audio to the beginning
//     // };
//     }, []); // Empty dependency array ensures it runs only on mount and unmount

//   return (
//     <div>
//       <audio controls>
//         <source src={begin} type="audio/mp4" /> {/* Use audio/mp4 for M4A */}
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default PlayBegin;

// --------------------------------------------
import { useRef, useEffect } from 'react';
import begin from './begin.m4a';

function PlayBegin() {
    const audio = new Audio(begin);
    audio.play()
    // const audioRef = useRef(null);

    // useEffect(() => {
    // if (audioRef.current) {
    //     audioRef.current.play();
    // }
    // }, []); // Empty dependency array ensures it runs once on mount

    return (
    <audio controls src={begin} type="audio/mp4"/>
    );
}

export default PlayBegin;
// --------------------------------------------

// import React, { useRef } from 'react';
// import begin from './begin.m4a';

// function AudioPlayerComponent() {
//     const audioRef = useRef(null);

//     const playAudio = () => {
//     if (audioRef.current) {
//         audioRef.current.muted = false; // Unmute the audio
//         audioRef.current.play();       // Play the audio
//     }
//     };

//     return (
//     <div>
//         <audio ref={audioRef} src={begin} muted></audio>
//     </div>
//     );
// }

// export default AudioPlayerComponent;
// --------------------------------------------
