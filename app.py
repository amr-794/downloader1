from flask import Flask, request, jsonify, send_file
from pytube import YouTube
import os

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    data = request.get_json()
    video_url = data.get('url')

    if not video_url:
        return jsonify({"error": "URL is required"}), 400

    try:
        yt = YouTube(video_url)
        stream = yt.streams.get_highest_resolution()

        # تنزيل الفيديو
        output_path = stream.download()

        # إرسال الفيديو كملف للاسترجاع من قبل المستخدم
        return send_file(output_path, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        # تنظيف الملفات المؤقتة بعد الإرسال
        if os.path.exists(output_path):
            os.remove(output_path)

if __name__ == '__main__':
    app.run(debug=True)
