import React from 'react';
import DashboardFooter from './DashboardFooter';

const Camera = () => {
    function openCam() {
        let All_mediaDevices = navigator.mediaDevices;
        if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
            console.log("getUserMedia() not supported.");
            return;
        }
        All_mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(function(vidStream) {
            var video = document.getElementById('videoCam');
            if ("srcObject" in video) {
                video.srcObject = vidStream;
            } else {
                video.src = window.URL.createObjectURL(vidStream);
            }
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(function(e) {
            console.log(e.name + ": " + e.message);
        });
    }
    openCam()
    return (
        <div>
            {/* <button id="startBtn" onClick={openCam}>Open Webcam</button> */}
            <center>
                <video width="80%" id="videoCam" autoPlay playsInline></video>
                </center>
                <DashboardFooter/>
        </div>
    );
}

export default Camera;
