const initData = {
    currentIndex: 0,
    isPlaying: false,
    song : [
        {
            songId: 'AppleRingtone',
            title: "Apple Ringtone",
            artist: "Apple",
            image: "Apple",
            src: "/apple-ringtone.mp3",
            category: "trending"
        },
        {
            songId: "MiRingtone",
            title: "Mi Ringtone",
            artist: "Mi",
            image: "mi",
            src: "/mi-ringtone.mp3",
            category: "new"
        },
        {
            songId: "SamsungRingtone",
            title: "Samsung Ringtone",
            artist: "Samsung",
            image: "samsung",
            src: "/samsung-ringtone.mp3",
            category: "old"
        }
    ]
}

const songReducer = (state = initData, action) => {
    switch(action.type) {
        case "Prev_Song":
            return {
                ...state,
                currentIndex: (state.currentIndex<= 0) ? state.song.length - 1 : state.currentIndex - 1 
            }
        case "Next_Song":
            return {
                ...state,
                currentIndex: (state.currentIndex>=(state.song.length - 1)) ? 0 : state.currentIndex + 1 
            }
        case "Song_play":
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case "Current_song":
            return {
                ...state,
                currentIndex: state.song.findIndex(data => data.songId === action.payload.id)
            }
        default: return state;
    }
}
export default songReducer;