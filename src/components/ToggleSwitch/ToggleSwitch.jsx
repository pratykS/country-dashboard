import { connect } from "react-redux";
import { setType } from "../../store/actions";
import * as styles from "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  const options = ["Table", "Grid", "Chart"];
  const { setType } = props;

  const onClickHandler = async (e) => {
    setType(e.target.innerHTML);
  };

  return (
    <>
      <div className="header">
        {options.map((o, i) => (
          <span key={i} onClick={onClickHandler} className="toggleSwitch">
            {o}
          </span>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setType: (type) => setType(type),
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitch);
