function processAsset(type) {
    const fileInput = document.getElementById('fileUpload');
    const urlInput = document.getElementById('textureUrl');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => applyToEngine(type, e.target.result);
        reader.readAsDataURL(fileInput.files[0]);
    } else if (urlInput.value.trim()) {
        applyToEngine(type, urlInput.value.trim());
    } else {
        alert("Please upload a file or enter a URL.");
    }
}

function applyToEngine(type, source) {
    if (typeof window.addItem !== 'function') {
        alert("3D Engine is still loading.");
        return;
    }

    const id = Math.floor(Math.random() * 999999);
    window.addItem({ id, type }, source, true);
}

function updateColor(part, hex) {
    if (typeof window.set3DColor === 'function') {
        window.set3DColor(part, hex);
    }
}
