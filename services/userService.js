const generateId = () => {
    const timestampMS = Date.now();
    const randomNumber = Math.floor(Math.random() * 15 + 1);

    return (timestampMS * randomNumber) % 100000000;
}

const resolvePhotoURL = (photo_url) => {
    if (photo_url) {
        return photo_url;
    }

    return null;

    // continue later
}

module.exports = {
    generateId,
    resolvePhotoURL
}