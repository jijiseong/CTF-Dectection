import { objectList } from "../detection/objectList.js"
export const upload = (req, res) =>{
    res.render("upload", {pageTitle:"upload", objectList:objectList})
}

export const upload_ok =  (req, res) =>{
     
    let detection_info = "error";

    const img_detect = new Promise((resolve, reject) => {
        const shell = require('shelljs');

        if( req.file === undefined){
            resolve(detection_info);
            return;
        }

        const {stdout, stderr, code} = shell.exec('python3 ./detection/detection.py ' + req.file.filename);
        detection_info = [stdout, stderr];
        resolve(detection_info);
    
    });


    if( req.file === undefined){
        res.render("upload_ok", {pageTitle:"Object Detection", detection_info:value})
    }

    img_detect.then((value) =>{
        res.render("upload_ok", {pageTitle:"Object Detection", imgName: req.file.filename, detection_info:value})
    });

    detection_info = "detection_info";
}
