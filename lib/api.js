async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getAnnouncements() {
  const entry = await fetchGraphQL(
    `query {
        announcementCollection {
            items {
              title
              dateAndTime
              description
              slug
            }
        }
    }`
  );
  return entry?.data?.announcementCollection?.items;
}

export async function getSingleAnnouncement(slug) {
  const entry = await fetchGraphQL(
    `query {
            announcementCollection(where: {slug: "${slug}"}, limit: 1) {
                items {
                    title
                    dateAndTime
                    description
                    writeUp {
                        json
                        links {
                          assets {
                            block {
                              sys {
                                id
                              }
                              description
                              url
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
        }`
  );

  return entry?.data?.announcementCollection?.items;
}
