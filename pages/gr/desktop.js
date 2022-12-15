import Script from "next/script";
import DesktopScript from "../../public/scripts/grDesktopScript";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Desktop = () => {
  const router = useRouter();
  const [state, setState] = useState({
    amount: 0,
  });
  const [profile, setProfile] = useState();
  const [onlineHash, setOnlineHash] = useState();
  const [isloaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [amount, setAmount] = useState(state.amount);
  const [username, setUsername] = useState();

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
      setUsername(json.username);
      logUser(json.username);
    } else {
      router.push("/");
    }
  }

  async function logUser(username) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gr/get-url?entityName=${username}`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      const onlineHash = await res.text();
      setOnlineHash(onlineHash);
      setLoaded(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  async function handleClick() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wallet/add-credit?credit=${state.amount}&username=${username}`,
      {
        method: "POST",
        mode: "no-cors",
      }
    );
    console.log(res);
    setShowModal(false);
    setLoaded(true);
  }

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    console.log(copy);
    setState(copy);
  }

  return (
    <>
      {!showModal ? (
        onlineHash ? (
          <DesktopScript onlineHash={onlineHash} />
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div className="flex-1 text-center p-20 space-x-10">
          <div>How much money you want to add?</div>
          <input
            className=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none"
            type="number"
            name="amount"
            placeholder="EUR"
            value={state.amount}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      )}
    </>
  );
};
export default Desktop;
