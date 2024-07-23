import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is the destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              place,
              onChange: (value) => {
                setPlace(value);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning to spend on your trip?
          </h2>
          <div>
            <Input placeholder={"Ex.4"} type="number" />
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((items, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
              >
                <h2 className="text-4xl">{items.icon}</h2>
                <h2 className="font-bold text-lg">{items.title}</h2>
                <h2 className="text-sm text-gray-500">{items.desc}</h2>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              Who do plan on travelling with on your next adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelsList.map((items, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
                >
                  <h2 className="text-4xl">{items.icon}</h2>
                  <h2 className="flex items-center font-bold text-lg">
                    {items.title}
                    <span className=" flex justify-center items-center ml-2  text-sm">
                      ({items.people})
                    </span>
                  </h2>
                  <h2 className="text-sm text-gray-500">{items.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
