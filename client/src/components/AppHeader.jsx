import { useContext } from "react";
import { DataContext } from "../contexts/Context";

function AppHeader() {
  const contextData = useContext(DataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ ({contextData.dataStatus.username})</h2>
    </div>
  );
}

export default AppHeader;
