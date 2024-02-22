import React from "react";

const sizeClasses = {
  txtOpenSansRomanBold70: "font-bold font-opensans",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular20Gray300: "font-normal font-poppins",
  txtOpenSansRomanRegular16Gray900cc: "font-normal font-opensans",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsRegular20Gray301: "font-normal font-poppins",
  txtPoppinsRegular14Gray301: "font-normal font-poppins",
  txtPoppinsSemiBold25Red400: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtTinosBold52: "font-bold font-tinos",
  txtOpenSansRomanBold52: "font-bold font-opensans",
  txtPoppinsSemiBold25WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsRegular20Gray801: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
