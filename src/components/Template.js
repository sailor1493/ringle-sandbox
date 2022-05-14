import CustomAppBar from "../components/CustomAppBar";
import Navigation from "../components/Navigation";
import "../styles.css";

const Template = ({ children, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh"
      }}
    >
      <Navigation />
      <div style={{ height: "100vh", flex: 1 }}>
        <CustomAppBar title={title} />
        <div style={{ display: "flex", flexDirection: "column", padding: 24 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Template;
