export const generateStudent = id => ({
  id: id,
  name: `new one ${id}`,
  gender: "female",
  knownFor: "being awesom",
  age: "90",
  cohort: {
    id: 10,
    name: "goteem"
  }
});
