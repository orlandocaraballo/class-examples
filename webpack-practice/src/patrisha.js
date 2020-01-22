const name = "patrisha";
const age = "35";
const gender = "female";

module.exports = {
  patrishaName: name,
  patrishaAge: age,
  patrishaGender: gender,
  patrishaInfo: () => {
    return `${name} - ${age} - ${gender}`;
  }
};
