import React from "react";

const sizeClasses = {
  txtOpenSansRomanRegular16Gray900a2: "font-normal font-opensans",
  txtOpenSansRomanBold70: "font-bold font-opensans",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular1662: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtTinosBold52: "font-bold font-tinos",
  txtOpenSansRomanBold52: "font-bold font-opensans",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtOpenSansRomanBold80: "font-bold font-opensans",
  txtOpenSansRomanRegular16Red400: "font-normal font-opensans",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular20Gray300: "font-normal font-poppins",
  txtPoppinsRegular14Gray800: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtPoppinsSemiBold25Gray900: "font-poppins font-semibold",
  txtPoppinsRegular20Gray301: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold25Red400: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold25WhiteA700: "font-poppins font-semibold",
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
