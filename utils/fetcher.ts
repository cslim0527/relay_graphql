import type { Variables } from "relay-runtime";

const fetchGraphQL = async (query: string | null, variables: Variables) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
};

export default fetchGraphQL;
