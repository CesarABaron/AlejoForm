import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "react-time-picker/dist/TimePicker.css";
import axios from "axios";
import "./App.css";

function App() {
  // const whatsapp = "https://api.whatsapp.com/send/";   por si vamos a colocar contactanos al wahtsapp
  const [input, setInput] = useState({
    name: "",
    tlf: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    time: "",
  });

  console.log(input);
  const [date, setDate] = useState(new Date("2023", "09", "23"));
  const [time, setTime] = useState("10:00");

  const timeValue = new Date("01/01/2023 09:00 AM");
  const minTime = new Date("01/01/2023 09:00 AM");
  const maxTime = new Date("01/01/2023 07:00 PM");

  const isWeekday = (date) => {
    const day = date;
    return day !== 6 && day !== 7;
  };

  const changeDate = (date, e) => {
    console.log(e);
    setDate(date);
    setInput({ ...input, date: e.target.ariaLabel });
  };

  const handleChange = (e) => {
    if (e.target.name === "time") {
      setInput({ ...input, [e.target.name]: e.target.prevValue });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:6000/ClientData`,
        input
      );

      if (response) {
        alert("Se enviaron tus datos de contacto");
      }
    } catch (error) {
      alert("Hubo un error ");
    }
  };

  return (
    <main className="border-2 border-[#3b50b2] rounded p-10">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-[40px] font-semibold leading-7 text-gray-900">
          You Home
        </h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              Tlf: (Optional)
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="tlf"
                id="tlf"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="street-address"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label
              for="city"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="state"
                id="state"
                autocomplete="address-level1"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-[20px] font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="zip"
                id="zip"
                autocomplete="postal-code"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <label
        for="pickadate"
        class="block text-[20px] font-medium leading-6 text-gray-900"
      >
        Date
      </label>
      <DatePicker
        name="date"
        minDate={new Date()}
        filterDate={(date) => {
          // Disable weekends (Saturday and Sunday)
          return date.getDay() !== 0;
        }}
        onChange={changeDate}
        selected={date}
        className="border-2 h-9 w-72"
        value={date}
      />
      <label
        for="pickatime"
        class="block text-[20px] font-medium leading-6 text-gray-900"
      >
        Time
      </label>
      <TimePickerComponent
        onChange={handleChange}
        name="time"
        value={timeValue}
        min={minTime}
        max={maxTime}
        placeholder="Select a time"
      />
      <button className="bg-[#3b50b2] rounded h-20 w-[100px] text-white text-[20px] hover:scale-105">
        Submit
      </button>
    </main>
  );
}
export default App;
