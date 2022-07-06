export async function fetchAllData() {
  const fetchData = await fetch(
    "https://nextjs-page-pre-renderin-ae4a6-default-rtdb.firebaseio.com/events.json"
  );
  const parsedData = await fetchData.json();

  console.log("hello from API calling");

  const data = [];

  for (let key in parsedData) {
    data.push({
      id: key,
      ...parsedData[key],
    });
  }

  return data;
}

export async function getFeaturedEvents() {
  const data = await fetchAllData();
  return data.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  const data = await fetchAllData();
  return data;
}

export async function getEventById(id) {
  const data = await fetchAllData();
  return data.find((event) => event.id === id);
}
