import getready from './getready.m4a';

function PlayGetReady() {
    const audio = new Audio(getready);
    audio.play()

    return (
    <audio controls src={getready} type="audio/mp4"/>
    );
}

export default PlayGetReady;