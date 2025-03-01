import React from "react";

const Services = () => {
  return (
    <div className="p-6 mb-34 mt-0">
      {/* Banner Section (Just Below Header) */}
      <div className="relative bg-cover bg-center h-72 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
        {/* <p className="text-sm">Home /</p>
        <h1 className="text-3xl font-bold">Home services, on demand.</h1> */}
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex border rounded bg-white text-black w-full md:w-150 h-14 p-2 items-center">
            <span className="px-2 text-3xl">🔍</span>
            <input type="text-md" placeholder="Search for services" className="w-full outline-none" />
          </div>
        </div>
      </div>

      {/* Top Services */}
      <div className="flex justify-center space-x-6 bg-white p-4 rounded-lg shadow-lg mt--2 mb-10">
        <div className="flex flex-col items-center ml-1">
          <img src="/images/Women.jpeg" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Salon For Women</p>
        </div>
        <div className="flex flex-col items-center ml-1">
        <img src="/images/nailHair.jpeg" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Hair, Skin & Nails</p>
        </div>
        <div className="flex flex-col items-center ml-1">
        <img src="/images/womenTherapy.jpeg" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Women's Therapies</p>
        </div>
        <div className="flex flex-col items-center ml-1">
        <img src="/images/salonForMen.jpeg" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Salon For Men</p>
        </div>
        <div className="flex flex-col items-center ml-1">
        <img src="/images/mensTherapy.jpeg" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Men's Therapies</p>
        </div>
      </div>

      {/* Featured Services */}
      <h2 className="text-center text-xl font-bold mt-8 mb-4">Salon, Spa and Massage Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-10">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img src="/images/salon.webp" alt="Salon Prime" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Salon Prime</p>
          <p className="text-xs text-gray-500">Free Waxing</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img src="/images/SalonMen.webp" alt="Salon for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Salon for Men</p>
          <p className="text-xs text-gray-500">Flat ₹100 off</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img src="/images/SpaWomen.webp" alt="Spa for Women" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Spa for Women</p>
          <p className="text-xs text-gray-500">Free head massage</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <img src="/images/MassageForMen.webp" alt="Massage for Men" className="w-full rounded-md" />
          <p className="text-sm font-semibold">Massage for Men</p>
          <p className="text-xs text-gray-500">Starts at ₹499</p>
        </div>
      </div>

      {/* Home Services */}
      <h2 className="text-center text-xl font-bold mt-8 mb-4">Home Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center mb-15">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img src="/images/Appliance.webp" alt="Massage for Men" className="w-half rounded-md" />
        <p className="text-sm font-semibold">Appliance Repair</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img src="/images/Sale.webp" alt="Massage for Men" className="w-half rounded-md" />
        <p className="text-sm font-semibold">Home Painting</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img src="/images/cleaning.webp" alt="Massage for Men" className="w-half rounded-md" />
          <p className="text-sm font-semibold">Cleaning & Pest</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img src="/images/disinfectant.webp" alt="Massage for Men" className="w-half rounded-md" />
          <p className="text-sm font-semibold">Disinfection</p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img src="/images/HomeRepairs.webp" alt="Massage for Men" className="w-half rounded-md" />
          <p className="text-sm font-semibold">Home Repairs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
