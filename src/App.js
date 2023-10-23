
import "./App.css";
import ScanWrap from "scandoc-onboarding";
import "scandoc-onboarding/dist/css/onboarding.css";
import React from "react";

function App() {
  React.useEffect(() => {
    const lib = new ScanWrap({
      el: "videoCapturingEl",
      domainApi: "https://fraudfighter.azure-api.net/test-router",
      customerKey: "be608d0b-53c2-4c3a-8501-5e55ec17ceeb",
      domainId: "5cf9a48f-0ae9-466d-915e-08dbd3f1ad4a",
      publicKey: "pk_274eb098-b9df-43f5-84d2-d48d389bfc0e",
      configApi: "https://api-dvsonline.idscan.net/",
    });
  }, []);

  return (
    <div className="App">
      <div id="videoCapturingEl"></div>
    </div>
  );
}

export default App;
