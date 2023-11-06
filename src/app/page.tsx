import getForecast from "@/utils";

export default async function Home() {
  const res = await getForecast("Novi Sad");

  if (!res) return <>Something went wrong</>;

  return (
    <div>
      {/* // TODO For search maybe use COMMAND component from ShadCN */}
      <div className="flex flex-col">
        <h1 className="text-6xl text-center font-bold">{res.location.name}</h1>
        <h2>
          {res.location.region}, {res.location.country}
        </h2>
        <p>{res.location.lat}</p>
        <p>{res.location.lon}</p>
        <p>{res.location.localtime}</p>
        {/* // ! see what you can do with this localtime epoch */}
        <p>{res.location.localtime_epoch}</p>
        <p>{res.location.tz_id}</p>
      </div>

      <div>
        {/* // TODO CARD to put Name, country, time, maybe something else */}
        {/* // TODO pull this hour forecast and next 4 hours */}
        {/* // TODO maybe graficon for all hours or next 3 days */}

        {/* // TODO add zustand for remembering the response and selected day/hour */}
      </div>
    </div>
  );
}
