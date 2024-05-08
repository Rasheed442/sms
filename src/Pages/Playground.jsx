// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import Badge from "@mui/material/Badge";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import styled from "styled-components";
// import CheckIcon from "@mui/icons-material/Check";

// const Calendar = () => {
//   const [value, setValue] = useState(new Date());
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);
//   return (
//     <PlayStyle>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <StaticDatePicker
//           // mask='____/__/__'
//           // variant="static"
//           orientation="portrait"
//           openTo="day"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//           renderInput={(params) => {
//             <TextField {...params} />;
//           }}
//           renderDay={(day, _value, DayComponentProps) => {
//             const isSelected =
//               !DayComponentProps.outsideCurrentMonth &&
//               highlightedDays.indexOf(day.getDate()) >= 0;

//             return (
//               <Badge
//                 key={day.toString()}
//                 overlap="rectangular"
//                 badgeContent={
//                   isSelected ? <CheckIcon color="red" /> : undefined
//                 }
//               >
//                 <PickersDay {...DayComponentProps} />
//               </Badge>
//             );
//           }}
//         />
//       </LocalizationProvider>
//     </PlayStyle>
//   );
// };

// export default Calendar;
// const PlayStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: red;
// `;

import React from "react";

function Playground() {
  return (
    <div>
      <p className="text-3xl font-bold text-blue-500">hhhh</p>
    </div>
  );
}

export default Playground;
