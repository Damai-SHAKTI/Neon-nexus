import { useState } from "react";
import dynamic from "next/dynamic";

import Input from "@/components/Input";
import ImageCarousel from "@/components/ImageCarousel";
import SelectInput from "@/components/SelectInput";

import { ALL_COLORS, ALL_COUNTRIES, PRICE } from "@/constants";
import { checkout } from "../checkout";
import { toastMessage } from "@/utils/toast";
import { Toaster } from "react-hot-toast";
import TextArea from "@/components/TextArea";
import Modal from "@/components/Modal";

const ReviewBox = dynamic(() => import("@/components/ReviewBox"), {
  loading: () => <p>Loading...</p>,
});

const PRODUCT_ONE_IMAGE = [
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/s/20/4c27265a-e09c-45cd-93fb-cfe8e12d2f0c.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/8c85b085-e179-4e3f-b52d-0163c0ddeb6a.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/d7ebf90a-dda3-42a7-bd9f-a01ae653a24a.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/89873be3-9d6c-4588-afc6-826e25a50fd2.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/40a3eb7b-5b4e-4c95-a9d4-64aa3178826b.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/fd5af1ae-1ff6-4ffa-a105-7f63cbab3dea.jpg",
  "https://img4.dhresource.com/webp/m/0x0/f3/albu/ry/g/13/1e49adfb-4857-4f0b-9eac-b9610f5450c5.jpg",
  "https://image.dhgate.com/webp/m/0x0/f2/albu/g22/M00/B1/A7/rBNaEmL4Z0mANAgyAAbNAv7L-Ac047.jpg",
  "/fonts-1.png",
  "/fonts-2.png",
];

export default function buy() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qty, setQty] = useState([{ text: "", color: "", remarks: "" }]);
  const [modalOpen, setModalOpen] = useState(false);

  const addQty = () => {
    const lastObject = qty.slice(-1)[0];
    setQty((prev) => [...prev, lastObject]);
  };

  const removeQty = () => {
    const newQty = [...qty];
    if (newQty.length == 1) return;
    newQty.pop();
    setQty(newQty);
  };

  const handleUpdateText = (index, newValue) => {
    const newArray = qty.map((object, i) => {
      if (i === index) {
        return { ...object, text: newValue };
      } else {
        return object;
      }
    });
    setQty(newArray);
  };

  const handleUpdateColor = (index, newValue) => {
    const newArray = qty.map((object, i) => {
      if (i === index) {
        return { ...object, color: newValue };
      } else {
        return object;
      }
    });
    setQty(newArray);
  };

  const handleUpdateRemarks = (index, newValue) => {
    const newArray = qty.map((object, i) => {
      if (i === index) {
        return { ...object, remarks: newValue };
      } else {
        return object;
      }
    });
    setQty(newArray);
  };

  const buyNow = (e) => {
    e.preventDefault();
    toastMessage("processing...", "promise");

    checkout({
      shipping_address_collection: {
			  allowed_countries: ['*'],
		  },
      lineItems: [
        {
          price: "price_1MkSMnD6sPj7OHyVZp4Lt1hH",
          quantity: qty.length,
        },
      ],
    });
  };

  const ProductDetails = () => {
    return (
      <>
        <div className="mt-6">
          <h2 className="text-3xl glowing-text-purple">Product Features</h2>
          <ul>
            <li className="mb-2">
              Custom neonsigns, We can make it in all kinds of fonts and in any
              language.
            </li>
            <li className="mb-2">
              We support size max 140cm long, height 60cm. multi font and color
              is available.
            </li>
            <li className="mb-2">
              Nice decoration for bedroom, child room, living room, bar, shop,
              cafe, restaurant, office, etc. as decorative lights.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl glowing-text-purple">Specification</h2>
          <ul>
            <li className="my-2">Name: Custom neon sign</li>
            <li className="mb-2">Material: Acrylic plate,Silica gel.</li>
            <li className="mb-2">Input voltage: 100V~240V</li>
            <li className="mb-2">Output voltage: 12V</li>
            <li className="mb-2">
              Applicable scenario: Bar, Disco, Party, Wedding, Birthday, Home
              decoration etc.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl glowing-text-purple">Package list</h2>
          <ul>
            <li className="my-2">1. The sign.</li>
            <li className="mb-2">2. Dimmer / Remote controller</li>
            <li className="mb-2">3. US/EU/UK/AU Plug</li>
            <li className="mb-2">4. Screws</li>
            <li className="mb-2">5. Hanging Chain.</li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div>
      <Toaster />
      <Modal
        title="Shipping Address"
        isOpen={modalOpen}
        close={setModalOpen}
        footerBtnFunc={buyNow}
      >
        <form onSubmit={(e) => buyNow(e)}>
          <div className="py-2">
            <Input
              id="color"
              name="color"
              type="email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="py-2">
            <SelectInput
              id="country"
              name="country"
              required={true}
              options={ALL_COUNTRIES}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              default_value="Please Select Your Country"
            />
          </div>
          <div className="py-2">
            <Input
              id="firstname"
              name="firstname"
              required={true}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name Middle Name"
            />
          </div>
          <div className="py-2">
            <Input
              id="lastname"
              name="lastname"
              required={true}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="py-2">
            <Input
              id="address-1"
              name="address-1"
              required={true}
              type="text"
              value={addressOne}
              onChange={(e) => setAddressOne(e.target.value)}
              placeholder="Address Line 1"
            />
          </div>
          <div className="py-2">
            <Input
              id="address-2"
              name="address-2"
              type="text"
              value={addressTwo}
              onChange={(e) => setAddressTwo(e.target.value)}
              placeholder="Address Line 2"
            />
          </div>
          <div className="py-2">
            <Input
              id="city"
              name="city"
              type="text"
              required={true}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="py-2">
            <Input
              id="region"
              name="region"
              type="text"
              required={true}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="State/Province/Region"
            />
          </div>
          <div className="py-2">
            <Input
              id="zip-code"
              name="zip-code"
              type="number"
              pattern="[0-9]*"
              required={true}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zip/Postal Code"
            />
          </div>
          <div className="py-2">
            <Input
              id="phone-number"
              name="phone-number"
              type="number"
              pattern="[0-9]*"
              required={true}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Mobile No./ Phone"
            />
          </div>
          <div className="my-2 flex items-center justify-end">
            <button 
              type="submit"
              className="outline-none glowing-text-orange text-white bg-black px-4 py-2 border-2 border-orange-500 -skew-x-12"
            >
              Continue &rarr;
            </button>
          </div>
        </form>
      </Modal>
      <div className="my-2 block sm:flex gap-8">
        <div>
          <ImageCarousel images={PRODUCT_ONE_IMAGE} />
          <div className="hidden sm:block">{ProductDetails()}</div>
        </div>
        <div className="my-6 sm:my-2">
          <h2 className="glowing-text-blue text-3xl">
            ${PRICE} USD{" "}
            <span className="glowing-text-red text-xl">(20% off)</span>
          </h2>
          <h1 className="my-2 glowing-text-green text-3xl">
            LED Neon Sign Custom Signs | Light | Shop | Pub | Store | Garm |
            Home | Wedding | Birthday | Party | Wall Decor
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-xl font-bold">24,732 sales</p>
            <div className="flex items-center">
              <img
                width="22"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmdF5GjEMxyXblOOpZIKGCZpOUDJB6QQlG6QTlE7QdoLSDdIJkk7QbBAyQeGJo/hO/UyO5IA7WyY2hH7xKz5bP0mW/xYIBz7wwO2HZ4B9RzBaBPRM9pDgiwEUhGfY0lcxYKMAEEE7n6kbAGgXRo9FU3cQYRwaIgqAnjb6iPS9bCwRnqnWfHgQAFkqbwDweNVYGskk6zx5gCrvL42OEYXgKZSn6pIAulWeRoArkejTkFEICkBT1c0RLm0GCoLTkBUpKECeqgsCeGf1MOIP2Zz3Q0UhGABNk+MctSmdziFIdbCVjpwTGROCAWSzxhCIPjD2BAgYhSAAFReXiyPYxRYEIJupARB8clm98jvCZ9nUA69vKiZbAUxeA+hX5rsM6BhFcTkRtBHg5L6+15RNl3GmrJbWuIZCalBOIwlYnBF1azsvGwAPImz9JnWZE/t3GhHCR9XMLso7bQBkqfpTEmGxrfJdfywTfeQCMIrxpe/Ku5mPtzKZr2iszRSqUJK7Mc69CyG9d6aQWaaQBCbXnkwk6oRgbRWiv42TPCdTJfYOYVOx9jJ6B2EeIa/dAY4yYyIIejbx57zIilvWRGLXEBMhsIsv5tc21zgBFmeCoE2zhdJ8G8XPm4uyjDefsQCW63sJtu1J2cZ7AywkhY/q9IfwMn4rgAVE2jgHoEXPJ+QQAt+4cn59P68UekilLdQng3R3AKn6DSU1yrCNNWWbroV3BIqyagRf+LHFS80bwNb3eTyRf/PLGyByFQLR1Ec+PVR/gMjvhSrF+eibeLlAIfDMAY45vslEn3M38IqA7+MdAX4ZQ3wkiPlGJLqyNVkF5QfAL58TABzIZP61dPGZDgRLmstEs+1iT+SWT+NBJNVf7ySYDgehHnKi4dM/ZQMwyueK1+tyuJAh9mh49IzYALbyWef1OghXNBDgp0h0j3OQ+QDV5ZPl9S2isdE+qVvDB2Cl3eLrdc9oTGSil38QWgPBBih1Ksw76L7CcMLMmVM6G+B6B5fXYwNwjNjHnGeAfXj9v0qhfwqxYkBfDAY2AAAAAElFTkSuQmCC"
              />
              <img
                width="22"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmdF5GjEMxyXblOOpZIKGCZpOUDJB6QQlG6QTlE7QdoLSDdIJkk7QbBAyQeGJo/hO/UyO5IA7WyY2hH7xKz5bP0mW/xYIBz7wwO2HZ4B9RzBaBPRM9pDgiwEUhGfY0lcxYKMAEEE7n6kbAGgXRo9FU3cQYRwaIgqAnjb6iPS9bCwRnqnWfHgQAFkqbwDweNVYGskk6zx5gCrvL42OEYXgKZSn6pIAulWeRoArkejTkFEICkBT1c0RLm0GCoLTkBUpKECeqgsCeGf1MOIP2Zz3Q0UhGABNk+MctSmdziFIdbCVjpwTGROCAWSzxhCIPjD2BAgYhSAAFReXiyPYxRYEIJupARB8clm98jvCZ9nUA69vKiZbAUxeA+hX5rsM6BhFcTkRtBHg5L6+15RNl3GmrJbWuIZCalBOIwlYnBF1azsvGwAPImz9JnWZE/t3GhHCR9XMLso7bQBkqfpTEmGxrfJdfywTfeQCMIrxpe/Ku5mPtzKZr2iszRSqUJK7Mc69CyG9d6aQWaaQBCbXnkwk6oRgbRWiv42TPCdTJfYOYVOx9jJ6B2EeIa/dAY4yYyIIejbx57zIilvWRGLXEBMhsIsv5tc21zgBFmeCoE2zhdJ8G8XPm4uyjDefsQCW63sJtu1J2cZ7AywkhY/q9IfwMn4rgAVE2jgHoEXPJ+QQAt+4cn59P68UekilLdQng3R3AKn6DSU1yrCNNWWbroV3BIqyagRf+LHFS80bwNb3eTyRf/PLGyByFQLR1Ec+PVR/gMjvhSrF+eibeLlAIfDMAY45vslEn3M38IqA7+MdAX4ZQ3wkiPlGJLqyNVkF5QfAL58TABzIZP61dPGZDgRLmstEs+1iT+SWT+NBJNVf7ySYDgehHnKi4dM/ZQMwyueK1+tyuJAh9mh49IzYALbyWef1OghXNBDgp0h0j3OQ+QDV5ZPl9S2isdE+qVvDB2Cl3eLrdc9oTGSil38QWgPBBih1Ksw76L7CcMLMmVM6G+B6B5fXYwNwjNjHnGeAfXj9v0qhfwqxYkBfDAY2AAAAAElFTkSuQmCC"
              />
              <img
                width="22"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmdF5GjEMxyXblOOpZIKGCZpOUDJB6QQlG6QTlE7QdoLSDdIJkk7QbBAyQeGJo/hO/UyO5IA7WyY2hH7xKz5bP0mW/xYIBz7wwO2HZ4B9RzBaBPRM9pDgiwEUhGfY0lcxYKMAEEE7n6kbAGgXRo9FU3cQYRwaIgqAnjb6iPS9bCwRnqnWfHgQAFkqbwDweNVYGskk6zx5gCrvL42OEYXgKZSn6pIAulWeRoArkejTkFEICkBT1c0RLm0GCoLTkBUpKECeqgsCeGf1MOIP2Zz3Q0UhGABNk+MctSmdziFIdbCVjpwTGROCAWSzxhCIPjD2BAgYhSAAFReXiyPYxRYEIJupARB8clm98jvCZ9nUA69vKiZbAUxeA+hX5rsM6BhFcTkRtBHg5L6+15RNl3GmrJbWuIZCalBOIwlYnBF1azsvGwAPImz9JnWZE/t3GhHCR9XMLso7bQBkqfpTEmGxrfJdfywTfeQCMIrxpe/Ku5mPtzKZr2iszRSqUJK7Mc69CyG9d6aQWaaQBCbXnkwk6oRgbRWiv42TPCdTJfYOYVOx9jJ6B2EeIa/dAY4yYyIIejbx57zIilvWRGLXEBMhsIsv5tc21zgBFmeCoE2zhdJ8G8XPm4uyjDefsQCW63sJtu1J2cZ7AywkhY/q9IfwMn4rgAVE2jgHoEXPJ+QQAt+4cn59P68UekilLdQng3R3AKn6DSU1yrCNNWWbroV3BIqyagRf+LHFS80bwNb3eTyRf/PLGyByFQLR1Ec+PVR/gMjvhSrF+eibeLlAIfDMAY45vslEn3M38IqA7+MdAX4ZQ3wkiPlGJLqyNVkF5QfAL58TABzIZP61dPGZDgRLmstEs+1iT+SWT+NBJNVf7ySYDgehHnKi4dM/ZQMwyueK1+tyuJAh9mh49IzYALbyWef1OghXNBDgp0h0j3OQ+QDV5ZPl9S2isdE+qVvDB2Cl3eLrdc9oTGSil38QWgPBBih1Ksw76L7CcMLMmVM6G+B6B5fXYwNwjNjHnGeAfXj9v0qhfwqxYkBfDAY2AAAAAElFTkSuQmCC"
              />
              <img
                width="22"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmdF5GjEMxyXblOOpZIKGCZpOUDJB6QQlG6QTlE7QdoLSDdIJkk7QbBAyQeGJo/hO/UyO5IA7WyY2hH7xKz5bP0mW/xYIBz7wwO2HZ4B9RzBaBPRM9pDgiwEUhGfY0lcxYKMAEEE7n6kbAGgXRo9FU3cQYRwaIgqAnjb6iPS9bCwRnqnWfHgQAFkqbwDweNVYGskk6zx5gCrvL42OEYXgKZSn6pIAulWeRoArkejTkFEICkBT1c0RLm0GCoLTkBUpKECeqgsCeGf1MOIP2Zz3Q0UhGABNk+MctSmdziFIdbCVjpwTGROCAWSzxhCIPjD2BAgYhSAAFReXiyPYxRYEIJupARB8clm98jvCZ9nUA69vKiZbAUxeA+hX5rsM6BhFcTkRtBHg5L6+15RNl3GmrJbWuIZCalBOIwlYnBF1azsvGwAPImz9JnWZE/t3GhHCR9XMLso7bQBkqfpTEmGxrfJdfywTfeQCMIrxpe/Ku5mPtzKZr2iszRSqUJK7Mc69CyG9d6aQWaaQBCbXnkwk6oRgbRWiv42TPCdTJfYOYVOx9jJ6B2EeIa/dAY4yYyIIejbx57zIilvWRGLXEBMhsIsv5tc21zgBFmeCoE2zhdJ8G8XPm4uyjDefsQCW63sJtu1J2cZ7AywkhY/q9IfwMn4rgAVE2jgHoEXPJ+QQAt+4cn59P68UekilLdQng3R3AKn6DSU1yrCNNWWbroV3BIqyagRf+LHFS80bwNb3eTyRf/PLGyByFQLR1Ec+PVR/gMjvhSrF+eibeLlAIfDMAY45vslEn3M38IqA7+MdAX4ZQ3wkiPlGJLqyNVkF5QfAL58TABzIZP61dPGZDgRLmstEs+1iT+SWT+NBJNVf7ySYDgehHnKi4dM/ZQMwyueK1+tyuJAh9mh49IzYALbyWef1OghXNBDgp0h0j3OQ+QDV5ZPl9S2isdE+qVvDB2Cl3eLrdc9oTGSil38QWgPBBih1Ksw76L7CcMLMmVM6G+B6B5fXYwNwjNjHnGeAfXj9v0qhfwqxYkBfDAY2AAAAAElFTkSuQmCC"
              />
              <img
                width="22"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmdF5GjEMxyXblOOpZIKGCZpOUDJB6QQlG6QTlE7QdoLSDdIJkk7QbBAyQeGJo/hO/UyO5IA7WyY2hH7xKz5bP0mW/xYIBz7wwO2HZ4B9RzBaBPRM9pDgiwEUhGfY0lcxYKMAEEE7n6kbAGgXRo9FU3cQYRwaIgqAnjb6iPS9bCwRnqnWfHgQAFkqbwDweNVYGskk6zx5gCrvL42OEYXgKZSn6pIAulWeRoArkejTkFEICkBT1c0RLm0GCoLTkBUpKECeqgsCeGf1MOIP2Zz3Q0UhGABNk+MctSmdziFIdbCVjpwTGROCAWSzxhCIPjD2BAgYhSAAFReXiyPYxRYEIJupARB8clm98jvCZ9nUA69vKiZbAUxeA+hX5rsM6BhFcTkRtBHg5L6+15RNl3GmrJbWuIZCalBOIwlYnBF1azsvGwAPImz9JnWZE/t3GhHCR9XMLso7bQBkqfpTEmGxrfJdfywTfeQCMIrxpe/Ku5mPtzKZr2iszRSqUJK7Mc69CyG9d6aQWaaQBCbXnkwk6oRgbRWiv42TPCdTJfYOYVOx9jJ6B2EeIa/dAY4yYyIIejbx57zIilvWRGLXEBMhsIsv5tc21zgBFmeCoE2zhdJ8G8XPm4uyjDefsQCW63sJtu1J2cZ7AywkhY/q9IfwMn4rgAVE2jgHoEXPJ+QQAt+4cn59P68UekilLdQng3R3AKn6DSU1yrCNNWWbroV3BIqyagRf+LHFS80bwNb3eTyRf/PLGyByFQLR1Ec+PVR/gMjvhSrF+eibeLlAIfDMAY45vslEn3M38IqA7+MdAX4ZQ3wkiPlGJLqyNVkF5QfAL58TABzIZP61dPGZDgRLmstEs+1iT+SWT+NBJNVf7ySYDgehHnKi4dM/ZQMwyueK1+tyuJAh9mh49IzYALbyWef1OghXNBDgp0h0j3OQ+QDV5ZPl9S2isdE+qVvDB2Cl3eLrdc9oTGSil38QWgPBBih1Ksw76L7CcMLMmVM6G+B6B5fXYwNwjNjHnGeAfXj9v0qhfwqxYkBfDAY2AAAAAElFTkSuQmCC"
              />
            </div>
          </div>
          <form
            className="my-4 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            {qty.map((_, index) => (
              <>
                <div className="w-fit py-1 px-2 bg-orange-500 -skew-x-12">
                  Neon sign {index + 1}
                </div>
                <Input
                  required={true}
                  value={qty[index].text}
                  onChange={(e) => handleUpdateText(index, e.target.value)}
                  placeholder="Enter word here e.g Let's party"
                />
                <SelectInput
                  id="color"
                  name="color"
                  required={true}
                  value={qty[index].color}
                  onChange={(e) => handleUpdateColor(index, e.target.value)}
                  default_value="select a color"
                  options={ALL_COLORS}
                />
                <TextArea
                  required={true}
                  value={qty[index].remarks}
                  onChange={(e) => handleUpdateRemarks(index, e.target.value)}
                  placeholder="Please add remark: (e.g font, size, design...)"
                />
              </>
            ))}
            <div className="mt-2 px-4 py-2 max-w-sm border-2 border-orange-500 -skew-x-12 flex items-center justify-between">
              <p>Quantity: {qty.length}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => addQty()}
                  className="w-12 text-5xl border-2 border-orange-500 hover:bg-orange-500"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => removeQty()}
                  className="w-12 px-2 text-5xl border-2 border-orange-500 hover:bg-orange-500"
                >
                  -
                </button>
              </div>
            </div>
            <div className="px-6 py-2 max-w-sm border-2 border-orange-500 -skew-x-12">
              Quantity: {qty.length} <br />
              Total: ${qty.length * PRICE} USD
            </div>
            <button
              type="submit"
              className="my-2 px-6 py-2 w-fit flex gap-4 glowing-text-orange border-2 border-orange-500 -skew-x-12"
            >
              Buy now
            </button>
          </form>

          <div className="block sm:hidden">{ProductDetails()}</div>
        </div>
      </div>
      <div>
        <p className="mb-4 text-3xl glowing-text-red text-center">Reviews</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <ReviewBox
            comment="Exactly what we wanted. I was so surprised by how light the sign is - both in weight and brightness! From ordering to delivery was incredibly fast as well."
            username="Kate"
            date="03 Mar, 2023"
          />
          <ReviewBox
            comment="The sign came in just as expected, i loved the color and the font. The quality was really good too! I thought it was gonna be heavy but it wasn’t. Overall it was a great transaction and my partner loved the sign so much!"
            username="Thyra Baring"
            date="25 Feb, 2023"
          />
          <ReviewBox
            comment="The sign was perfect! Securely packaged and quality was superb. I will definitely be ordering again from this shop."
            username="Lesley Kubelka"
            date="14 Feb, 2023"
          />
          <ReviewBox
            comment="Literally one of my favorite purchases to date. Excellent communication. Beautiful design and outstanding color!!!! I’m So happy with this purchase."
            username="Morgan N."
            date="06 Mar, 2023"
          />
          <ReviewBox
            comment="The sign looks amazing! The sign shipped so quickly. I absolutely recommend this shop and would buy from again. The recipient really loved this gift."
            username="Angie Martinez"
            date="07 Mar, 2023"
          />
        </div>
      </div>
    </div>
  );
}
