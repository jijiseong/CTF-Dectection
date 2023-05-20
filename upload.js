import multer from "multer";


let upload_multer = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },

    filename: function (req, file, cb) {
        const filename = file.originalname.replace(/ /g, '_')
        cb(null, filename) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
})

upload_multer = multer({storage:storage})


export default upload_multer;
