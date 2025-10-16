import { NextPage } from "next";
import React from "react";
import { useQuery } from "@apollo/client";
import LinkItemsQuery from "../../graphqlOperations/item";

type LinkItem = {
  id: string;
  title: string;
  link: string;
};

type Props = {};

const DocsPage: NextPage<Props> = ({}) => {
  const { data } = useQuery<{ linkItems: LinkItem[] }>(
    LinkItemsQuery.Queries.getLinkItems
  );
  return (
    <main className="relative min-h-screen home flex items-center justify-center">
      <div className="max-w-2xl py-10 mx-auto px-4">
        {
          <ul className="space-y-4 text-white text-xl">
            {data &&
              data?.linkItems?.map((item: LinkItem) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
          </ul>
        }
      </div>
    </main>
  );
};

export default DocsPage;
