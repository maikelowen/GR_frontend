import React from 'react'

const addCredit = ({amount, username}) => {

  console.log(state.amount);
    console.log(profile.username);
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


  return (
    <div>add-credit</div>
  )
}

export default addCredit