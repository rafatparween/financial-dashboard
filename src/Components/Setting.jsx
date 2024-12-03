import React from 'react';

const Setting = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
        <div className="flex border-b mb-5 space-x-4 text-sm">
          <button className="border-b-2 border-black px-4 py-2 font-inter text-[16px]">Edit Profile</button>
          <button className="text-[#718EBF] px-4 py-2 text-[16px] font-inter">Preferences</button>
          <button className="text-[#718EBF] px-4 py-2 font-inter text-[16px]">Security</button>
        </div>
        <form className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Your Name</label>
            <input
              type="text"
              defaultValue="Charlene Reed"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">User Name</label>
            <input
              type="text"
              defaultValue="Charlene Reed"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Email</label>
            <input
              type="email"
              defaultValue="charlenereed@gmail.com"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              defaultValue="********"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Date of Birth</label>
            <input
              type="text"
              defaultValue="25 January 1990"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Present Address</label>
            <input
              type="text"
              defaultValue="San Jose, California, USA"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Permanent Address</label>
            <input
              type="text"
              defaultValue="San Jose, California, USA"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">City</label>
            <input
              type="text"
              defaultValue="San Jose"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-[16px] text-[#232323] font-inter">Postal Code</label>
            <input
              type="text"
              defaultValue="45962"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600text-[16px] text-[#232323] font-inter">Country</label>
            <input
              type="text"
              defaultValue="USA"
              className="w-full border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
            />
          </div>
        </form>
        <div className="flex justify-end mt-5">
          <button className="bg-black w-[190px] h-[50px] text-[16px] text-white font-inter rounded-[15px]">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
