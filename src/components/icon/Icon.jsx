import iconSet from "./selection.json";
import IcomoonReact from "icomoon-react";
import PropTypes from "prop-types";

export const Icon = ({ className, icon, ...props }) => {
  return <IcomoonReact iconSet={iconSet} color="currentColor" icon={icon} className={className} {...props} />;
};
Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};
