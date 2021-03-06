import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useCheckin(fStore) {
  const ref = fStore().collection('checkins');

  const createCheckin  = checkin => ref.add(checkin);

  const readCheckins = () => ref.get();


  return {createCheckin, readCheckins}

}
export default useCheckin;
