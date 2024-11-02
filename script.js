document.getElementById('download-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const videoUrl = document.getElementById('video-url').value;

    // عرض شريط التقدم
    document.getElementById('progress-container').style.display = 'block';
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // محاكاة عملية التنزيل
    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10; // زيادة التقدم
            progressBar.style.width = progress + '%';
            progressText.innerText = progress + '%';
        } else {
            clearInterval(interval);
            // هنا يمكنك وضع كود لتحميل الفيديو فعلياً
            // وفي هذا المثال سنقوم بتحميل فيديو افتراضي
            const downloadedVideoSrc = 'path_to_your_video.mp4'; // استبدل بمسار الفيديو الفعلي
            const videoElement = document.getElementById('downloaded-video');
            videoElement.src = downloadedVideoSrc;
            videoElement.style.display = 'block';
            document.getElementById('video-container').style.display = 'block';
        }
    }, 500); // مدة كل زيادة في النسبة
});
