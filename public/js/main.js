import { initCurrentAsset } from "./asset.js";
import { initHistoryList } from "./history.js";

const init = () => {
  initCurrentAsset();
  initHistoryList();
}

init();