import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { withRouter } from "next/router";

const casino = () => {
  const router = useRouter();
  const [onlineHash, setOnlineHash] = useState();
  const [profile, setProfile] = useState();
  let username = "";

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/test/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (res.ok) {
      const json = await res.json();
      setProfile(json);
      username = json.username;
    } else {
      router.push("/");
    }
  }

  const handleOnClickDesk = () => {
    router.push("/gr/desktop");
  };

  async function handleOnClickMob() {
    router.push("/mobile");
  }

  return (
    <div className="flex-1 text-center p-20 space-x-10">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl"
        onClick={handleOnClickDesk}
      >
        Desktop
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl"
        onClick={handleOnClickMob}
      >
        Mobile
      </button>
    </div>
  );
};

export default withRouter(casino);
