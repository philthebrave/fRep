import sound1 from './recover.m4a';
import sound2 from './getready.m4a';
import sound3 from './begin.m4a';


  const playSequentialAudio = (delay1, delay2) => {
    const audioFiles = [
    new Audio(sound1),
    new Audio(sound2),
    new Audio(sound3),
    ];
    
    const time1 = 1000 * (delay1 - delay2)
    const time2 = 1000 * delay2

    audioFiles[0].play();

    setTimeout(() => {
      audioFiles[1].play();
      setTimeout(() => {
        audioFiles[2].play();
      }, time2);
    }, time1);
    
    return 
    // (
        // <div>
        // <h1>Sequential Audio Player</h1>
        // <button onClick={() => playSequentialAudio(1000, 2000)}>
        //     Play Sequence (1s, 2s delays)
        // </button>
        // </div>
    // );

  };



export default playSequentialAudio;