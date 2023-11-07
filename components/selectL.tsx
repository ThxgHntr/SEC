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
        countries={["GB", "VN", "JP"]}
        customLabels={{
          GB: "English",
          VN: "Tiếng Việt",
          JP: "日本語",
        }}
        placeholder="Language"
        showOptionLabel
        showSelectedLabel
        selectButtonClassName="text-red-500"
      />
    </div>
  );
};

export default SelectL;
