import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  //console.log(data);
  console.log("item cards ", data.itemCards);

  return (
    <div>
      {/* header  */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
          {/* <span>{data.itemCards[0].card.info.name}</span> */}
        </div>
        {/* accordian body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
