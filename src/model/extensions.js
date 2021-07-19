class Extensions {
  constructor(
    extensionName,
    size,
    version,
    icon,
    description,
    permissions,
    siteAccess, // onAllSites, onCLick, OnSpecificSites
    allowInPrivate,
    allowAccessToFileURLs,
    extensionLocation = "default",
    extensionStoreURL,
    extensionStoreName,
    extensionID,
    category,
    status = "enabled",
    extensionOptionsURL,
    shortcutKey
  ) {
    // correct default values to the end
    this.id = "gaefjdbvl1280"; // TODO:  UUID.randomUUID().toString; //add UUID here
    this.extensionName = extensionName;
    this.size = size;
    this.version = version;
    this.icon = icon;
    this.description = description;
    this.permissions = permissions;
    this.siteAccess = siteAccess;
    this.allowInPrivate = allowInPrivate;
    this.allowAccessToFileURLs = allowAccessToFileURLs;
    this.extensionLocation = extensionLocation;
    this.extensionStoreURL = extensionStoreURL;
    this.extensionStoreName = extensionStoreName;
    this.extensionID = extensionID;
    this.category = category;
    this.status = status;
    this.extensionOptionsURL = extensionOptionsURL;
    this.shortcutKey = shortcutKey;
  }
  getCurrentExtensiontatus() {
    // TODO: get data from electon. disabled or enabled.
  }
  addExtensionToJSON() {
    // send data and event to electron to add to exsisting JSON
  }
  setExtensionCategory() {
    // when user drag some extension to other place
  }
  createExtensionCategory() {
    // create a category or folder
  }
  deleteExtensionCategory() {
    // delete the category from the JSON.
  }
  getExtensionDetails(id) {
    // get all values from class and return them.
  }
  getAllExtension() {
    // return all data till today from Extension default folder.
    // may performance hit so do pagination
  }
  searchExtension(searchTerm) {
    // search searchTerm from getAllExtension.
  }
  deleteExetnsion(id) {
    // Remove | Delete
    // delete/remove extension file event to electron
  }
  enableExtension(id) {
    // send enable Extension to electron
  }
  disableExtension(id) {
    // send disable Extension to electron
  }
}

// Other paramters for extension Manager
// - Developer Mode
// - Allow extension from other Stores Boolean Switch.
// - Keyboard Shortcuts Manager.
