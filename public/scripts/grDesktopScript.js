import Script from "next/script";

const desktop = ({ onlineHash }) => {
  console.log(onlineHash);
  return (
    <>
      <div className=" h-screen w-full" id="golden-race-desktop-app" />
      <Script
        src="https://int.virtustec.com/desktop-v4/default/golden-race-desktop-loader.js"
        id="golden-race-desktop-loader"
        onLoad={() => {
          console.log("Script has loaded");

          var loader = grDesktopLoader({
            onlineHash: `${onlineHash}`, // Credentials for external API login.
          });
          console.log("2 Script has loaded");
        }}
      />

      {/* <Script type="text/javascript" src="scripts/gr.js" /> */}
    </>
  );
};

export default desktop;
