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

import SlideShow from "@/app/components/photoSlideshow";
const Page = async ({ params }: { params: { place_id: string } }) => {
  const data = example_data.data;

  return (
    <section className="mt-8">
      <NameAndRating
        name={data.place_name}
        rating={data.rating}
        amount={data.rating_total}
      />
      <SlideShow photo_references={data.photo_references} />
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
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{name}</h1>
      <PlaceRating rating={rating} amount={amount} />
    </section>
  );
};

export default Page;
