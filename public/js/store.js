export const store = {
  isFirst: true,
  currentBudget: 0,
  dayId: 1,
  dateList: [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
    },
  ],
  detailList: {},
}

export function updateStorage() {
  localStorage.setItem('store', JSON.stringify(store));
}

// export function initStorage() {
//   const storage = localStorage.getItem('store');

//   if (!storage) updateStorage();

//   const { dateList, detailList, dayId, currentBudget, isFirst } = JSON.parse(storage);

//   store.dayId = dayId;
//   store.isFirst = isFirst;
//   store.dateList = dateList;
//   store.detailList = detailList;
//   store.currentBudget = currentBudget;
// }

// export function addHistory(newHistory) {
//   try {

//     store.currentBudget = null;
//     store.detailList = null;
//     updateStorage();
//     return true;

//   } catch (error) {

//     alert(error);
//     return false;
    
//   }
// }

// export function delHistory(dateId, itemId) {
//   try {

//     store.detailList[dateId] = null;
//     updateStorage();
//     return true;

//   } catch (error) {

//     alert(error);
//     return false;

//   }
// }