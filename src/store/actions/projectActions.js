export const creatProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call for database
    const firestore = getFirestore();
    firestore.collection("fruits").add({
      ...project,
    });
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
