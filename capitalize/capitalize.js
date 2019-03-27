const capitalize = string => {
  return (
    string[0].toUpperCase() +
    string
      .split("")
      .splice(1)
      .join("")
      .toLowerCase()
  );
};

module.exports = capitalize;
