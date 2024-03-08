import {trpc} from "../utils/trpc.ts";
import {useEffect} from "react";

function TestCom() {
  const query = trpc.user.list.useQuery();
  useEffect(() => {
    console.log(query.data);
  }, [query.data]);
  return null
}

export default TestCom;