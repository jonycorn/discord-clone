import ChannelBar from "../components/ChannelBar";
import SideBar from "../components/SideBar";
import {Room} from './../types/rooms'


export default function App({ rooms }: {rooms:{data: Room[]}}) {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar rooms={rooms} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("/api/rooms");
  const data = await res.json();

  return {
    props: {
      rooms: data,
    },
  };
}
