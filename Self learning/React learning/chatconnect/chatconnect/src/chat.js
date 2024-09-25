function createconnection(serverUrl, roomId) {
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

module.exports = {
    createconnection
};
