import React, { useState, useEffect } from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        localStorage.setItem("profileImage", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("Changes saved!");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-xl w-full max-w-none mx-auto p-6 sm:p-8">
        <div className="flex border-b mb-6 space-x-4 sm:space-x-8 text-sm sm:text-lg overflow-x-auto">
          {["Edit Profile", "Preferences", "Security"].map((tab) => (
            <button
              key={tab}
              className={`border-b-2 px-2 sm:px-4 py-2 font-inter whitespace-nowrap ${
                activeTab === tab ? "border-black font-bold" : "text-[#718EBF]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "Edit Profile" && (
          <div>
            <div className="flex flex-col items-center sm:flex-row sm:items-start mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border border-gray-300 overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 flex items-center justify-center w-full h-full bg-gray-100">
                    No Image
                  </span>
                )}
                <div
                  className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer"
                  onClick={() => document.getElementById("profileImageUpload").click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0l-10 10a1 1 0 00-.293.707V16a1 1 0 001 1h2.586a1 1 0 00.707-.293l10-10zM15.586 4l1.414 1.414-10 10H5.586v-1.414l10-10z" />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  id="profileImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full sm:w-[90%] lg:w-[1243px]">
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Charlene Reed"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="charlene.reed"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="charlenereed@gmail.com"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Date of Birth
                </label>
                <input
                  type="text"
                  defaultValue="25 January 1990"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Present Address
                </label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Permanent Address
                </label>
                <input
                  type="text"
                  defaultValue="San Jose, California, USA"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="San Jose"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Postal Code
                </label>
                <input
                  type="text"
                  defaultValue="45962"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#232323]">
                  Country
                </label>
                <input
                  type="text"
                  defaultValue="USA"
                  className="w-full border rounded-lg px-4 py-3 mt-2 text-sm sm:text-base font-inter text-[#232323]"
                />
              </div>
            </form>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSave}
                className="bg-black w-full sm:w-[200px] h-[55px] text-white font-semibold text-lg rounded-lg mr-[47px] hover:bg-gray-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
