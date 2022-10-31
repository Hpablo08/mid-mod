export const fetchAllReservations = async () => {
  return await fetch("http://localhost:3001/api/v1/reservations");
};

export const postNewReservation = (userData) => {
  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  return fetch("http://localhost:3001/api/v1/reservations", requestData)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not a 200 status");
      }
      alert("Information submitted");
      return response.json();
    })
    .catch((error) => {
      alert("Oops, something went wrong in the post. Try again later");
    });
};
