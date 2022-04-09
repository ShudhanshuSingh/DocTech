import data from "../JSON_data/DrugRecord.json";
import React from "react";
import DrugRecord from "./DrugRecord";
import { Input } from "@supabase/ui";
import { Select } from "@supabase/ui";

function Drugs() {
  const [dataList, setDataList] = React.useState(data);
  const [filterData, setFilterData] = React.useState([]);
  const [input, setInput] = React.useState("");
  function handleChange(e) {
    // console.log(e.target.value)
  }
  const filter = (e) => {
    setInput(e.target.value);
    let filtered = dataList.filter((f) => {
      return f["Name of the Product"].toLowerCase().match(input.toLowerCase());
    });
    setFilterData(filtered);
  };
  return (
    <div className="flex items-center flex-col justify-between lg:justify-center lg:space-x-16 w-full md:table-auto sm:table-auto">
      <div className="mb-10 w-1/3 flex items-center lg:justify-center">
        <Input
          label="Search Drugs"
          className="w-full mr-2"
          placeholder="Enter Drug Name here"
          onChange={filter}
        />
        <Select
          label="Group Filter"
          className="flex-wrap w-1"
          onChange={handleChange}
        >
          <Select.Option>Analgestic</Select.Option>
          <Select.Option>
            Analgesic and antipyretic /Muscle relaxant
          </Select.Option>
          <Select.Option>Antiinfective</Select.Option>
          <Select.Option>Antidiabetic</Select.Option>
        </Select>
      </div>
      <div className="relative flex items-center flex-col justify-between lg:justify-center lg:space-x-16">
      {input === "" ? (
        <DrugRecord data={dataList} />
      ) : (
        <DrugRecord data={filterData} />
      )}</div>
    </div>
  );
}

export default Drugs;
