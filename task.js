const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});