export default function GetMyLoginData() {
  return JSON.parse(localStorage.getItem('MySpotyfyLoginData'));
}

export function FindMyIdFav(arrUser) {
  const userID = GetMyLoginData()?.id;
  return !!arrUser.find((user) => user.id === userID);
}
