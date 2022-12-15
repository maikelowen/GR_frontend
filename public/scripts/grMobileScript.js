import Script from "next/script";

const mobile = ({ onlineHash }) => {
  //console.log(onlineHash);
  return (
    <>
      <div className=" h-screen w-full" id="golden-race-mobile-app" />
      <Script
        src="https://int.virtustec.com/mobile-v4/golden-race-mobile-loader.js"
        id="golden-race-mobile-loader"
        onLoad={() => {
          console.log("Script has loaded");

          var grLoader = grMobileLoader({
            onlineHash: `${onlineHash}`, // Credentials for external API login.
          });
          console.log("2 Script has loaded");
        }}
      />

      {/* <Script type="text/javascript" src="scripts/gr.js" /> */}
    </>
  );
};

export default mobile;
