const currentAssetInput = document.querySelector(".current-asset-input");
const currentAssetValue = document.querySelector(".current-asset-value");
const currentAssetButton = document.querySelector(".current-asset-button");

export function initCurrentAsset() {
  currentAssetValue.style.display = "none";
  currentAssetInput.style.display = "block";
  addCurrentAssetEventListener();
}

function addCurrentAssetEventListener() {
  currentAssetValue.addEventListener("click", function (event) {

  });

  currentAssetButton.addEventListener("click", function (event) {
    if (currentAssetInput.value) {
      currentAssetInput.style.display = "none";
      currentAssetValue.style.display = "block";
      currentAssetValue.textContent = Number(currentAssetInput.value);
    } else {
      alert('error');
    }
    
  });
}