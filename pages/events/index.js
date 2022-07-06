import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../components/helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  const { data } = props;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={data} />
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  const data = await getAllEvents();

  return {
    props: {
      data,
    },
  };
}
