import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import fetchGraphQL from "./fetcher";

const fetchQuery: FetchFunction = (params, variables) => {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
};

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
