import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

interface props {
  language: string;
  setLanguage(e: any): void;
}

const SelectL = (props: props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className="selectLanguage">
      <ReactFlagsSelect
        selected={props.language}
        onSelect={(code) => props.setLanguage(code)}
        countries={["GB", "VN", "JP", "FR"]}
        customLabels={{
          GB: "English",
          VN: "Tiếng Việt",
          JP: "日本語",
          FR: "Français",
        }}
        placeholder="Language"
        showOptionLabel
        showSelectedLabel
        selectButtonClassName="hover:text-vang-khe"
      />
    </div>
  );
};

export default SelectL;
