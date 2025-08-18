const UseHeader = () => {
  const header = {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  };

  return header;
};

export default UseHeader;
