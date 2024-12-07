import React, { useState } from 'react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [profileImage, setProfileImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert('Changes saved!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-6xl p-12 mt-[-30px] ml-[-215px]">
        <div className="flex border-b mb-5 space-x-4 text-sm">
          <button
            className={`border-b-2 px-4 py-2 font-inter text-[16px] ${activeTab === "Edit Profile" ? "border-black" : "text-[#718EBF]"}`}
            onClick={() => setActiveTab("Edit Profile")}
          >
            Edit Profile
          </button>
          <button
            className={`px-4 py-2 text-[16px] font-inter ${activeTab === "Preferences" ? "border-b-2 border-black" : "text-[#718EBF]"}`}
            onClick={() => setActiveTab("Preferences")}
          >
            Preferences
          </button>
          <button
            className={`px-4 py-2 text-[16px] font-inter ${activeTab === "Security" ? "border-b-2 border-black" : "text-[#718EBF]"}`}
            onClick={() => setActiveTab("Security")}
          >
            Security
          </button>
        </div>

        {activeTab === "Edit Profile" && (
          <div>
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-2 flex flex-col items-center">
                <label className="block text-[16px] text-[#232323] font-inter">Profile Picture</label>
                <div className="w-32 h-32 mb-4 rounded-full border border-gray-300 overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400"></span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border rounded-lg px-4 py-2 mt-1 text-[15px] font-inter text-[#718EBF]"
                />
              </div>

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
              <button
                onClick={handleSave}
                className="bg-black w-[190px] h-[50px] text-[16px] text-white font-inter rounded-[15px]"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {activeTab === "Preferences" && (
          <div className="text-center">
            <p className="text-lg font-medium">Preferences Settings</p>
            <p>Content coming soon...</p>
          </div>
        )}

        {activeTab === "Security" && (
          <div className="text-center">
            <p className="text-lg font-medium">Security Settings</p>
            <p>Content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
