
function goBack() {
    if (history.length >= 2) {
        history.back();
    } else {
        window.close()
    }
}
