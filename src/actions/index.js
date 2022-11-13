export const nextSong = () => {
    return {
        type: "Next_Song",
    }
}
export const prevSong = () => {
    return {
        type: "Prev_Song",
    }
}
export const songPlay = () => {
    return {
        type: "Song_play"
    }
}
export const currentSong = (data) => {
    return {
        type: "Current_song",
        payload: data
    }
}