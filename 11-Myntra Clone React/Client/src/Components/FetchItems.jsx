import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../Store/itemSlice";
import {
  markFetchDone,
  markFetchFinished,
  markFetchStarting,
} from "../Store/fetchSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchStarting());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchFinished());
        dispatch(addItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}

export default FetchItems;
