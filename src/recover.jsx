import recover from './recover.m4a';

function PlayRecover() {
    const audio = new Audio(recover);
    audio.play()

    return (
    <audio controls src={recover} type="audio/mp4"/>
    );
}

export default PlayRecover;