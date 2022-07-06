import { getFeaturedEvents } from "../components/helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.data} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const data = await getFeaturedEvents();
  return {
    props: {
      data,
    },
  };
}
