import begin from './begin.m4a';

function PlayBegin() {
    const audio = new Audio(begin);
    audio.play()

    return (
    <audio controls src={begin} type="audio/mp4"/>
    );
}

export default PlayBegin;