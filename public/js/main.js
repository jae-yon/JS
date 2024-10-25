import { initCurrentAsset } from "./components/asset.js";
import { initHistoryList } from "./components/history.js";
const init = () => {
  initHistoryList();
  initCurrentAsset();
}

init();