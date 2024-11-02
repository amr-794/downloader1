document.getElementById('download-btn').addEventListener('click', function() {
    const url = document.getElementById('video-url').value;
    const output = document.getElementById('output');

    if (!url) {
        output.textContent = 'Please enter a valid URL.';
        output.style.color = 'red';
        return;
    }

    output.textContent = 'Preparing your download...';
    output.style.color = 'yellow';

    // Simulated processing with a timeout
    setTimeout(() => {
        output.innerHTML = `<a href="${url}" download class="download-link">Click here to start the download</a>`;
        output.style.color = 'green';
    }, 3000);
});
