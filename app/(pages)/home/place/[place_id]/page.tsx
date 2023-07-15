const example_data = {
  status: 200,
  data: {
    place_name: "Google Workplace 6",
    address: "48 Pirrama Rd, Pyrmont NSW 2009, Australia",
    phone: "(02) 9374 4000",
    website: "http://google.com/",
    business_status: "OPERATIONAL",
    open_now: false,
    hours: [
      "Monday: 8:30 AM – 5:30 PM",
      "Tuesday: 8:30 AM – 5:30 PM",
      "Wednesday: 8:30 AM – 5:30 PM",
      "Thursday: 8:30 AM – 5:00 PM",
      "Friday: 8:30 AM – 5:00 PM",
      "Saturday: Closed",
      "Sunday: Closed",
    ],
    rating: 4,
    rating_total: 969,
    photo_references: [
      "Aaw_FcIyv7jJsO8Fj7fI8CFTR4PP3-d_tp3rZbeP3c8CkdM9zoj7DpqRLTnYBer7ayhH4m_hoSmR5Uelfzjjo0djHGqLlEScAC9Wn9DRpf75pJUmTLLwxi8nC2pGWBTqe9IyiDSOM8OZuGR7koGmnYDHBj9RMo9tF9Qu8W6Acf2mlUO5HrF2",
      "Aaw_FcJa44mFGKK6e9rSnWvVoclNTaCY9prk5pInWFNHqVNlUaNKIF7CbnS58pekLjvzGLBJYzvJrvxegLKo4MABXNQjko-UJzHNHcfoA05fB1Zw-2j-WZHeSaMiqKgBXXPv7YW8-gCR5Oi56_s-6U5pSayKo7qIGzArTNgU77x4DcQdssts",
      "Aaw_FcL-ofUl67V31I7Sf9VQiVRpJKyGT3aazt-DMHya_LnTM8eqEssszDPhOXx5iPRwcZk1Kf5iqmX2JmzGgehJfivIcarWQUMfkzNYIuPb1pQ9f1jQOl6_qdJoy6OLfuz_5FlARjZTMLuK4I8D_OPUO97ke0h35Uw6endWw6zKnxKsb3Vh",
      "Aaw_FcLlqFQy05IGU-4kvbiP8W3lpALwUIM2fm-gk9mIMta6ozcVJz3NycvoWmu0e5GSBW11aSnKYZbvMJoD3tBnDQjLEA1u_JqxzJVJHn-9c7Ue_TQheVluxAor8FL8LeBiCHxvbNB08Row8hFqoyLgh6MwSxvmoW5SdlAqbmWnKXlAtAkA",
      "Aaw_FcItsnudp55iAaLVzouLafsHKNdnPZaquSQs2z2pFtZogMltfmCANF27m6oVvCXlsVAhynwYp8FBloW-TGx8MM-uMc1uWAv-pDsgsg3X4o76iaqo8_UDph2kLlCuMdVzK_5ZrdSrVjK_qecLMDnxhbga0tIsOrDyKeN76-eSRlGWlZax",
      "Aaw_FcKJm0i2mWEKZHBYxImNlXiSNRs53Rc6vM6Ja838WXvzkTKOLbZquVEBI3ZEEvFufeFZcw9LhaZsnGZzM118PaFX40qnD-cwDPWLuHnBlwXPT4ayh6Bnw6cnS-HFULOI9njI2s8NfpcXxwnP8ZQqIKdDOrhcxRMy4xxRaKaCeNmMQHCL",
      "Aaw_FcLmMmFdpVwfHHneUPoV3K8kdiAq2MAD2THiweUMV44l9EaTgp_TS3QeCcL_Sz3VNAI_mZA6agZVHkKVBoXfh9STjA9qKyleyA_5KVpYCah5C6S-fMuAtB36-Esmjm_fhe586P8ZsvX1VT6ko_3_HQOJxHhdIGv6VPdwStxM2DaMk0GB",
      "Aaw_FcIXIIRVcSrLbccUQ-YmaehiS09-puKqwwseB_KLRHd9YLDnfKI6zFxffqf7MXEQZV-dWz4H9Q9KTBTZecPE674lTE_oToRCIHjCG0WQwEkCTrLEQL_349cA7X70VW5c-gjoK-yHJjvxOu6P6rWRuuT94C4N1MUDIe1I2KSQ_vLyoqeL",
      "Aaw_FcJrT1XSf4DipQmFPdBTgQo8YdsITcWSE7rVdiylH5LHwyAauuronT_Xe6badgvKrG0HX-73B8494UBARi_x_nek9QOsyFgiay4Gp4yE97XSPs9sbwyjw6Es6Dmbq9L3XPn0DaWk-lNTCtHND9BbHuVwnFm2oj0k1uZqq2HbUsBjidod",
      "Aaw_FcLYjlHaFQ-YOey5_J3zNyqA7hHeDXBnUBdbSMUNu3Ejl7tUM7HWReM0Vu7hjTG9ttr7pTZsQiR6CtdLv952XzG3Y4VQYb0V7n0zai5lViqDJslQ3d3hb6xkDRgSPvLZDzaNGKZFGvmoa5v1f25oAls32wsEvFrVGkg72uJaCcBX-TGh",
    ],
    reviews: [
      {
        author_name: "Finn Johnson ❶",
        rating: 1,
        relative_time_description: "in the last week",
        text: "So sick and tired of Google suspending my account and website's products for allegedly 'violating a policy of misrepresentation'. There is no misrepresentation or misleading customers in my business whatsoever. Their claims are completely false, and they can never provide specific evidence to substantiate their claims. Nor can they tell me what the root cause of the problem is. The customer service team is outsourced to third-world countries in India and Asia to save money. You never speak with anybody in Australia. The Australian Google team does absolutely nothing to help small business owners like myself get their website seen and get their products approved and listed on Google Merchant Centre. Google just take the advertisers money and then if your business is doing well online for free they will boycott you. Extremely unprofessional and disappointing that Google is actively interfering with my ecommerce site's performance.",
        profile_url:
          "https://lh3.googleusercontent.com/a-/AD_cMMSsu4XFekVK5WAfWYy0jwuGvWBGMVCEWcu2Xya38zwTnUI=s128-c0x00000000-cc-rp-mo",
      },
      {
        author_name: "Federico Diaz",
        rating: 1,
        relative_time_description: "2 months ago",
        text: 'Worst place environment i have ever worked for. I mean in my area everyone (mostly) all were nice but we were not allowed to talk, nor sit nor used facilities that others could. What Im trying to say is is a hierarchy pyramid were classes are separated. Ex, the people of the kitchen are treated somewhat rude. There is a general discrimination that is tolerated. Ill say is celebrated as a sort of cancel culture. Cleaners also are also part of the lower casts. I understand like a society in the middle ages where u couldn\'t mix u might get contagious of the lower classes deseases. Still this is 2023. I guess they use to be common areas to everyone to sit but since recently that is now forbidden. To many commoners eating with the high borns. Absolutely understandable.  Besides that little intimidating and harassing middle ages behaviour of positive reinforcement of bullying factor I would say that the place "looks" lovely',
        profile_url:
          "https://lh3.googleusercontent.com/a-/AD_cMMSfTHKwJ93pWiKmOhEBgfPmBcZkT_8ZxKmPJzcwIq_41Uo=s128-c0x00000000-cc-rp-mo",
      },
      {
        author_name: "Sydney Darts",
        rating: 1,
        relative_time_description: "5 months ago",
        text: "Absolutely disgusted with Google Ads. They signed me up to automatic billing WITHOUT CONSENT! Then charge me to advertise for events that have long since finished. There is no phone support available as they say the office hours are 9-5 ..EVEN when you call at 10am! And you can't remove your credit card without adding a different one so they can skim you more. UTTER DISGRACE. AVOID AT ALL COSTS. Even facebook ads are more trustworthy (and thats saying something!)",
        profile_url:
          "https://lh3.googleusercontent.com/a-/AD_cMMTSY_gfrFTg39qpRjqIRJVJ7zQOKYrdeuciM9UvknFotQ=s128-c0x00000000-cc-rp-mo",
      },
      {
        author_name: "Beep Beep Toot",
        rating: 1,
        relative_time_description: "4 months ago",
        text: 'Google has allowed another business to hijack my google business listing "Cairns Airport Transfers" and display our competitors website instead... Every time we claim our business profile and change the website to ours, google suspends us, over and over again.  This is the most stressful experience as google send us from one department to the next, its like no one really know what there doing',
        profile_url:
          "https://lh3.googleusercontent.com/a-/AD_cMMQR6cX8l3r_6z-WQ3gtz-GdM0TcZpNsERLLjlB0e7Ak6cY=s128-c0x00000000-cc-rp-mo",
      },
      {
        author_name: "Luca Orlandi",
        rating: 1,
        relative_time_description: "3 months ago",
        text: "The customer service is non-existent; I am having troubles since a week and no one to talk to. All you can do is press a button and hoping for an answer. Welcome to 2023 work ethic!",
        profile_url:
          "https://lh3.googleusercontent.com/a/AAcHTtc1TjkGc7vS8ll0BkafrYqzSzqduVTb_boe6E8yKTlc=s128-c0x00000000-cc-rp-mo",
      },
    ],
  },
};

import SlideShow from "@/app/components/placeComponents/photoSlideshow";
const Page = async ({ params }: { params: { place_id: string } }) => {
  const data = example_data.data;
  return (
    <section className="mt-8" id="main-page">
      <NameAndRating
        name={data.place_name}
        rating={data.rating}
        amount={data.rating_total}
      />
      <SlideShow photo_references={data.photo_references} />
      <BusinessInfo
        address={data.address}
        phone={data.phone}
        website={data.website}
        business_status={data.business_status}
        open_now={data.open_now}
        hours={data.hours}
      />
      <Weather
        current={weather_data.current}
        forecast={weather_data.forecast.forecastday}
      />
    </section>
  );
};

const fetchData = async (place_id: string) => {
  const url = `http://localhost:3000/api/place?place_id=${place_id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }

  return await res.json();
};

import PlaceRating from "@/app/components/placeRating";
const NameAndRating = ({
  name,
  rating,
  amount,
}: {
  name: string;
  rating: number;
  amount: number;
}) => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">{name}</h1>
      <PlaceRating rating={rating} amount={amount} />
    </section>
  );
};

import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { IoBusinessOutline } from "react-icons/io5";
import { BsDoorClosed } from "react-icons/bs";
import HeaderUnderbar from "@/app/components/headerUnderbar";
const BusinessInfo = ({
  address,
  phone,
  website,
  business_status,
  open_now,
  hours,
}: {
  address: string;
  phone: string;
  website: string;
  business_status: string;
  open_now: boolean;
  hours: string[];
}) => {
  const processed_hours: string[] = hours.map((hour: string) => {
    return hour.split(" ").slice(1).join(" ");
  });
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16">
      <h1 className="text-4xl font-bold">Business Info</h1>
      <HeaderUnderbar />
      <div className="grid grid-cols-5 w-full mt-8">
        <section className="col-start-1 col-end-4">
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 flex flex-col justify-center items-center">
              <BiMap className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {address}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <AiOutlinePhone className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">{phone}</h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <TfiWorld className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {website}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <IoBusinessOutline className="w-10 h-auto text-sky-500" />
            </div>
            <h1
              className={`text-2xl col-start-3 col-end-9 mr-auto ${
                business_status === "OPERATIONAL"
                  ? "text-green-500"
                  : business_status === "CLOSED_TEMPORARILY"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {business_status.replace("_", " ")}
            </h1>
          </div>
          <div className="flex items-center justify-center my-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <BsDoorClosed className="w-10 h-auto text-sky-500" />
            </div>
            <h1
              className={`text-2xl col-start-3 col-end-9 mr-auto ${
                open_now ? "text-green-500" : "text-red-500"
              }`}
            >
              {open_now ? "OPEN NOW" : "CLOSED"}
            </h1>
          </div>
        </section>
        <section className="col-start-4 col-end-6 grid grid-rows-7">
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">MON:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[0]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">TUE:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[1]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">WED:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[2]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">THU:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[3]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">FRI:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[4]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">SAT:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[5]}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-1 col-end-3">SUN:</h1>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {processed_hours[6]}
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
};

const weather_data = {
  location: {
    name: "Great Neck",
    region: "New York",
    country: "United States of America",
    lat: 40.76,
    lon: -73.82,
    tz_id: "America/New_York",
    localtime_epoch: 1688929184,
    localtime: "2023-07-09 14:59",
  },
  current: {
    last_updated_epoch: 1688928300,
    last_updated: "2023-07-09 14:45",
    temp_c: 27.8,
    temp_f: 82.0,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 12.5,
    wind_kph: 20.2,
    precip_mm: 0.0,
    precip_in: 0.0,
    cloud: 75,
    uv: 5.0,
  },
  forecast: {
    forecastday: [
      {
        date: "2023-07-09",
        date_epoch: 1688860800,
        day: {
          maxtemp_c: 28.5,
          maxtemp_f: 83.3,
          mintemp_c: 22.6,
          mintemp_f: 72.7,
          avgtemp_c: 25.1,
          avgtemp_f: 77.1,
          totalsnow_cm: 0.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
        },
        astro: {},
        hour: [
          {
            time_epoch: 1688875200,
            time: "2023-07-09 00:00",
            temp_c: 22.8,
            temp_f: 73.0,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688878800,
            time: "2023-07-09 01:00",
            temp_c: 22.6,
            temp_f: 72.7,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688882400,
            time: "2023-07-09 02:00",
            temp_c: 22.6,
            temp_f: 72.7,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688886000,
            time: "2023-07-09 03:00",
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688889600,
            time: "2023-07-09 04:00",
            temp_c: 22.8,
            temp_f: 73.0,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688893200,
            time: "2023-07-09 05:00",
            temp_c: 23.1,
            temp_f: 73.6,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688896800,
            time: "2023-07-09 06:00",
            temp_c: 23.3,
            temp_f: 73.9,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688900400,
            time: "2023-07-09 07:00",
            temp_c: 23.5,
            temp_f: 74.3,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688904000,
            time: "2023-07-09 08:00",
            temp_c: 23.8,
            temp_f: 74.8,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688907600,
            time: "2023-07-09 09:00",
            temp_c: 24.0,
            temp_f: 75.2,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688911200,
            time: "2023-07-09 10:00",
            temp_c: 24.4,
            temp_f: 75.9,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688914800,
            time: "2023-07-09 11:00",
            temp_c: 24.6,
            temp_f: 76.3,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688918400,
            time: "2023-07-09 12:00",
            temp_c: 24.7,
            temp_f: 76.5,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688922000,
            time: "2023-07-09 13:00",
            temp_c: 24.7,
            temp_f: 76.5,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688925600,
            time: "2023-07-09 14:00",
            temp_c: 24.6,
            temp_f: 76.3,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688929200,
            time: "2023-07-09 15:00",
            temp_c: 25.2,
            temp_f: 77.4,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688932800,
            time: "2023-07-09 16:00",
            temp_c: 24.2,
            temp_f: 75.6,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688936400,
            time: "2023-07-09 17:00",
            temp_c: 24.7,
            temp_f: 76.5,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688940000,
            time: "2023-07-09 18:00",
            temp_c: 24.3,
            temp_f: 75.7,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688943600,
            time: "2023-07-09 19:00",
            temp_c: 24.3,
            temp_f: 75.7,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688947200,
            time: "2023-07-09 20:00",
            temp_c: 23.2,
            temp_f: 73.8,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688950800,
            time: "2023-07-09 21:00",
            temp_c: 23.7,
            temp_f: 74.7,
            is_day: 0,
            condition: {
              text: "Mist",
              icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
              code: 1030,
            },
          },
          {
            time_epoch: 1688954400,
            time: "2023-07-09 22:00",
            temp_c: 23.5,
            temp_f: 74.3,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688958000,
            time: "2023-07-09 23:00",
            temp_c: 23.6,
            temp_f: 74.5,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
        ],
      },
      {
        date: "2023-07-10",
        date_epoch: 1688947200,
        day: {
          maxtemp_c: 30.2,
          maxtemp_f: 86.4,
          mintemp_c: 21.1,
          mintemp_f: 70.0,
          avgtemp_c: 25.2,
          avgtemp_f: 77.3,
          totalsnow_cm: 0.0,
          condition: {
            text: "Heavy rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/308.png",
            code: 1195,
          },
        },
        astro: {},
        hour: [
          {
            time_epoch: 1688961600,
            time: "2023-07-10 00:00",
            temp_c: 23.3,
            temp_f: 73.9,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688965200,
            time: "2023-07-10 01:00",
            temp_c: 23.4,
            temp_f: 74.1,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688968800,
            time: "2023-07-10 02:00",
            temp_c: 23.5,
            temp_f: 74.3,
            is_day: 0,
            condition: {
              text: "Moderate or heavy rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/night/356.png",
              code: 1243,
            },
          },
          {
            time_epoch: 1688972400,
            time: "2023-07-10 03:00",
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 0,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1688976000,
            time: "2023-07-10 04:00",
            temp_c: 22.6,
            temp_f: 72.7,
            is_day: 0,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1688979600,
            time: "2023-07-10 05:00",
            temp_c: 23.0,
            temp_f: 73.4,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1688983200,
            time: "2023-07-10 06:00",
            temp_c: 22.3,
            temp_f: 72.1,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
          },
          {
            time_epoch: 1688986800,
            time: "2023-07-10 07:00",
            temp_c: 22.6,
            temp_f: 72.7,
            is_day: 1,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1688990400,
            time: "2023-07-10 08:00",
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 1,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
              code: 1006,
            },
          },
          {
            time_epoch: 1688994000,
            time: "2023-07-10 09:00",
            temp_c: 23.8,
            temp_f: 74.8,
            is_day: 1,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1688997600,
            time: "2023-07-10 10:00",
            temp_c: 24.9,
            temp_f: 76.8,
            is_day: 1,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1689001200,
            time: "2023-07-10 11:00",
            temp_c: 29.7,
            temp_f: 85.5,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689004800,
            time: "2023-07-10 12:00",
            temp_c: 26.5,
            temp_f: 79.7,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
          },
          {
            time_epoch: 1689008400,
            time: "2023-07-10 13:00",
            temp_c: 25.9,
            temp_f: 78.6,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
          },
          {
            time_epoch: 1689012000,
            time: "2023-07-10 14:00",
            temp_c: 29.2,
            temp_f: 84.6,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1689015600,
            time: "2023-07-10 15:00",
            temp_c: 25.4,
            temp_f: 77.7,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
          },
          {
            time_epoch: 1689019200,
            time: "2023-07-10 16:00",
            temp_c: 23.2,
            temp_f: 73.8,
            is_day: 1,
            condition: {
              text: "Light rain shower",
              icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
              code: 1240,
            },
          },
          {
            time_epoch: 1689022800,
            time: "2023-07-10 17:00",
            temp_c: 30.2,
            temp_f: 86.4,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689026400,
            time: "2023-07-10 18:00",
            temp_c: 24.4,
            temp_f: 75.9,
            is_day: 1,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1689030000,
            time: "2023-07-10 19:00",
            temp_c: 25.3,
            temp_f: 77.5,
            is_day: 1,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1689033600,
            time: "2023-07-10 20:00",
            temp_c: 29.0,
            temp_f: 84.2,
            is_day: 1,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1689037200,
            time: "2023-07-10 21:00",
            temp_c: 20.9,
            temp_f: 69.6,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689040800,
            time: "2023-07-10 22:00",
            temp_c: 20.0,
            temp_f: 68.0,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689044400,
            time: "2023-07-10 23:00",
            temp_c: 26.3,
            temp_f: 79.3,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
        ],
      },
      {
        date: "2023-07-11",
        date_epoch: 1689033600,
        day: {
          maxtemp_c: 33.4,
          maxtemp_f: 92.1,
          mintemp_c: 18.8,
          mintemp_f: 65.8,
          avgtemp_c: 25.9,
          avgtemp_f: 78.6,
          totalsnow_cm: 0.0,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003,
          },
        },
        astro: {},
        hour: [
          {
            time_epoch: 1689048000,
            time: "2023-07-11 00:00",
            temp_c: 18.8,
            temp_f: 65.8,
            is_day: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689051600,
            time: "2023-07-11 01:00",
            temp_c: 18.1,
            temp_f: 64.6,
            is_day: 0,
            condition: {
              text: "Patchy rain possible",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
          },
          {
            time_epoch: 1689055200,
            time: "2023-07-11 02:00",
            temp_c: 24.3,
            temp_f: 75.7,
            is_day: 0,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689058800,
            time: "2023-07-11 03:00",
            temp_c: 19.1,
            temp_f: 66.4,
            is_day: 0,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
              code: 1006,
            },
          },
          {
            time_epoch: 1689062400,
            time: "2023-07-11 04:00",
            temp_c: 19.6,
            temp_f: 67.3,
            is_day: 0,
            condition: {
              text: "Overcast",
              icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
              code: 1009,
            },
          },
          {
            time_epoch: 1689066000,
            time: "2023-07-11 05:00",
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689069600,
            time: "2023-07-11 06:00",
            temp_c: 20.5,
            temp_f: 68.9,
            is_day: 1,
            condition: {
              text: "Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
              code: 1006,
            },
          },
          {
            time_epoch: 1689073200,
            time: "2023-07-11 07:00",
            temp_c: 20.7,
            temp_f: 69.3,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689076800,
            time: "2023-07-11 08:00",
            temp_c: 24.6,
            temp_f: 76.3,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689080400,
            time: "2023-07-11 09:00",
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689084000,
            time: "2023-07-11 10:00",
            temp_c: 26.0,
            temp_f: 78.8,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689087600,
            time: "2023-07-11 11:00",
            temp_c: 30.5,
            temp_f: 86.9,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689091200,
            time: "2023-07-11 12:00",
            temp_c: 30.7,
            temp_f: 87.3,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689094800,
            time: "2023-07-11 13:00",
            temp_c: 31.6,
            temp_f: 88.9,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689098400,
            time: "2023-07-11 14:00",
            temp_c: 33.2,
            temp_f: 91.8,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689102000,
            time: "2023-07-11 15:00",
            temp_c: 33.0,
            temp_f: 91.4,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689105600,
            time: "2023-07-11 16:00",
            temp_c: 31.6,
            temp_f: 88.9,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689109200,
            time: "2023-07-11 17:00",
            temp_c: 33.2,
            temp_f: 91.8,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689112800,
            time: "2023-07-11 18:00",
            temp_c: 31.4,
            temp_f: 88.5,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689116400,
            time: "2023-07-11 19:00",
            temp_c: 30.2,
            temp_f: 86.4,
            is_day: 1,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
          },
          {
            time_epoch: 1689120000,
            time: "2023-07-11 20:00",
            temp_c: 28.3,
            temp_f: 82.9,
            is_day: 1,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689123600,
            time: "2023-07-11 21:00",
            temp_c: 28.0,
            temp_f: 82.4,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689127200,
            time: "2023-07-11 22:00",
            temp_c: 27.3,
            temp_f: 81.1,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
          {
            time_epoch: 1689130800,
            time: "2023-07-11 23:00",
            temp_c: 24.4,
            temp_f: 75.9,
            is_day: 0,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
          },
        ],
      },
    ],
  },
};

const Weather = ({ current, forecast }: any) => {
  return (
    <section className="text-center mt-16 flex flex-col items-center">
      <div>
        <h1 className="text-4xl font-bold">Weather</h1>
        <HeaderUnderbar />
      </div>
      <CurrentWeather current={current} />
      <FutureWeather forecast={forecast} />
    </section>
  );
};

import Image from "next/image";
import ExchangingMeasurements from "@/app/components/placeComponents/DayForecast/exchangingMeasurements";
const CurrentWeather = ({ current }: any) => {
  const currentTime: string = current.last_updated.split(" ")[1];

  return (
    <section className="mt-8 bg-sky-300 w-[38rem] rounded-xl">
      <div className="text-3xl font-bold my-4">Now</div>
      <div>
        <h1 className="text-4xl font-bold w-min p-4 bg-white mx-auto rounded-xl">
          {currentTime}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl capitalize font-bold">
          {current.condition.text}
        </h1>
        <div className="relative h-16 w-16">
          <Image
            src={`/api/weather-icon-photo?url=${current.condition.icon}`}
            alt={current.condition.text}
            fill={true}
          />
        </div>
      </div>
      <div>
        <ExchangingMeasurements
          m1_val={current.temp_c}
          m2_val={current.temp_f}
          m1_text="C"
          m2_text="F"
          description="Temperature Now"
          isTemp={true}
        />
      </div>
      <div className="mt-2">
        <ExchangingMeasurements
          m1_val={current.wind_mph}
          m2_val={current.wind_kph}
          m1_text="MPH"
          m2_text="KPH"
          description="Wind Speed"
          isTemp={false}
        />
      </div>
      <div className="mt-2">
        <ExchangingMeasurements
          m1_val={current.precip_mm}
          m2_val={current.precip_in}
          m1_text="mm"
          m2_text="in"
          description="Precipitation Level"
          isTemp={false}
        />
      </div>
      <div className="text-2xl mt-2">
        <div className="text-2xl grid grid-cols-10 px-4">
          <div className="col-start-2 col-end-6 flex justify-center mr-auto">
            Cloud Coverage:
          </div>
          <div className="col-start-7 col-end-8">
            <strong>{current.cloud}%</strong>
          </div>
        </div>
      </div>
      <div className="text-2xl mt-2 mb-8">
        <div className="text-2xl grid grid-cols-10 px-4">
          <div className="col-start-2 col-end-6 flex justify-center mr-auto">
            UV Index:
          </div>
          <div className="col-start-7 col-end-8">
            <strong>{current.uv}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

import DayForecast from "@/app/components/placeComponents/DayForecast/dayForecast";
const FutureWeather = ({ forecast }: any) => {
  return (
    <section className="flex mt-8 w-full overflow-x-scroll p-4 pb-0">
      {forecast.map((day: any) => {
        return (
          <div key={day.date_epoch} className="mr-8 w-[30rem]">
            <DayForecast day={day} />
          </div>
        );
      })}
    </section>
  );
};

export default Page;
