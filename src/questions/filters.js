import React from "react";
import {
  CButton,
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CInputCheckbox,
  CTooltip
} from "@coreui/react";
import Select from 'react-select';
import '../index.css'

export const Difficulty = (props) => {
  const val = props.val
  return (
    <CDropdown className="m-1">
        <CTooltip content="Tooltip text">
      <CDropdownToggle value="EASY">Difficulty</CDropdownToggle>
      </CTooltip>
      <CDropdownMenu>
        <CDropdownItem className={val === 0 && "active"} name="difficulty" onClick={props.onChange} value="0">EASY</CDropdownItem>
        <CDropdownItem className={val === 1 && "active"} name="difficulty" onClick={props.onChange} value="1">MEDIUM</CDropdownItem>
        <CDropdownItem className={val === 2 && "active"} name="difficulty" onClick={props.onChange} value="2">HARD</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};
export const Random = () => {
  return (
    <CButton className="random-button">Select Random</CButton>
  )
}

export const List = () => {

    return (
      <CDropdown className="m-1">
          <CTooltip content="Tooltip text">
        <CDropdownToggle>Lists</CDropdownToggle>
        </CTooltip>
        <CDropdownMenu>
          <CDropdownItem>TODO</CDropdownItem>
          <CDropdownItem>IMPORTANT</CDropdownItem>
          <CDropdownItem>FAVORITE</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  };

  export const Company = () => {

    return (
      <CDropdown className="m-1">
<CTooltip content="Tooltip text">
        <CDropdownToggle>Company</CDropdownToggle>
        </CTooltip>        <CDropdownMenu>
          <CDropdownItem>EASY</CDropdownItem>
          <CDropdownItem>MEDIUM</CDropdownItem>
          <CDropdownItem>HARD</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  };