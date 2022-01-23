// timer button
import { saveAs } from 'file-saver';

document.addEventListener('DOMContentLoaded', function() {
    /*
    CODE FOR TIMER:
    var checkTimerButton = document.getElementById('set-timer')
    checkTimerButton.addEventListener('click', function() {
    // null - don't need event
    // timed alert
        var time = document.getElementById('time-options')
        // get selected option
        var val = time.options[time.selectedIndex].value;
        var text = time.options[time.selectedIndex].text;
        time_int = text.replace(/\D/g,'');
        // hours 
        if (time_int < 3) {
            milliseconds = time_int * 3600000
        }
        // minuts 
        else {
            milliseconds = time_int * 60000
        }

        setInterval(alert("Hey! You've been working hard! Time to take a 2 minute break."), milliseconds);
        
    */
    var finishedEntryButton = document.getElementById('finishedEntry');
    finishedEntryButton.addEventListener('click', function() {
        var text = document.getElementById('journal');
 
        function saveTextAsFile()
        {
            var textToSave = document.getElementById("finishedEntry").value;
            var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
            var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
            var fileNameToSaveAs = document.getElementById("filename").value;
            
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            downloadLink.href = textToSaveAsURL;
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            
            downloadLink.click();
        }
            
        function destroyClickedElement(event)
        {
            document.body.removeChild(event.target);
        }           
        saveTextAsFile();
    }, false);

}, false);

