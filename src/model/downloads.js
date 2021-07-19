class DownloadFile {
  constructor(
    fileName,
    fileLocation = "default",
    fileURL,
    fileType,
    category,
    extension,
    downloadStartTime,
    downloadEndTime,
    fileSize,
    downloadSpeed,
    expectedTimeOfCompletion,
    progress,
    fileStatus
  ) {
    // correct default values to the end
    this.id = "gaefjdbvl1280"; // TODO:  UUID.randomUUID().toString; //add UUID here
    this.fileName = fileName;
    this.fileLocation = fileLocation;
    this.fileURL = fileURL;
    this.fileType = fileType;
    this.category = category;
    this.extension = extension;
    this.downloadStartTime = downloadStartTime;
    this.downloadEndTime = downloadEndTime;
    this.fileSize = fileSize;
    this.downloadSpeed = downloadSpeed; // get download speed from electron
    this.expectedTimeOfCompletion = expectedTimeOfCompletion; // fileSize / currentDownloadSpeed in sec
    this.progress = progress; // get it from electron or calculate it every second
    this.fileStatus = fileStatus; // deleted | available | corrupt | virus
  }
  getCurrentDownloadStatus() {
    // TODO: get data from electon every second.
  }
  getDownloadFileDetails(id) {
    // take all values from class and return it
  }
  getAverageDownloadSpeed() {
    // avgTime = (fileSize / (downloadEndTime - downloadStartTime)) sec
  }
  addDownloadToJSON() {
    // send data and event to electron to add to exsisting JSON
  }
  getDownloadFileType() {
    // extract the extension from the filename
  }
  getAllDownloads() {
    // return all data till today from downloads default folder. Even the average time it took, bandwidth etc.
    // may performance hit so do pagination
  }
  searchDownload(searchTerm) {
    // search searchTerm from getAllDownloads.
  }
  deleteDownloadedFile(id) {
    // delete downloaded file event to electron
  }
  cancelDownload(id) {
    // send cancel download to electron
  }
  pauseDownload(id) {
    // send pause download to electron
  }
}

// Other this for Downloads Manger
// - download settings like default location path, etc, sort by date and type filters, filesize, searchbar
// getfile and play video open in browser.
// let categories = ["All", "PDFs", "Documents", "Apps", "Images", "Compressed Files", "Videos", "Audio", "Others"]
