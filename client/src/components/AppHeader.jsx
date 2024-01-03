import { useContext } from "react";
import { nameContext } from "../context/NameContext";

function AppHeader() {
  const infoContext = useContext(nameContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {infoContext.userData.username}</h2>
    </div>
  );
}

export default AppHeader;
