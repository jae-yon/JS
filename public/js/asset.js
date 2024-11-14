import { isNone, isShow } from "./util.js";
import { store } from "./store.js";

let currentAssetInput = document.querySelector(".current-asset-input");
let currentAssetValue = document.querySelector(".current-asset-value");
let currentAssetButton = document.querySelector(".current-asset-button");
let addItemButton = document.querySelector(".add-item-button");

export function initCurrentAsset() {  
  renderCurrentAsset();
  addCurrentAssetEventListener();
}

export function renderCurrentAsset() {
  // nullish coalescing operator
  currentAssetValue = store.currentBudget ?? "-";
  currentAssetInput.value = store.currentBudget;
}

function addCurrentAssetEventListener() {

  // currentAssetValue.addEventListener("click", function (event) {

  // });

  currentAssetButton.addEventListener("click", function (event) {
    isNone(event.target);
    isNone(currentAssetInput);
    isShow(currentAssetValue);
    isShow(addItemButton);

    // if (currentAssetInput.value) {
    //   store.currentBudget = Number(currentAssetInput.value);
    // } else {
    //   alert("Error");
    // }
  });
}

function isShow(val) {
  val.className = val.className.replace("hidden", "block");
}

function isNone(val) {
  val.className = val.className.replace("block", "hidden");
}


