document.getElementById("toggleBtn").onclick = function() {
    var downloadQuality = document.getElementById("download-quality");
    if (downloadQuality.style.display === "none") {
        downloadQuality.style.display = "block";
    } else {
        downloadQuality.style.display = "none";
    }
  };