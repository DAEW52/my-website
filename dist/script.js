document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // รับข้อมูลจากฟอร์ม
    const socialName = document.getElementById('socialName').value;
    const tableNumber = document.getElementById('tableNumber').value;
    const caption = document.getElementById('caption').value;
    const imageFile = document.getElementById('image').files[0];

    // แสดงข้อมูลที่กรอก
    document.getElementById('socialPreview').textContent = `ชื่อโชลเชียล: ${socialName}`;
    document.getElementById('tablePreview').textContent = `เลขโต๊ะ: ${tableNumber}`;
    document.getElementById('captionPreview').textContent = `แค็ปชั่น: ${caption}`;

    // แสดงรูปภาพที่อัพโหลด
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('imagePreview').style.display = 'block';
        };
        reader.readAsDataURL(imageFile);
    }
});