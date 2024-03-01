import React from "react";

const sizes = {
  s: "text-[70px] font-bold leading-[110%]",
  xs: "text-[25px] font-semibold leading-[200%]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-red-400 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
